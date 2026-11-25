import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const KEY_ROUTES = [
  { path: '/', name: 'Homepage' },
  { path: '/blog/', name: 'Blog index' },
  { path: '/about', name: 'About page' },
  { path: '/contact', name: 'Contact page' },
  { path: '/project/crimson-carpet', name: 'Project detail (single)' },
  { path: '/project/japan-cherry-blossom', name: 'Project detail (gallery)' },
];

function collectRuntimeErrors(page) {
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', (err) => pageErrors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore third-party network errors (e.g. GA/Fonts/FontAwesome if offline)
      // and legacy jQuery 3.2.1 / history.js deprecated `unload` listener warning (tracked in #194/#197).
      if (
        !/googletagmanager|google-analytics|fonts\.googleapis|fontawesome/i.test(text) &&
        !/Permissions policy violation: unload/i.test(text)
      ) {
        consoleErrors.push(text);
      }
    }
  });
  return { pageErrors, consoleErrors };
}

test.describe('Core routes & runtime health', () => {
  for (const route of KEY_ROUTES) {
    test(`${route.name} (${route.path}) loads cleanly with decoded images`, async ({ page }) => {
      const { pageErrors, consoleErrors } = collectRuntimeErrors(page);

      const response = await page.goto(route.path, { waitUntil: 'load' });
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(/H\.K\. Vision/i);

      // Ensure body becomes visible (important while body.loading exists, and after removal)
      await expect(page.locator('.page')).toBeVisible();

      // Verify above-the-fold / eager images decode cleanly
      const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img'))
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute('src'));
      });
      expect(brokenImages, `Broken images on ${route.path}`).toEqual([]);

      expect(pageErrors, `Uncaught page errors on ${route.path}`).toEqual([]);
      expect(consoleErrors, `Console errors on ${route.path}`).toEqual([]);
    });
  }
});

test.describe('Responsive layout & navigation', () => {
  test('Desktop (1280x800) has no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'load' });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('Mobile (390x844) has no horizontal overflow and menu toggles cleanly', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'load' });

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);

    const toggle = page.locator('.js-menu-toggle');
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.locator('body')).toHaveClass(/menu--open/);
    await toggle.click();
    await expect(page.locator('body')).not.toHaveClass(/menu--open/);
  });
});

test.describe('Color schemes & gallery interaction', () => {
  for (const scheme of ['light', 'dark']) {
    test(`Homepage renders cleanly in ${scheme} mode`, async ({ page }) => {
      const { pageErrors } = collectRuntimeErrors(page);
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto('/', { waitUntil: 'load' });
      await expect(page.locator('.portfolio-item').first()).toBeVisible();
      expect(pageErrors).toEqual([]);
    });
  }

  test('Project gallery initializes and exposes zoomable items', async ({ page }) => {
    await page.goto('/project/japan-cherry-blossom', { waitUntil: 'load' });
    const gallery = page.locator('.gallery').first();
    await expect(gallery).toHaveClass(/gallery--on/);
    const count = await gallery.locator('img').count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Accessibility baseline', () => {
  test('Homepage has no critical accessibility violations', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });
    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter((v) => v.impact === 'critical');

    if (results.violations.length > 0) {
      console.log(
        'Axe violations summary:',
        results.violations.map((v) => `${v.impact}: ${v.id} (${v.nodes.length} nodes)`)
      );
    }

    expect(critical, 'Critical axe-core violations').toEqual([]);
  });
});
