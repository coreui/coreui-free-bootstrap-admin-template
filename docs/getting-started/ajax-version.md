---
layout: docs
title: Ajax Version
group: getting-started
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Installation

To run AJAX Gulp Version you will have to install following components in your environment.

- Node.js: <https://nodejs.org/en/>
- npm: <https://npmjs.com>
- Gulp: <http://gulpjs.com>
- Bower: <https://bower.io>

### Installing Node.js and updating npm

{% youtube wREima9e6vk 100% %}


#### Installing Node.js

If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

**Test:**
{% highlight html %}
$ node -v
{% endhighlight %}

The version should be higher than v0.10.32.


#### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

{% highlight html %}
$ npm install npm@latest -g
{% endhighlight %}

**Test:**
{% highlight html %}
$ npm -v
{% endhighlight %}

The version should be higher than 2.1.8.

### Installing Gulp and project dependencies

{% highlight html %}
$ npm install
{% endhighlight %}

### Installing Bower and 3rd party plugins & components

Bower is a command line utility. Install it with npm.

#### Install Bower

{% highlight html %}
$ npm install -g bower
{% endhighlight %}

#### Install 3rd party plugins & components

{% highlight html %}
$ bower install
{% endhighlight %}

## Run project

Go to project directory

{% highlight html %}
$ cd AJAX_Full_Project_GULP
{% endhighlight %}

or

{% highlight html %}
$ cd AJAX_Starter_GULP
{% endhighlight %}

Start local server and Gulp scripts

{% highlight html %}
$ gulp serve
{% endhighlight %}

Your project is ready. Go to following url http://localhost:3000.
