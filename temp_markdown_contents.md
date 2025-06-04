[start of README.md]
## HK Vision

* https://vision.hossainkhan.com/
* https://hossainkhan.com/

### Android Wallpaper Plugin
Some of the vision's featured pictures are available via [Muzei](https://play.google.com/store/apps/details?id=net.nurik.roman.muzei) Android Live wallpaper app.

[![](https://lh3.googleusercontent.com/qF9r3ZjtgG-qyHdmjecArtKiulz1gmwL_xl9R3_fzk6igSeoN0wYbJSKEX5d_fxJRwYZJpHbqcLB3i9atl-9dOfUl9an7U43TfZ9PtQ=s0)](https://play.google.com/store/apps/details?id=com.hossainkhan.vision)


### ⚠️ NOTE: Before you fork this repo/website
This is a licensed site. You have to purchase a license from [jekyllthemes.io](https://jekyllthemes.io/theme/duet-portfolio-jekyll-theme) before you can legally use this theme.

### Demo
![H.K. vision - experience the world through my eyes](https://github.com/hossain-khan/vision.hossainkhan.com/assets/99822/c33200d6-f9c4-4c28-a5a8-580f51feda9d)

### Local Development

This is based on Jekyll. Follow instruction from Jekyll to install it.
Check out the project and run following command to test the site:

#### macOS

```sh
# If 'bundle' is not installed on macOS, run the following
# ruby -v = ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin24]
# gem -v = 3.0.3.1
sudo gem install bundler -v 2.4.22
sudo gem install rouge -v 3.30.0
sudo gem install jekyll

# Preview site at http://127.0.0.1:4000/
bundle exec jekyll serve

# Build the static site locally
bundle exec jekyll build
```

Alternatively, use ruby env to avoid version issues

```sh
# https://github.com/rbenv/rbenv
brew update
brew install rbenv

# list latest stable versions:
rbenv install -l

# list all local versions:
rbenv install -L

# install a Ruby version:
rbenv install 3.3.6

# Setup ruby env path
nano ~/.zshrc
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

rbenv global 3.3.6
ruby -v

# Now install the latest gems
gem install bundler jekyll


# Install this site's dependencies
bundle install

# Build the static site locally
bundle exec jekyll build

# Preview site at http://127.0.0.1:4000/
bundle exec jekyll serve
```

#### Ubuntu Linux
```sh
# Install Ruby and other dependencies
sudo apt-get update
sudo apt-get install ruby-full build-essential zlib1g-dev

# Install Bundler and Jekyll
sudo gem install bundler jekyll

# This command will install all the dependencies specified in the Gemfile of your Jekyll project.
sudo bundle install

# Build the static site locally
bundle exec jekyll build

# Preview site at http://127.0.0.1:4000/
bundle exec jekyll serve
```

[end of README.md]

[start of _LICENSE.md]
# Duet by JekyllThemes.io – License

This license grants you, the purchaser, an ongoing, non-exclusive, worldwide license to make use of the theme. Read the rest of this license for the details that apply to your use of the theme.

---

## Using the theme

You are licensed to use the theme to create one single End Product for yourself or for one client (a “single application”), and the End Product can be distributed for Free.

The End Product is a customised implementation of the theme. For example: the end product is the final website customised with your content.

---

## What you CAN do with the theme

You can create one End Product for a client, and you can transfer that single End Product to your client for any fee. This license is then transferred to your client.

You can make any number of copies of the single End Product, as long as the End Product is distributed for Free.

You can modify or manipulate the theme. You can combine the theme with other works and make a derivative work from it. The resulting works are subject to the terms of this license.

---

## What you CAN'T do with the theme

You can’t Sell the End Product, except to one client. (If you or your client want to Sell the End Product, you will need an Extended License – send an email to hello@jekyllthemes.io to discuss this with us.)

You can’t re-distribute the theme as stock, in a tool or template, or with source files. You can’t do this with the theme either on its own or bundled with others, and even if you modify the theme. You can’t re-distribute or make available the theme as-is or with superficial modifications. These things are not allowed even if the re-distribution is for Free.

For example: You can’t purchase the theme, convert it to a WordPress theme and sell or give it to more than one client. You can’t license the theme and then make it available as-is on your website for your users to download.

You can’t use the theme in any application allowing an end user to customise a digital or physical product to their specific needs, such as an “on demand”, “made to order” or “build it yourself” application. You can use the theme in this way only if you purchase a separate license for each final product incorporating the theme that is created using the application.

---

## Other license terms

Some components of the theme are sourced by the author from elsewhere and different license terms may apply to the component, such as someone else’s license or an open source or creative commons license. The other license will apply to that component instead of this license. This license will apply to the rest of the theme.

You can only use the theme for lawful purposes.

This license can be terminated if you breach it. If that happens, you must stop making copies of or distributing the End Product until you remove the theme from it.

JekyllThemes.io retains ownership of the theme, but grants you the license on these terms.
[end of _LICENSE.md]

[start of _README.md]
# Duet by JekyllThemes.io – Instructions

If you have any questions or feedback about the theme, don't hesitate to reach out to hello@jekyllthemes.io for 1-to-1 support direct from the developers.

---

## Getting started

Copy the theme files to your website directory.

To run the theme locally, navigate to the theme directory in your terminal and run `bundle install` to install the theme's dependencies. Then run `jekyll serve` to start the Jekyll server.

---

## Jekyll basics

If you're not familiar with how Jekyll works, check out [jekyllrb.com](https://jekyllrb.com/) for all the details,
or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/), and [creating pages](https://jekyllrb.com/docs/pages/).

---

## Customizing the theme

Duet comes packed with lots of options to let you customize the theme.

---

### The `_config.yml` file

The main things you might need to change here are:

`site: Duet Jekyll Theme` – change this to your website's name

`url:` – the full URL that your site will be hosted at, e.g. https://your-domain.com

`baseurl:` – add a base URL here if you will be publishing the site inside a folder, e.g. https://your-domain.com/project/ – or if you're hosting it as a 'project page' on GitHub Pages. Example: `baseurl: /project`

When using baseurl, you should reference images in your post/project Frontmatter **without** the baseurl, e.g. `/images/image.jpg` but images inside the Markdown content **should include** the baseurl snippet, e.g. `{{site.baseurl}}/images/image.jpg`

`paginate: 6` – change this to set the number of blog posts on each page

You can also change more advanced things here like the path names, collections etc. You do not need to change any of these to achieve the same look as the demo, so best to leave everything else unless you are confident.

---

### The `settings.yml` file

You'll find this inside the `_data` folder – this is where you can set all of the theme options.

**Basic settings**

`site_title` – change this to your website's title. This shows up in the browser's title bar, and in the header and footer.
`favicon_image` – change this to the location of your favicon image, which shows up in the browser's title bar.

**Header settings**

`logo_image` – if you'd like to use a logo instead of plain text title in your header, enter the link to it here.
`logo_width` – set the width (in pixels) that your logo should appear at. This is useful for adding retina display support – for example if your original image is 400px wide, you could set this value to `200` to display a retina-ready image.

**Menu settings**

This allows you to set the links inside your menu. Add each one as a list item with a `title` and `url`. When hosting on GitHub Pages, make sure you leave a trailing `/` at the end of links to category pages (e.g. `/blog/` or `/projects/`).

**Footer settings**

`logo_image` – if you'd like to use a logo instead of plain text title in your footer, enter the link to it here.
`logo_width` – set the width (in pixels) that your logo should appear at. This is useful for adding retina display support – for example if your original image is 400px wide, you could set this value to `200` to display a retina-ready image.
`footer_tagline` – sets the text that dispays underneath the site title/logo in the footer.

**Grid settings**

`overlay_opacity` – this sets the opacity of the overlay when you hover over grid items (portfolio and blog posts). Use a decimal value here, e.g. `0.8` will give you 80% opacity on hover.
`grid_spacing` – this sets the amount of spacing (in pixels) between each item in the grid layout.

**Contact settings**

The theme comes with a pre-made contact form that you can use with [Formspree](https://formspree.io/create/jekyllthemes), which is free for up to 50 submissions per month. They also have two great paid plans that offer advanced features. Use the link above to set up your account and then paste the 'endpoint' integration code into the theme settings:

`form_action` – this is the form endpoint attribute that you get from FormSpree, for example `https://formspree.io/abcdefgh`
`confirmation_url` – by default the user is shown a default Formspree thank you page. If you have a premium plan, you can use this setting to provide an alternative URL for that page, for example `/thanks` – we have included a basic thank you page with the theme.
`email_subject` – choose the subject of the email you receive from Formspree.
`send_button_text` – change the text used on the form submit button.

Hint: you can add the contact form to any page of your site using the include – `{% include contact-form.html %}` – for example if you wanted to have the contact form on your About page.

**Social settings**

Here you can add links to your profiles on social networks, and they'll be shown in the footer. Simply add your URL next to the ones you want to show.

**Color settings**

Here you can set all the different colors used by the theme. Try them out and find the color pallette that works for you!

**Font settings**

`font_embed` – add an embed code from an external font service. This allows you to use services like Google Fonts or Typekit.
`title_font` – set the CSS name for the font used on titles.
`body_font` – set the CSS anme for the font used for body text.
`regular_weight` – set the font weight for regular styled text.
`bold_weight` – set the font weight for bold styled text.

Below these options, you'll see options for each typographical element used in the theme. For each, you can set the following options:

`small_size` – the size (in pixels) used for this element on small size screens like mobile phones.
`medium_size` – the size (in pixels) used for this element on medium size screens like tablets.
`large_size` – the size (in pixels) used for this element on largers screens like laptops and desktops.
`weight` – the font weight for this element.
`letter_spacing` – the letter spacing (in ems) for this element.
`line_height` – the line-height (in decimals) for this element.

**Advanced options**

`ajax_loading` – use `true` to enable Ajax loading throughout your site. Use `false` to disable it and load pages normally – this can be helpful if you're adding plugins or other javascript to your pages.
`analytics_code` – use this option to add your Google Analytics code.
`custom_styles` – use this option to add custom CSS styles to the theme.
`header_js` – use this option to insert javascript into the header of the page.
`footer_js` – use this option to insert javascript at the end of the page.

---

### Images

Inside the `/images/` folder you'll find a few images included with the theme.

The images in the `/demo/` subfolder are used in the demo project, post and page – you delete those if you don't need them.

`favicon.png` – you should replace this with the favicon image you'd like to use for your website.

`social.jpg` – this image is used by default as the meta image on the Home and Blog pages. This shows up on social shares of your page, for example Facebook or Twitter – so you should change it to a relevant image, or change the image URL in that page's Front Matter (see below).

---

## Main pages

The theme comes with some pages set up ready for your content.

### The home page – `/index.html`

This is your website home page. You can edit some details in the Front Matter at the top of the page:

`title` – this sets the page title, which shows up in the browser's title bar and on search engine results, social shares etc.
`description` – this sets the page meta description, which shows up on search engine results, social shares etc.
`featured_image` – this sets the page meta image, which shows up on social shares.

Below the Front Matter is the code for the page. You should edit this to set your title and intro text. Hint - the main <h1> tag respects line breaks on tablet size screens and larger. This is useful if you want to prevent typographic widows.

### The blog page – `/blog/index.html`

This is the blog listing page, which shows all your blog posts. You can edit the same things as on the home page to customise it for your website.

---

## Projects, posts and pages

These control the main content of your website, and are found inside the `_projects`, `_posts` and `_pages` folders.

Take a look at the demo content inside each folder for full descriptions on what you can do inside these, and to use as a template for your own content.

---

## Any questions?

If you have any questions or feedback about the theme, don't hesitate to reach out to hello@jekyllthemes.io for 1-to-1 support direct from the developers!

🤘
[end of _README.md]

[start of _pages/about.md]
---
title: About H.K.
subtitle: In pursuit of capturing moments...
description: Hossain Khan is passionate about photography specially capturing moments. His personal interest is mostly in macro, landscape and candid shots.
featured_image: '/images/about-hk/IMG_20180903_133529-hk-austin-capitor-with-camera-850x600.jpg'
---

![](/images/about-hk/IMG_20180903_133529-hk-austin-capitor-with-camera-850x600.jpg)

# About
I am super passionate about capturing moments.

I am software engineer by day, currently working on mobile application development and by night I am husband, son, brother and friend.
I just 💖 taking snaps of events, people and any related things.

I'm a true believer of following quote and appreciate every moment I am living! 🙏
> “_Yesterday is history, tomorrow is a mystery, **today** is a gift of God, which is why we call it the present._” - Bill Keane

## Current gears
I have recently started getting into photography with professional gears.

Here are my current gears:
* 📷 Camera Body: Canon EOS RP Mirrorless dSLR
* ⭕ Lenses:
  * Canon RF 24-105mm f/4-7.1 IS STM
  * Canon RF 50mm f/1.8 STM
  * Laowa 100mm f/2.8 2:1 Ultra Macro
* 🔦 Flash: Canon SpeedLite 600EX-RT

Besides main body, I like to take quick snaps with what I have with me,
and 95% of the time it's my smart phone.
* 📱 Phone: Google Pixel 9 Pro XL

[end of _pages/about.md]

[start of _pages/contact.md]
---
title: Contact H.K.
subtitle: Consult for your event booking.
description: H.K. is available for photo shoot of birthday party, engagement shoot outdoor, new born baby shot, product shots, food shoots, or any other small events. The photoshoot even is preferred to be in GTA (eg. Toronto, Scarborough, North York, Ajax, Brampton, Missisauga, Markham) region. However, I am open to travel to destination photo-shot given the client takes care of the logistics.
featured_image: '/images/about-hk/IMG_20180903_133529-hk-austin-capitor-with-camera-850x600.jpg'
---

### Book for events
I am open to cover any small/medium size events like birthdays, anniversary, product shoot, food shoot and so on.
Contact me for availability and pricing information.


```
Email: hello@hossain.dev
```

<i class="fab fa-facebook"></i> See current offering and services - <a href="https://www.facebook.com/pg/315040829300679/services/" title="H.K. Photography Services @ Facebook Page">Book Now <i class="fas fa-concierge-bell"></i></a>

_p.s. I am also available if you need second photographer for your weeding or party events._



---------


<small><a href="https://docs.google.com/document/d/e/2PACX-1vSibs7YkBQ104TeTbdTma0H2dQGxxWtvt7Qvrbu64eQIZ9F1LlJuzn39G8MDMD_Osg0fSoHoUtHLLu4/pub" style="color:grey">H.K. PHOTOGRAPHY TERMS & CONDITIONS</a></small>

[end of _pages/contact.md]

[start of _pages/thanks.md]
---
title: Thank you
subtitle: Your message was sent successfully.
description: Duet is a beautiful Jekyll portfolio theme.
featured_image: /images/demo/demo-landscape.jpg
---

![](/images/demo/about.jpg)

Please note, this contact form is for demo purposes only and is not monitored. Please contact us [via our website](https://jekyllthemes.io) if you need support.
[end of _pages/thanks.md]

[start of _posts/.README-blogs.md]
This is the place you post blog posts.
[end of _posts/.README-blogs.md]

[start of _posts/2014-11-17-nothing-ness-near-the-beach.md]
---
title: 'Sunset by the Golden Gate 🌉'
date: 2014-11-17 18:30:00
featured_image: '/images/2014-11/IMG_20141117_163103-sunset-near-golden-gate-bridge-1600x1000.jpg'
---

![](/images/2014-11/IMG_20141117_163103-sunset-near-golden-gate-bridge-1600x1000.jpg)

## A day to relax! 🍹
California is one of my favourite destinations. The key reason I love this place is because it has combination of all the
things I like, such as Mountains 🗻, Beach 🏖, Clear Sky ☀️, Nice Drive 🚗.


💕 California.

[end of _posts/2014-11-17-nothing-ness-near-the-beach.md]

[start of _posts/2017-03-27-a-journey-of-a-foodie.md]
---
title: 'You say food, I say foodie 🍭'
date: 2017-03-30 11:14:00
featured_image: '/images/2017-03/IMG_20170330_1892-sashimi-at-hiroshima-1600x1000.jpg'
---

![](/images/2017-03/IMG_20170330_1892-sashimi-at-hiroshima-1600x1000.jpg)

## I live to eat!
Besides taking random shots, I love trying our different cuisine. In other words you can call me "foodie".
I may forget many things, but I never* forget to take picture of my food.

Here are some of the snapshots that I can find.


You can also [follow](https://www.google.com/maps/contrib/107431117693660399546/reviews/@36.6377836,-88.8707038,5z?hl=en-CA) me on Google Maps, I am `Level 7` local guide.

> “Food is life, life is food.”

<small>* _Clarification, when I am hungry and food is too good, I forget to take snap, but I don't forget to take picture of empty plate after I am done._ 😂</small>

[end of _posts/2017-03-27-a-journey-of-a-foodie.md]

[start of _posts/2017-12-28-driving-through-cloud.md]
---
title: '🙌 Touching the clouds'
date: 2017-12-28 14:24:00
featured_image: '/images/2017-12/DSC_20171228_04009-jamaica-mountain-cloud-1700x1100.jpg'
---

![](/images/2017-12/DSC_20171228_04009-jamaica-mountain-cloud-1700x1100.jpg)

## 🚗 Driving though clouds
We took a road trip through Blue Mountains National Park, Jamaica. It was an amazing view from the top of the mountain.
We got to drive though clouds ⛅️, which was an amazing experience.

> “Life is a journey, get the best out of it :-)”

Here is a time lapse I took while I was driving through Blue Mountain.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hwpKiM99_GY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
[end of _posts/2017-12-28-driving-through-cloud.md]

[start of _posts/2018-06-07-just-another-day-to-experiment.md]
---
title: 'Another day to experiment 📸'
date: 2018-06-07 00:00:00
featured_image: '/images/about-hk/DSC_20180607_04859-hk-on-the-balcony-1200x800.jpg'
---

![](/images/about-hk/DSC_20180607_04859-hk-on-the-balcony-1200x800.jpg)

## Getting ready for shot...

Just another day at my home. Getting ready for Hamilton falls day trip. Excited to be outdoors and have some fun.
Every day brings opportunity to capture moments. Personally, I don't care about the quality of the picture, is long
as tells a story, it's worth taking.

> “Enjoy every moment of life! Do what you love and love what you do!”

<div class="gallery" data-columns="3">
	<img src="/images/2018-07/DSC_20180707_04897-hamilton-falls-hk-portrait1-900x1300.jpg">
	<img src="/images/2018-07/DSC_20180707_04929-hamilton-falls-water-900x1300.jpg">
	<img src="/images/2018-07/DSC_20180707_04963-hamilton-falls-hk-portrait2-900x1300.jpg">
</div>

### Location
<div class="image-wrap">
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9bHnUFKELIgRijZ2hT1oDo4&key=AIzaSyDulWxMuu7o_7ijEnTY5gxmBtpEgXtlop4" allowfullscreen></iframe>
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgcK6OPmELIgRf0hv7Oex_tU&key=AIzaSyDulWxMuu7o_7ijEnTY5gxmBtpEgXtlop4" allowfullscreen></iframe>
</div>
[end of _posts/2018-06-07-just-another-day-to-experiment.md]

[start of _posts/2018-08-26-portrait-at-rumbellow-trail.md]
---
title: 'A walk on the trail 🌲'
subtitle: 'f: 4.0, t: 1/40s, l: 50mm, Canon 6D'
date: 2018-09-07 13:28:46
featured_image: '/images/front-page/IMG_20180826_8789-portrait-at-rumbellow-trail-1600x1100.jpg'
---

![](/images/front-page/IMG_20180826_8789-portrait-at-rumbellow-trail-1600x1100.jpg)

## Photoshot at the trail
A quick walk with friends near Rumbellow Crescent, Ajax.

> “Wherever you go, no matter what the weather, always bring your own sunshine.” - Anthony J. D'Angelo

<div class="gallery" data-columns="4">
	<img src="/images/2018-08/IMG_20180826_8762-trail-walk-portrait-couple-1300x900.jpg">
	<img src="/images/2018-08/IMG_20180826_8785-trail-walk-portrait-2-1300x900.jpg">
	<img src="/images/2018-08/IMG_20180826_8831-trail-walk-portrait-3-1300x900.jpg">
	<img src="/images/2018-08/IMG_20180826_8879-trail-walk-path-1300x900.jpeg">
</div>
[end of _posts/2018-08-26-portrait-at-rumbellow-trail.md]

[start of _posts/2018-08-29-mind-is-like-sky.md]
---
title: 'Sky'
date: 2018-08-29 18:30:00
featured_image: '/images/2018-08/IMG_20180829_8953-sky-view-from-balcony-1600x1100.jpeg'
---

![Exposure Time: 1/250, FNumber: 10, Focal Length: 24](/images/2018-08/IMG_20180829_8953-sky-view-from-balcony-1600x1100.jpeg)

## Mind is like sky
Everyday gives us unique opportunity to view our surrounding differently. The sky constantly sifts and gives us millions combination of views.
I get excited with the the views it create, specially during sunset. Because, every second it shows different color.

This is a random view from my balcony before the sunset.


> “Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.” - Rabindranath Tagore
[end of _posts/2018-08-29-mind-is-like-sky.md]

[start of _posts/2018-09-29-hiking-for-the-fall-color.md]
---
title: 'Fall Color'
date: 2018-09-29 14:19:00
featured_image: '/images/2018-09/IMG_20180929_1649-vista-trail-observatory-fall-color-begins-1500x1000.jpeg'
---

![Exposure Time: 1/60, FNumber: 20, Focal Length: 24mm, ISO: 200](/images/2018-09/IMG_20180929_1649-vista-trail-observatory-fall-color-begins-1500x1000.jpeg)

## Hiking on vista trail
Its almost October, a perfect time to capture the natural transition. We went to Rouge Park's vista trail.
Fortunately, we did got some fall colors on the trees 🌳. The day was perfect for hiking too.

I will surely come back again when all the trees are on fire!! 🔥


<div class="gallery" data-columns="2">
	<img src="/images/2018-09/IMG_20180929_1631-fall-color-cliff-view-1500x1000.jpg">
	<img src="/images/2018-09/IMG_20180929_1628-hossain-portrait-fall-colors-1500x1000.jpg">
</div>


### Location
<div class="image-wrap">
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw5psII7Z1IkRMjA8Vq_ACS0&key=AIzaSyDulWxMuu7o_7ijEnTY5gxmBtpEgXtlop4" allowfullscreen></iframe>
</div>
[end of _posts/2018-09-29-hiking-for-the-fall-color.md]

[start of _posts/2018-09-29-photoshoot-on-rouge-trail.md]
---
title: 'Photo shoot on rouge trail 🌳'
subtitle: 'f: 1.8, t: 1/4000s, l: 50mm, Canon 6D'
date: 2018-09-29 14:04:12
featured_image: '/images/front-page/IMG_20180929_1617-ovi-portrait-shot-rouge-park-1600x1100.jpg'
---

![Exposure Time: 1/4000, FNumber: 1.8, Focal Length: 50](/images/front-page/IMG_20180929_1617-ovi-portrait-shot-rouge-park-1600x1100.jpg)

## 📸 Making people smile ^_^
This is a engagement shootout at end of September when the leaves just started to show fall colors 🍁🍁🍁.


<div class="gallery" data-columns="3">
	<img src="/images/2018-09/IMG_20180929_1584-eshoot-at-vista-trail-1500x1000.jpg" />
	<img src="/images/2018-09/IMG_20180929_1501-eshoot-at-vista-trail-1500x1000.jpg" />
	<img src="/images/2018-09/IMG_20180929_1379-eshoot-at-vista-trail-1500x1000.jpg" />
	<img src="/images/2018-09/IMG_20180929_1304-eshoot-at-vista-trail-1500x1000.jpg" />
	<img src="/images/2018-09/IMG_20180929_1224-eshoot-at-vista-trail-1500x1000.jpg" />
	<img src="/images/2018-09/IMG_20180929_1471-eshoot-at-vista-trail-1500x1000.jpg" />
</div>

[end of _posts/2018-09-29-photoshoot-on-rouge-trail.md]

[start of _posts/2018-10-07-relaxation-on-the-beach.md]
---
title: 'Ease your mind 🙏'
date: 2018-10-07 18:08:55
featured_image: '/images/2018-10/IMG_20181007_180855-relax-on-the-beach-1500x1000.jpg'
---

![Aperture Value: 1.7, Exposure Time: 1/731, FNumber: 1.8, Focal Length: 4.459, Focal Length In 35mm Film: 27, ISO Speed Ratings: 51](/images/2018-10/IMG_20181007_180855-relax-on-the-beach-1500x1000.jpg)

## 🌊 Beach time 🏖
Sea beach is one of my favourite place to be on earth.
There is something special about the waves! the sound, makes me calm and relaxing.

Now, go out there and find your "beach time", it could be spending time with family, playing soccer or anything you love to do and make your mind relaxed.

> “Sometimes the most productive thing you can do is relax.” - Mark Black
[end of _posts/2018-10-07-relaxation-on-the-beach.md]

[start of _posts/2018-10-27-food-experiments.md]
---
title: 'In motion... 🌬️'
date: 2018-10-21 12:58:55
featured_image: '/images/2018-10/IMG_3007-harder-than-it-seems-ANIMATION-small.gif'
---

![Aperture Value: 5.375, Exposure Time: 1/200, FNumber: 6.3, Focal Length: 50](/images/2018-10/IMG_3010-harder-than-it-seems-1500x1000.jpg)

## 🌬️ In motion...
I was trying to capture some of the wild flower petals in motion. It did seem cool in-front of the eye, but capturing it was not that easy.
It's most likely I did not have a good contrasting background and the focus plane was not right.

Next time I should spend more time trying to get the perfect shot! Never give up!! (Self reminder 😊)
[end of _posts/2018-10-27-food-experiments.md]

[start of _posts/2018-10-31-harder-than-it-seems.md]
---
title: 'Be Green 🥗️'
date: 2018-10-27 19:58:55
featured_image: '/images/2018-10/IMG_20181027_155457-food-experiments-1500x900.jpg'
---

![Aperture Value: 1.7, Exposure Time: 1/60, FNumber: 1.8, Focal Length: 4.459, Focal Length In 35mm Film: 27, ISO Speed Ratings: 400](/images/2018-10/IMG_20181027_155457-food-experiments-1500x900.jpg)

## Live Green 🥒🍅🥬🥕
Today we made some green healthy food to treat ourselves. It turned out to be an amazing dish.

If you are interested, we got this item from the "[Beauty Food](https://www.amazon.ca/Beauty-Food-recipes-health-beauty/dp/1784725250/)"

![](https://images-na.ssl-images-amazon.com/images/I/31lPogW51eL.jpg)


[end of _posts/2018-10-31-harder-than-it-seems.md]

[start of _posts/2019-07-14-playing-with-water.md]
---
title: 'Shape of water 🌊'
date: 2019-07-14 12:40:55
featured_image: '/images/2019-07/DSC05689-playing-with-the-water-1600x1000.jpg'
---

![Aperture Value: 5.6, Exposure Time: 1/200, FNumber: 5.6, Focal Length: 4, Focal Length In 35mm Film: 27, ISO Speed Ratings: 400](/images/2019-07/DSC05689-playing-with-the-water-1600x1000.jpg)

## A short visit in Tobermory
Recently I visited Tobermory and Flowerpot island after almost a decade. I totally forgot how beautiful it was.
The water was insanely clear! Even though it was damn cold, I did get in the water to experience this unique beauty.


![](/images/2019-07/MVIMG_20190713_180424-playing-with-the-water2-1000x1400.jpg)


[end of _posts/2019-07-14-playing-with-water.md]

[start of _posts/2020-01-04-frozen-morning.md]
---
title: 'Frozen Morning ❄️'
date: 2020-01-04 09:48:00
featured_image: '/images/2020-01/IMG_7135-frozen-morning-1600x1100.jpg'
---

![Aperture Value: 4.5, Exposure Time: 1/200, FNumber: 4.5, Focal Length: 4, Focal Length: 100mm, ISO Speed Ratings: 100](/images/2020-01/IMG_7135-frozen-morning-1600x1100.jpg)

## A blissful surprise in the morning
When I got up on Saturday morning, I looked outside and I was stuneed by the view of thin layer
of ice sitting on everything you can see.

This is not a typical snow day, it's just right amount of snow that makes things look beautiful.
I knew this won't last long, so, I grabbed my camera and started snapping the moment.

> “Imagination is the air of mind.” - Philip James Bailey
[end of _posts/2020-01-04-frozen-morning.md]

[start of _posts/2020-01-23-exploring-small-town.md]
---
title: 'Cusco City'
date: 2020-01-21 13:48:00
featured_image: '/images/2020-01/IMG_20200121_163328-PANO-01-cusco-hdr-1600x1100.jpg'
---

![](/images/2020-01/IMG_20200121_163328-PANO-01-cusco-hdr-1600x1100.jpg)

## Exploring old city - Cusco
Cusco is a city in Peru where you stop by to visit Machu Picchu. Not knowing much about it made things even more exciting for me.
I have explored parts of this old city by walking around. This is where I also had best Cheviche in Peru.

You can easily spend weeks if not months exploring the city and nearby attractions.

> “Live, Laugh & Love.”

<div class="gallery" data-columns="2">
	<img src="/images/2020-01/IMG_20200121_155323-cusco-1600x1200.jpg">
	<img src="/images/2020-01/IMG_20200121_171535-01-cusco-allay-1200x1600.jpg">
	<img src="/images/2020-01/IMG_20200121_172846-PANO-cusco-city-center-3300x1000.jpg">
</div>
[end of _posts/2020-01-23-exploring-small-town.md]

[start of _posts/2020-09-27-walking-through-fire.md]
---
title: 'Walking through fire'
date: 2020-09-27 16:49:00
featured_image: '/images/2020-09/IMG_0820-HDR-arrowhead-park-beach-2000x1200.jpeg'
---

![](/images/2020-09/IMG_0820-HDR-arrowhead-park-beach-2000x1200.jpeg)

## Fall of 2020
What a yeear we had, however, the nature kept healing itself while we stayed inside.
During the fall it was great to be outside and share some of our feelings with nature.
> “Leave the road, take the trails.” - Pythagoras

[end of _posts/2020-09-27-walking-through-fire.md]

[start of _posts/2020-10-25-bridge-over-niagara.md]
---
title: 'Bridge over niagara 🌈'
date: 2020-10-25 17:16:00
featured_image: '/images/2020-10/IMG_2075-rainbow-bridge.jpg'
---

![](/images/2020-10/IMG_2075-rainbow-bridge.jpg)

## Bridge that connects! 🇨🇦🇺🇸
One of the most popular bridge that connects us Canadians with USA. A must-visit place at [any time](https://www.google.com/maps/contrib/107431117693660399546/place/ChIJ6XotQQdD04kRW-OcaB4dvik/@41.8695956,-88.7620744,6z/data=!4m6!1m5!8m4!1e1!2s107431117693660399546!3m1!1e1).

Every time I go there I find different places that i haven't explored except the falls itself.


<div class="gallery" data-columns="2">
	<img src="/images/2020-10/PXL_20201018_192037626-rainbow-bridge-maple-wait-1600x100.jpg">
	<img src="/images/2020-10/IMG_2095-rainbow-bridge-under-1600x1000.jpg">
	<img src="/images/2020-10/PXL_20201018_192528079-rainbow-bridge-under2-1200x1600.jpg">
</div>

<!--
Exposure Time: 1/125
FNumber: 5
Focal Length: 50
Photographic Sensitivity (ISO): 100
Lens Model: EF50mm f/1.8 STM
-->
[end of _posts/2020-10-25-bridge-over-niagara.md]

[start of _posts/2022-06-02-floating-on-the-air.md]
---
title: 'Floating on the air ☁️'
date: 2022-06-02 16:23:00
featured_image: '/images/2022-06/PXL_20220602_202418412.PANO.jpg'
---

![](/images/2022-06/PXL_20220602_202418412.PANO.jpg)

## Floating on the air 🌬☁️
After almost 2 years of lockdown, we are (kinda) free now. Enjoy the air, the water the mother earth as much as you want. 🌎

> “The sky is the ultimate art gallery just above us.” – Ralph Waldo Emerson

[end of _posts/2022-06-02-floating-on-the-air.md]

[start of _posts/2022-07-16-breath-of-fresh-air.md]
---
title: 'Breath of fresh air'
date: 2022-07-16 06:12:00
featured_image: '/images/2022-07/PXL_20220716_101201079.PHOTOSPHERE-3000x1250.jpg'
---

![](/images/2022-07/PXL_20220716_101201079.PHOTOSPHERE-3000x1250.jpg)

## Breath of fresh air 🧘‍♂️
A snap from the hiking trail near the camping site. Super peaceful hike ❤️
[end of _posts/2022-07-16-breath-of-fresh-air.md]

[start of _posts/2022-09-11-hiking-in-the-wild.md]
---
title: 'Hiking in the wild 🌳'
date: 2022-09-11 15:34:00
featured_image: '/images/2022-09/IMG_7432-hiking-in-the-wild-1800x1000.jpg'
---

![](/images/2022-09/IMG_7432-hiking-in-the-wild-1800x1000.jpg)

## Hiking in the wild 🌳
Another hike around the cabin at the Arrowhead Prov Park.

<div class="gallery" data-columns="2">
	<img src="/images/2022-09/IMG_7397-1800x1200.jpg">
	<img src="/images/2022-09/IMG_7418-1800x1200.jpg">
</div>
[end of _posts/2022-09-11-hiking-in-the-wild.md]

[start of _posts/2023-04-23-busy-day.md]
---
title: 'Busy day 🚶'
date: 2023-04-23 13:06:00
featured_image: '/images/2023-04/IMG_9095-japan-street1-1800x1200.jpg'
---

![](/images/2023-04/IMG_9095-japan-street1.JPG)

## Busy day 🚶
A busy day in Japan, people rushing to work, school, or just to get to the next place. I was just walking around and enjoying the view. 🚶

<div class="gallery" data-columns="3">
	<img alt="Japan street photo" src="/images/2023-04/IMG_9041-japan-street3-1800x1200.jpg">
	<img alt="Japan street photo" src="/images/2023-04/IMG_9078-japan-street2-1800x1200.jpg">
	<img alt="Japan street photo of toys" src="/images/2023-04/PXL_20230424_052416351-1600x1200.jpg">
</div>
[end of _posts/2023-04-23-busy-day.md]

[start of _posts/2023-10-21-take-a-pause.md]
---
title: 'Take a pause...'
date: 2023-10-21 18:06:00
featured_image: '/images/2023-10/PXL_20231022_010649980-dinner-by-nature-1200x1600.jpg'
---

![](/images/2023-10/PXL_20231022_010649980-dinner-by-nature.jpg)

## Take a pause...
Sometimes it's okay to take a pause and enjoy you!

This was a quick break at highway-1, California. Outstanding food and the view. ☀️

<div class="gallery" data-columns="2">
	<img src="/images/2023-10/PXL_20231022_012742092-rustic-present.jpg">
	<img src="/images/2023-10/PXL_20231022_012818430.jpg">
</div>
[end of _posts/2023-10-21-take-a-pause.md]

[start of _posts/2023-10-21-timeless-selfie.md]
---
title: 'Timeless Selfie 🤳'
date: 2023-10-21 17:48:00
featured_image: '/images/2023-10/PXL_20231022_004856113-hk-sunset-1200x1600.jpg'
---

![](/images/2023-10/PXL_20231022_004856113-hk-sunset.jpg)

## Timeless Selfie 🤳
Yes! there are some white spots, does that make me old?
So be it! I will not let my looks stop me from being me! Will see you at the next site! ✌️
[end of _posts/2023-10-21-timeless-selfie.md]

[start of _posts/2023-11-14-as-good-as-it-can-get.md]
---
title: 'As good as life gets! 🙏'
date: 2023-11-14 12:32:00
featured_image: '/images/2023-11/PXL_20231114_174455442.PORTRAIT-life-as-good-as-it-gets-1100x1500.jpg'
---

![](/images/2023-11/PXL_20231114_174455442.PORTRAIT-life-as-good-as-it-gets.jpg)

## As good as life gets! 🙏
Sipping on a cup of english tea, enjoying my existence and appreciating the little things in life.
What else can I ask for? 🤔 Of course, nothing else. 🙇‍♂️
[end of _posts/2023-11-14-as-good-as-it-can-get.md]

[start of _posts/2024-02-03-frozen-land.md]
---
title: 'Frozen Land ❄️'
date: 2024-02-03 13:24:00
featured_image: '/images/2024-02/PXL_20240203_182404199-PANO-frozen-park-2000x1000.jpg'
---

![](/images/2024-02/PXL_20240203_182404199-PANO-frozen-park.jpg)

## Frozen Land ❄️
A panoramic view of the frozen park in the Yosemite Valley, California, USA.
[end of _posts/2024-02-03-frozen-land.md]

[start of _posts/2024-04-23-love-is-everywhere.md]
---
title: 'Endless Love ❤️'
date: 2024-04-23 18:19:49
featured_image: '/images/2024-04/PXL_20240423_091800501-EDIT-love-is-everywhere-1400x900.jpg'
---

![](/images/2024-04/PXL_20240423_091800501-EDIT-love-is-everywhere.jpg)

## Endless Love ❤️

Love is everywhere. It's in the air, in the water, in the sky, in the earth, in the universe.

A popular symbol of love and commitment, love padlocks are often attached to bridges and other structures by couples as
a way to show their everlasting love. The padlocks are typically engraved with the couples' names or initials, and the
key is thrown away to symbolize the unbreakable bond between them.

> "Love is the greatest refreshment in life." – Pablo Picasso
[end of _posts/2024-04-23-love-is-everywhere.md]

[start of _posts/2024-04-26-embracing-the-giant.md]
---
title: 'Embracing the Giant 🌳'
date: 2024-04-26 15:03:14
featured_image: '/images/2024-04/PXL_20240426_060328125e-embracing-the-giant-1200x1600.jpg'
---

![](/images/2024-04/PXL_20240426_060328125e-embracing-the-giant.jpg)

## Embracing the Giant 🌳

Giant Camphor Tree of Kamoh Shrine, Fukuoka, Japan. This tree is estimated to be over 1,000 years old and is a symbol of strength and endurance.

> "Look deep into nature, and then you will understand everything better." – Albert Einstein

[end of _posts/2024-04-26-embracing-the-giant.md]

[start of _projects/.README-front-page.md]
Projects are used for front page posts.
[end of _projects/.README-front-page.md]

[start of _projects/2010-09-05-love-meter.md]
---
title: 'Love ❤ meter'
subtitle: 'f: 5.6, t: 1/320s, l: 47mm, Canon REBEL XTi'
date: 2010-09-05 14:20:56
featured_image: '/images/front-page/IMG_20100905_1857-love-meter-montreal-landscape-cropped-1600x1100.jpg'
---

![](/images/front-page/IMG_20100905_1857-love-meter-montreal-1100x1600.jpg)

## Feed me ❤
Love is in the air! Feed me more 💖

> "The only thing we never get enough of is love; and the only thing we never give enough of is love." - Henry Miller
[end of _projects/2010-09-05-love-meter.md]

[start of _projects/2016-04-25-grand-canyon.md]
---
title: 'Grand View'
subtitle: 'f: 8.0, t: 1/125s, l: 55mm, SONY ILCE-5000'
date: 2016-04-25 13:58:31
featured_image: '/images/front-page/DSC_20160425_03953-grand-canyon-1600x1100.jpg'
---

![](/images/front-page/DSC_20160425_03953-grand-canyon-1600x1100.jpg)

## Grand View
The wonder of the world - Grand Canyon 🏜.


<div class="gallery" data-columns="3">
	<img src="/images/2016-04/IMG_20160425_145642-grand-canyon-panorama-2200x1100.jpg">
	<img src="/images/2016-04/IMG_20160425_151025-grand-canyon-focus-view-1600x1200.jpg">
</div>

> "The wonders of the Grand Canyon cannot be adequately represented in symbols of speech, nor by speech itself." - John Wesley Powell
[end of _projects/2016-04-25-grand-canyon.md]

[start of _projects/2017-03-30-last-building-standing.md]
---
title: 'Last building standing 🚀'
subtitle: 'f: 4.0, t: 1/1000s, l: 5.2mm, Canon PowerShot S110'
date: 2017-03-30 10:53:03
featured_image: '/images/front-page/IMG_20170330_1702-hiroshima-last-building-standing-1600x800.jpg'
---

![](/images/front-page/IMG_20170330_1702-hiroshima-last-building-standing-1600x800.jpg)

## 💥 History made
It was a completely different feeling to stand in-front of the building that stood after the hiroshima atom bomb attack.

I hope we have learned from history and this never happens again.

> “Wars are poor chisels for carving out peaceful tomorrows.” - Martin Luther King, Jr.

<div class="gallery" data-columns="3">
	<img src="/images/2017-03/IMG_20170330_1690-hiroshima-building-signboard-1200x1600.jpg">
	<img src="/images/2017-03/IMG_20170330_1713-hiroshima-building-from-bridge-1200x1600.jpg">
</div>
[end of _projects/2017-03-30-last-building-standing.md]

[start of _projects/2017-04-02-japan-cherry-blossom.md]
---
title: '🌸 The wait...'
subtitle: 'f: 4.0, t: 1/400s, l: 5.2mm, Canon PowerShot S110'
date: 2017-03-27 11:57:03
featured_image: '/images/front-page/IMG_20170402_1213-japan-cherry-blossom-1700x1100.jpg'
---

![](/images/2017-04/IMG_20170402_1212-japan-cherry-blossom-1200x1600.jpg)

## 🌸 Cherry blossom
Small park with amazing cherry trees waiting to bloom during sakura event at 🇯🇵.


<div class="gallery" data-columns="4">
	<img src="/images/2017-03/IMG_20170325_0930-cherry-flower-close-up-900x1200.jpg">
	<img src="/images/2017-03/IMG_20170327_1284-flowers-from-temple-900x1200.jpg">
	<img src="/images/2017-03/IMG_20170329_1505-cherry-flower-close-up-900x1200.jpg">
	<img src="/images/2017-03/IMG_20170330_1877-cherry-flower-close-up-900x1200.jpg">
</div>


> "The cherry blossom represents the fragility and the beauty of life. It's a reminder that life is almost overwhelmingly beautiful but that it is also tragically short." - Homaro Cantu
[end of _projects/2017-04-02-japan-cherry-blossom.md]

[start of _projects/2017-28-28-jamaica-mountain-falls.md]
---
title: '⛰ Mountain Falls'
subtitle: 'f: 4.5, t: 1/100s, l: 28mm, Sony RX-100'
date: 2017-12-28 13:34:11
featured_image: '/images/front-page/DSC_20171228_04001-jamaica-mountain-falls-1600x1100.jpg'
---

![](/images/front-page/DSC_20171228_04001-jamaica-mountain-falls-1600x1100.jpg)

## Calm and quiet
A majestic falls over the top of mountain route to Kingston.

> "Waterfalls wouldn't sound so melodious if there were no rocks in their way." - Rishabh Gautam

<div class="gallery" data-columns="3">
	<img src="/images/2017-12/DSC_20171228_04003-jamaica-mountain-falls-1600x1100.jpg">
</div>

[end of _projects/2017-28-28-jamaica-mountain-falls.md]

[start of _projects/2018-09-06-camp-stars.md]
---
title: 'Thousands, or millions? 🌟'
subtitle: 'f: 4.0, t: 30s, l: 24mm, Canon 6D'
date: 2018-09-06 21:15:56
featured_image: '/images/front-page/IMG_20180906-1600x1100-camp-ahmek-stars.jpg'
---

![](/images/front-page/IMG_20180906-1600x1100-camp-ahmek-stars.jpg)

## Twinkle twinkle little stars 🌟
A perfect night with clear sky at the Camp Ahmek site.

[end of _projects/2018-09-06-camp-stars.md]

[start of _projects/2018-09-07-misty-morning.md]
---
title: 'A misty morning'
subtitle: 'f: 1.8, t: 1/468s, l: 4.4mm, Pixel 2 XL'
date: 2018-09-07 7:38:51
featured_image: '/images/front-page/IMG_20180907_073851-1600x1200-camp-ahmek-bridge-bnw.jpg'
---

![](/images/front-page/IMG_20180907_073851-1600x1200-camp-ahmek-bridge-bnw.jpg)

## Let's get lost...
The morning was cold, but the water was warm creating a misty morning.

> “Let me tell you something my friend. Hope is a dangerous thing. Hope can drive a man insane.” - The Shawshank Redemption
[end of _projects/2018-09-07-misty-morning.md]

[start of _projects/2018-09-07-surprise-on-trail.md]
---
title: 'Surprise on trail 🍄'
subtitle: 'f: 7.1, t: 1s, l: 105mm, Canon 6D'
date: 2018-09-07 10:10:27
featured_image: '/images/front-page/IMG_20180907-mushroom-on-trail-1600x1100.jpg'
---

![](/images/front-page/IMG_20180907-mushroom-on-trail-1600x1100.jpg)

## Nature Trail
A nice surprise on the hiking trail 🍄.

> "In the morning, everything is new—the dewdrops, the leaves, the day." - Marty Rubin

<div class="gallery" data-columns="3">
	<img src="/images/2018-09/IMG_20180907_0450-1600x1100-mushroom-on-trail.jpg">
	<img src="/images/2018-09/IMG_20180907_102615-1600x1200-mushroom-on-trail.jpg">
</div>


[end of _projects/2018-09-07-surprise-on-trail.md]

[start of _projects/2018-10-21-fall-nature-walk.md]
---
title: 'Wild things 🌼'
subtitle: 'f: 1.8, t: 1/4000s, l: 50mm, Canon 6D'
date: 2018-10-21 17:56:58
featured_image: '/images/front-page/IMG_20181021_3476x-fall-nature-wild-flower-blooming.jpeg'
---

![Exposure Time: 1/4000, FNumber: 1.8, Focal Length: 50, ISO: 200](/images/front-page/IMG_20181021_3476x-fall-nature-wild-flower-blooming.jpeg)

## Beauty is in the eye of the beholder
The nature is full of beauty, you just have to stop of focus on them.
This shot is taken from the [Forks of the Credit](https://www.ontarioparks.com/park/forksofthecredit) Provincial Park during end of fall season.

Would love to go back to the park for more hiking.

> “If you truly love Nature, you will find beauty everywhere.” - Vincent Van Gogh

<div class="gallery" data-columns="3">
	<img src="/images/2018-10/IMG_20181021_3221-fall-nature-wild-flower-1600x1100.jpg"
        alt="Exposure Time: 1/320, FNumber: 8, Focal Length: 50, ISO: 200"
        title="Exposure Time: 1/320, FNumber: 8, Focal Length: 50, ISO: 200" />
	<img src="/images/2018-10/IMG_20181021_3459-fall-leafs-on-fire-1500x1000.jpeg"
	alt="Exposure Time: 1/1250, FNumber: 1.8, Focal Length: 50, ISO: 200"
	title="Exposure Time: 1/1250, FNumber: 1.8, Focal Length: 50, ISO: 200" />
</div>


### Location
<div class="image-wrap">
    <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=17&center=43.8251%2C-80.0042&key=AIzaSyDulWxMuu7o_7ijEnTY5gxmBtpEgXtlop4" allowfullscreen></iframe>
</div>

[end of _projects/2018-10-21-fall-nature-walk.md]

[start of _projects/2018-11-11-winter-is-coming.md]
---
title: 'Winter is coming... ❄️'
subtitle: 'f: 7.1, t: 1/125s, l: 100mm, Canon 6D'
date: 2018-10-21 17:56:58
featured_image: '/images/front-page/IMG_20181111_3644-frozen-leaf-1600x1000.jpg'
---

![Exposure Time: 1/125, FNumber: 7.1, Focal Length: 100, ISO: 200](/images/front-page/IMG_20181111_3644-frozen-leaf-1600x1000.jpg)

## Frozen leaf 🍁
Winter is coming, it's time trees to go into hibernation.

> “If Winter comes, can Spring be far behind?” - Percy Bysshe Shelley

<div class="gallery" data-columns="3">
	<img src="/images/2018-11/IMG_20181111_3596-frozen-leaf1-1500x1000.jpg"
        alt="Exposure Time: 1/500, FNumber: 1.8, Focal Length: 50, ISO: 200"
        title="Exposure Time: 1/500, FNumber: 1.8, Focal Length: 50, ISO: 200" />
	<img src="/images/2018-11/IMG_20181111_3619-frozen-leaf2-1500x1000.jpg"
	alt="Exposure Time: 1/320, FNumber: 3.2, Focal Length: 50, ISO: 200"
	title="Exposure Time: 1/320, FNumber: 3.2, Focal Length: 50, ISO: 200" />
</div>

[end of _projects/2018-11-11-winter-is-coming.md]

[start of _projects/2018-12-28-quiet-mosque-in-the-market.md]
---
title: 'Quiet Mosque in the Market 🕌️'
subtitle: 'f: 7.1, t: 1/130s, l: 27mm, Pixel 2 XL'
date: 2018-12-28 16:56:58
featured_image: '/images/front-page/IMG_20181228_165519-mosque-in-the-market-1500x1200.jpg'
---

![Aperture Value: 1.7, Exposure Time: 1/130, FNumber: 1.8, Focal Length: 4.459, Focal Length In 35mm Film: 27, ISO Speed Ratings: 50](/images/front-page/IMG_20181228_165519-mosque-in-the-market-1500x1200.jpg)

## 🕌 In search of peace
I was visiting Al Wakrah Souq in Qatar and it was time to say prayer.
There were multiple mosque in the market, and this was one of them - just small, plain and simple.
Brings peace automagically! 🙏


[end of _projects/2018-12-28-quiet-mosque-in-the-market.md]

[start of _projects/2019-02-06-frozen-drops.md]
---
title: 'Frozen Drops'
subtitle: 'f: 4.5, t: 1/100s, l: 93mm, Canon 6D'
date: 2019-02-06 14:46:10
featured_image: '/images/front-page/IMG_4180-frozen-drops-1600x1100.jpg'
---

![](/images/front-page/IMG_4180-frozen-drops-1600x1100.jpg)

## Crystal Everywhere
Freezing rain has caused a rare opportunity to capture frozen drops everywhere. It's simply beautiful.

<div class="gallery" data-columns="3">
	<img src="/images/2019-02/IMG_4262-frozen-drops-on-tree-1700x1100.jpg">
	<img src="/images/2019-02/IMG_4286-frozen-drops-niagara-railing-1700x1100.jpg">
</div>
[end of _projects/2019-02-06-frozen-drops.md]

[start of _projects/2019-05-31-up-close-with-nature.md]
---
title: 'Up close with nature'
subtitle: 'f: 3.5, t: 1/250s, l: 100mm, Canon 6D'
date: 2019-05-31 13:28:46
featured_image: '/images/front-page/IMG_5087-nature-up-close-1600x1100.jpg'
---


![](/images/front-page/IMG_5087-nature-up-close-1600x1100.jpg)

## Up close with nature
Had a little bit fun with the macro lens. Some of the snaps turned out great.

> "Gazing into the heart of the flower through a macro lens unravels a secret world of intricate patterns, delicate textures, and the subtle beauty that nature intricately weaves in every petal and filament."

<div class="gallery" data-columns="3">
	<img src="/images/2019-05/IMG_5325-nature-up-close-dl-1600x1100.jpg">
</div>


[end of _projects/2019-05-31-up-close-with-nature.md]

[start of _projects/2020-01-22-wonders-of-the-world.md]
---
title: 'True wonder of the world'
subtitle: 'f: 2.4, t: 1/705, l: 43mm, Pixel 4 XL'
date: 2020-01-20 09:30:33
featured_image: '/images/front-page/IMG_20200120_093033_MP-machu-picchu-1600x1100.jpg'
---


![](/images/2020-01/IMG_20200120_094038-PANO-machu-picchu-1600x1000.jpg)

## Machu Picchu
During my recent visit to Peru I visited Machu Picchu. It really was a breath taking place to be.
The Inka Civilization's use of stone in high up in the mountain is really mesmerising.


<div class="gallery" data-columns="2">
	<img src="/images/2020-01/IMG_20200120_100811-machu-picchu-1600x1200.jpg">
	<img src="/images/2020-01/IMG_20200120_111816-machu-picchu-1200x1600.jpg">
	<img src="/images/2020-01/IMG_20200120_141941-machu-picchu-1600x1200.jpg">
</div>

[end of _projects/2020-01-22-wonders-of-the-world.md]

[start of _projects/2020-09-29-trees-on-fire.md]
---
title: 'Trees on fire'
subtitle: 'f: 7.1, t: 1/100, l: 32mm, Canon 6D'
date: 2020-09-27 18:14:33
featured_image: '/images/front-page/IMG_0794-HDR-arrowhead-park-fall-tree-1700x1300.jpeg'
---


![](/images/front-page/IMG_0794-HDR-arrowhead-park-fall-tree-1700x1300.jpeg)

## Fall colors at Arrowhead Park
Nature does not stop even in pandemic. It was a stunning view at the Arrowhead Provincial Park.

> "Autumn is a second spring when every leaf is a flower." - Albert Camus
[end of _projects/2020-09-29-trees-on-fire.md]

[start of _projects/2020-10-17-badlands.md]
---
title: 'Badlands'
subtitle: 'f: 1.73, t: 1/1466, l: 27mm, Pixel 4 XL'
date: 2020-10-17 18:11:46
featured_image: '/images/front-page/PXL_20201017_221145631-badlands-1600x1200.jpg'
---


![](/images/front-page/PXL_20201017_221145631-badlands-1600x1200.jpg)

## Cheltenham Badlands
A quick visit to Cheltenham Badlands in Caledon at the end of fall season. The view was stunning when the sun was setting.

<div class="image-wrap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1440.4670397959803!2d-79.944597!3d43.7742272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b0fb7aa0ea18b%3A0x9acd23e488949b0e!2sCheltenham%20Badlands!5e0!3m2!1sen!2sca!4v1609012805061!5m2!1sen!2sca" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>


#### What is Badlands?
> Badlands are a type of dry terrain where softer sedimentary rocks and clay-rich soils have been extensively eroded by wind and water.




[end of _projects/2020-10-17-badlands.md]

[start of _projects/2021-05-09-spring-is-here-2021.md]
---
title: 'Spring is calling...'
subtitle: 'f: 2.8, t: 1/1600, l: 100mm, Canon 6D'
date: 2021-05-09 15:55:01
featured_image: '/images/front-page/IMG_3791-spring-is-here-2021-1200x1800.jpg'
---

![](/images/front-page/IMG_3791-spring-is-here-2021-1200x1800.jpg)

## Spring is calling
It's been over a year of pandemic and nature continues to flourish! Sprint of 2021 is here with color and breath of fresh air.

> "No winter lasts forever; no spring skips its turn." - Hal Borland
[end of _projects/2021-05-09-spring-is-here-2021.md]

[start of _projects/2021-05-09-tulip-yellow-blend.md]
---
title: 'Color is Yellow'
subtitle: 'f: 4.0, t: 1/250, l: 100mm, Canon 6D'
date: 2021-05-09 15:12:38
featured_image: '/images/front-page/IMG_3754-yellow-blend-tulip-1600x1100.jpg'
---


![](/images/front-page/IMG_3754-yellow-blend-tulip-1600x1100.jpg)

## It's yellow! 🌷
Love how the yellow tulip blends with green! ony of my favourite color.
[end of _projects/2021-05-09-tulip-yellow-blend.md]

[start of _projects/2022-10-09-bloom.md]
---
title: 'Time to boom'
subtitle: 'f: 1.8, t: 1/80, l: 100mm, Canon EOS RP'
date: 2022-10-09 08:16:14
featured_image: '/images/front-page/IMG_8105-bloom-2100x1400.jpg'
---


![](/images/front-page/IMG_8105-bloom-2100x1400.jpg)

## Time to bloom 🌻
Beauty at the front door.

> "Where flowers bloom, so does hope." - Lady Bird Johnson
[end of _projects/2022-10-09-bloom.md]

[start of _projects/2023-01-22-end-of-the-road.md]
---
title: 'End of the road ❄️'
subtitle: 'f: 1.85, t: 1/25, l: 6.81mm, Pixel 7 Pro'
date: 2023-01-22 18:16:24
featured_image: '/images/front-page/PXL_20230122_231655985.MOTION-1800x1100.jpg'
---


![](/images/front-page/PXL_20230122_231655985.MOTION-1800x1100.jpg)

## End of the road ❄️
Took a walk to end of the road on a snowy night! 🌨️

> "Remember, the end of the road is not the end of the journey. If you get to the end of your rope, tie a knot and hang on." - Franklin D. Roosevelt
[end of _projects/2023-01-22-end-of-the-road.md]

[start of _projects/2023-04-28-little-things-in-jpn.md]
---
title: 'Little things ⛩️'
subtitle: 'f: 1.85, t: 1/80, l: 6.81mm, Pixel 7 Pro'
date: 2023-04-28 11:04:00
featured_image: '/images/front-page/PXL_20230428_020422703-mini-shrine-1600x1100.jpg'
---


![](/images/front-page/PXL_20230428_020422703-mini-shrine.jpg)

## Little things ⛩️
A few little shrines in the middle of Fushimi Inari path. Sometimes it's worth stopping for little things.

> "Appreciate every little beautiful moment in every day of your life. Give it a try, and you'll see the world from another perspective." - Thea Kristine May
[end of _projects/2023-04-28-little-things-in-jpn.md]

[start of _projects/2023-10-20-back-to-life.md]
---
title: 'Back to life 🌳'
subtitle: 'f: 1.95, t: 1/1600, l: 2.23mm, Pixel 8 Pro'
date: 2023-10-20 15:05:24
featured_image: '/images/front-page/PXL_20231020_220551135-1000x1500.jpg'
---


![](/images/front-page/PXL_20231020_220551135-back-to-life.jpg)

## Back to life 🌳
A road trip to the big basin redwood state park, California. The park is home to the largest continuous stand of ancient coast redwoods south of San Francisco.
These trees are among the tallest and oldest living things on Earth.

The trees were damaged by the 2020 CZU Lightning Complex fire. The fire burned 86,509 acres (35,000 ha) and destroyed 1,490 structures, including 925 homes.
Now they are coming back to life. ✌️

> "Nature does not hurry, yet everything is accomplished." - Lao Tzu
[end of _projects/2023-10-20-back-to-life.md]

[start of _projects/2024-01-30-lets-go-up.md]
---
title: 'Lets go up 🚊'
subtitle: 'f: 2.8, t: 1/89, l: 18mm, Pixel 8 Pro'
date: 2024-01-30 08:06:24
featured_image: '/images/front-page/PXL_20240130_160609683-lets-go-up-1200x1600.jpg'
---


![](/images/front-page/PXL_20240130_160609683-lets-go-up.jpg)

## Let's go up 🚊
A walk through the city of San Francisco, California, USA. The city is known for its hilly terrain, foggy weather, and iconic Golden Gate Bridge.

> "The city's not a concrete jungle, it's a human zoo." - Rita Dove
[end of _projects/2024-01-30-lets-go-up.md]

[start of _projects/2024-02-03-misty-overview.md]
---
title: 'Misty overlook 🏔️'
subtitle: 'f: 1.7, t: 1/12, l: 7mm, Pixel 8 Pro'
date: 2024-02-03 17:32:12
featured_image: '/images/front-page/PXL_20240203_013203498-misty-overview-1600x1200.jpg'
---


![](/images/front-page/PXL_20240203_013203498-misty-overview.jpg)

## Misty overlook 🏔️
A snap taken on the way to the Yosemite Valley, California, USA. The valley is known for its stunning waterfalls, giant sequoias, and the iconic El Capitan and Half Dome granite cliffs.

> "It is by far the grandest of all the special temples of Nature I was ever permitted to enter." - John Muir
[end of _projects/2024-02-03-misty-overview.md]

[start of _projects/2024-02-03-tunnel-view-edge.md]
---
title: 'Tunnel View Edge 🪨'
subtitle: 'f: 2.8, t: 1/322, l: 18mm, Pixel 8 Pro'
date: 2024-02-03 12:45:49
featured_image: '/images/front-page/PXL_20240203_204545548-tunnel-view-edge-1400x1800.jpg'
---


![](/images/front-page/PXL_20240203_204545548-tunnel-view-edge.jpg)

## Tunnel View Edge 🪨
Another snap from the Tunnel View vista point at the Yosemite Valley, California, USA.

> "Yosemite Valley, to me, is always a sunrise, a glitter of green and golden wonder in a vast edifice of stone and space." - Ansel Adams


<div class="gallery" data-columns="3">
	<img alt="Tunnel View vista point at the Yosemite Valley" src="/images/2024-02/PXL_20240203_180500317-grand-tunnel-view-2000x900.jpg">
	<img alt="Edge view of Tunnel View vista point" src="/images/2024-02/PXL_20240203_175752817-edge2.jpg">
</div>

[end of _projects/2024-02-03-tunnel-view-edge.md]

[start of _projects/2024-04-23-view-from-fukuoka-tower.md]
---
title: 'Fukuoka Tower 🗼 and Sea Shore 🌊'
subtitle: 'f: 4.5, t: 1/160, l: 50mm, Canon EOS RP'
date: 2024-04-23 14:44:49
featured_image: '/images/front-page/IMG_2229-fukuoka-shore-edited-1600x1100.jpg'
---


![](/images/front-page/IMG_2229-fukuoka-shore-edited.jpg)

## Fukuoka Tower 🗼 and Sea Shore 🌊
Fukuoka, capital of Fukuoka Prefecture, sits on the northern shore of Japan’s Kyushu Island. It’s known for ancient temples, beaches and modern shopping malls, including Canal City.

📸 Shot is from the Fukuoka Tower facing the sea shore. The tower is 234 meters tall and is the tallest seaside tower in Japan. It was completed in 1989 and has a unique design that resembles a sail.

> "The sea and the horizon – endless, open, and full of possibility."


[end of _projects/2024-04-23-view-from-fukuoka-tower.md]

[start of _projects/2024-04-24-bleeding-sunshine.md]
---
title: 'Bleeding Sun 🌊'
subtitle: 'f: 1.95, t: 1/5000, l: 2mm, Pixel 8 Pro'
date: 2024-04-24 17:35:49
featured_image: '/images/front-page/PXL_20240424_083357538-EDIT-bleeding-sun-1350x1600.jpg'
---


![](/images/front-page/PXL_20240424_083357538-EDIT-bleeding-sun.jpg)

## Bleeding Sun by the Sea 🌊
The sun was setting down the horizon behind the rock. The sun was bleeding, and the sea was the witness.

> "At the beach, life is different. Time doesn’t move hour to hour but mood to moment. We live by the currents, plan by the tides, and follow the sun." – Sandy Gingras


[end of _projects/2024-04-24-bleeding-sunshine.md]

[start of _projects/2024-04-24-peeking-through.md]
---
title: 'Peeking through...⛰️'
subtitle: 'f: 1.68, t: 1/115, l: 6.9mm, Pixel 8 Pro'
date: 2024-04-24 17:50:00
featured_image: '/images/front-page/PXL_20240424_085014810e-peeking-through-1600x1200.jpg'
---


![](/images/front-page/PXL_20240424_085014810e-peeking-through.jpg)

## Peeking through...⛰️
A unique view of the hole made through the rocks! Hard to capture without true dynamic range.
[end of _projects/2024-04-24-peeking-through.md]

[start of _projects/2024-04-28-rusty-story.md]
---
title: 'Rusty story ⚓️'
subtitle: 'f: 1.68, t: 1/474, l: 6.9mm, Pixel 8 Pro'
date: 2024-04-28 16:40:00
featured_image: '/images/front-page/PXL_20240428_064050011.MP-rusty-story-1200x1600.jpg'
---

![](/images/front-page/PXL_20240428_064050011.MP-rusty-story.jpg)

## Rusty story ⚓️
Time has decayed this bollard into a rusty relic, a testament to the passage of time and the relentless embrace of nature. It stands as a reminder of the stories it once held, now faded but not forgotten.

> "The sea, once it casts its spell, holds one in its net of wonder forever." – Jacques Cousteau
[end of _projects/2024-04-28-rusty-story.md]

[start of sample/2018-06-30-demo-post.md]
---
title: 'Demo Post'
date: 2018-06-30 00:00:00
featured_image: '/images/demo/demo-square.jpg'
---

![](/images/demo/demo-landscape.jpg)

## Demo content

This page is a demo that shows everything you can do inside portfolio and blog posts.

We'veincluded everything you need to create engaging posts about your work, and show off your case studies in a beautiful way.

**Obviously,** we’ve styled up *all the basic* text formatting options [available in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

You can also add blockquotes, which are shown at a larger width to help break up the layout and draw attention to key parts of your content:

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”

You can throw in some horizontal rules too:

---

### Image galleries

Here's a really neat custom feature we added – galleries:

<div class="gallery" data-columns="3">
	<img src="/images/demo/demo-portrait.jpg">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-square.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
</div>

Inspired by the Galleries feature from WordPress, we've made it easy to create grid layouts for your images. Just use a bit of simple HTML in your post to create a masonry grid image layout:

```html
<div class="gallery" data-columns="3">
    <img src="/images/demo/demo-portrait.jpg">
    <img src="/images/demo/demo-landscape.jpg">
    <img src="/images/demo/demo-square.jpg">
    <img src="/images/demo/demo-landscape-2.jpg">
</div>
```

*See what we did there? Code and syntax highlighting is built-in too!*

Change the number inside the 'columns' setting to create different types of gallery for all kinds of purposes. You can even click on each image to seamlessly enlarge it on the page.

---

### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

<div class="gallery" data-columns="1">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
</div>

### What about videos?

Videos are an awesome way to show off your work in a more engaging and personal way, and we’ve made sure they work great on our themes. Just paste an embed code from YouTube or Vimeo, and the theme makes sure it displays perfectly:

<iframe src="https://player.vimeo.com/video/148003889" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---

## Pretty cool, huh?

We've packed this theme with powerful features to show off your work.

Why not put them to use on your new portfolio?

<a href="https://jekyllthemes.io/theme/duet-portfolio-jekyll-theme" class="button button--large">Get This Theme</a>
[end of sample/2018-06-30-demo-post.md]

[start of sample/2018-06-30-demo-project.md]
---
title: 'Demo Project'
subtitle: 'This is a demo'
date: 2018-06-30 00:00:00
description: This page is a demo that shows everything you can do inside portfolio and blog posts.
featured_image: '/images/demo/demo-square.jpg'
---

![](/images/demo/demo-landscape.jpg)

## Demo content

This page is a demo that shows everything you can do inside portfolio and blog posts.

We've included everything you need to create engaging posts about your work, and show off your case studies in a beautiful way.

**Obviously,** we’ve styled up *all the basic* text formatting options [available in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

You can also add blockquotes, which are shown at a larger width to help break up the layout and draw attention to key parts of your content:

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”

The theme also supports markdown tables:

| Item                 | Author        | Supports tables? | Price |
|----------------------|---------------|------------------|-------|
| Duet Jekyll Theme    | Jekyll Themes | Yes              | $49   |
| Index Jekyll Theme   | Jekyll Themes | Yes              | $49   |
| Journal Jekyll Theme | Jekyll Themes | Yes              | $49   |

And footnotes[^1], which link to explanations[^2] at the bottom of the page[^3].

[^1]: Beautiful modern, minimal theme design.
[^2]: Powerful features to show off your work.
[^3]: Maintained and supported by the theme developer.

You can throw in some horizontal rules too:

---

### Image galleries

Here's a really neat custom feature we added – galleries:

<div class="gallery" data-columns="3">
	<img src="/images/demo/demo-portrait.jpg">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-square.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
</div>

Inspired by the Galleries feature from WordPress, we've made it easy to create grid layouts for your images. Just use a bit of simple HTML in your post to create a masonry grid image layout:

```html
<div class="gallery" data-columns="3">
    <img src="/images/demo/demo-portrait.jpg">
    <img src="/images/demo/demo-landscape.jpg">
    <img src="/images/demo/demo-square.jpg">
    <img src="/images/demo/demo-landscape-2.jpg">
</div>
```

*See what we did there? Code and syntax highlighting is built-in too!*

Change the number inside the 'columns' setting to create different types of gallery for all kinds of purposes. You can even click on each image to seamlessly enlarge it on the page.

---

### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

<div class="gallery" data-columns="1">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
</div>

### What about videos?

Videos are an awesome way to show off your work in a more engaging and personal way, and we’ve made sure they work great on our themes. Just paste an embed code from YouTube or Vimeo, and the theme makes sure it displays perfectly:

<iframe src="https://player.vimeo.com/video/148003889" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---

## Pretty cool, huh?

We've packed this theme with powerful features to show off your work.

Why not put them to use on your new portfolio?

<a href="https://jekyllthemes.io/theme/duet-portfolio-jekyll-theme" class="button button--large">Get This Theme</a>
[end of sample/2018-06-30-demo-project.md]

[start of sample/demo-post.md]
![](/images/demo/landscape-01.jpg)

## Demo content

This page is a demo that shows everything you can do inside portfolio and blog posts.

We've included everything you need to create engaging posts about your work, and show off your case studies in a beautiful way.

**Obviously,** we’ve styled up *all the basic* text formatting options [available in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

You can also add blockquotes, which are shown at a larger width to help break up the layout and draw attention to key parts of your content:

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”

The theme also supports markdown tables:

| Item                 | Author        | Supports tables? | Price |
|----------------------|---------------|------------------|-------|
| Duet Jekyll Theme    | Jekyll Themes | Yes              | $49   |
| Index Jekyll Theme   | Jekyll Themes | Yes              | $49   |
| Journal Jekyll Theme | Jekyll Themes | Yes              | $49   |

And footnotes[^1], which link to explanations[^2] at the bottom of the page[^3].

[^1]: Beautiful modern, minimal theme design.
[^2]: Powerful features to show off your work.
[^3]: Maintained and supported by the theme developer.

You can throw in some horizontal rules too:

---

### Image galleries

Here's a really neat custom feature we added – galleries:

<div class="gallery" data-columns="3">
	<img src="/images/demo/square-01.jpg">
	<img src="/images/demo/portrait-02.jpg">
	<img src="/images/demo/square-04.jpg">
	<img src="/images/demo/square-03.jpg">
	<img src="/images/demo/square-05.jpg">
	<img src="/images/demo/landscape-05.jpg">
</div>

Inspired by the Galleries feature from WordPress, we've made it easy to create grid layouts for your images. Just use a bit of simple HTML in your post to create a masonry grid image layout:

```html
<div class="gallery" data-columns="3">
    <img src="/images/demo/square-01.jpg">
    <img src="/images/demo/portrait-02.jpg">
    <img src="/images/demo/square-04.jpg">
    <img src="/images/demo/square-03.jpg">
    <img src="/images/demo/square-05.jpg">
    <img src="/images/demo/landscape-05.jpg">
</div>
```

*See what we did there? Code and syntax highlighting is built-in too!*

Change the number inside the 'columns' setting to create different types of gallery for all kinds of purposes. You can even click on each image to seamlessly enlarge it on the page.

---

### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

<div class="gallery" data-columns="1">
	<img src="/images/demo/landscape-02.jpg">
	<img src="/images/demo/landscape-03.jpg">
	<img src="/images/demo/landscape-04.jpg">
</div>

### What about videos?

Videos are an awesome way to show off your work in a more engaging and personal way, and we’ve made sure they work great on our themes. Just paste an embed code from YouTube or Vimeo, and the theme makes sure it displays perfectly:

<iframe src="https://player.vimeo.com/video/148003889" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---

## Pretty cool, huh?

We've packed this theme with powerful features to show off your work.

Why not put them to use on your new portfolio?

<a href="https://jekyllthemes.io/theme/duet-portfolio-jekyll-theme" class="button button--large">Get This Theme</a>
[end of sample/demo-post.md]
