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

Alternatively use ruby env to avoid version issues

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
