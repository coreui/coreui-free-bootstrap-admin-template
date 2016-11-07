---
layout: docs
title: Utility classes
group: new-components
---

Bootstrap includes dozens of utilities—classes with a single purpose. They're designed to reduce the frequency of highly repetitive declarations in your CSS while allowing for quick and easy development.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Spacing

Assign `margin` or `padding` to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. All classes are multiples on the global default value, `1rem`.

The classes are named using the format: `{property}-{sides}-{size}`

Where *property* is one of:

* `m` - for classes that set `margin`
* `p` - for classes that set `padding`

Where *sides* is one of:

* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `l` - for classes that set `margin-left` or `padding-left`
* `r` - for classes that set `margin-right` or `padding-right`
* `x` - for classes that set both `*-left` and `*-right`
* `y` - for classes that set both `*-top` and `*-bottom`
* `a` - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

* `q` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 0.25` or `$spacer-y * 0.25`
* `h` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 0.5` or `$spacer-y * 0.5`
* `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
* `1` - (by default) for classes that set the `margin` or `padding` to `$spacer-x` or `$spacer-y`
* `2` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 1.5` or `$spacer-y * 1.5`
* `3` - (by default) for classes that set the `margin` or `padding` to `$spacer-x * 3` or `$spacer-y * 3`

Here are some representative examples of these classes:

{% highlight scss %}

.px-q {
  padding-left: ($spacer-x * 0.25) !important;
  padding-right: ($spacer-x * 0.25) !important;
}

.pa-h {
  padding: ($spacer-y * 0.5) ($spacer-x * 0.5) !important;
}
{% endhighlight %}
