---
title: "New Website"
description: "A new website built with Astro."
date: "Sep 18 2024"
---

I do find myself _(very occasionally)_ in the need for a personal/professional website, mostly to
add a reminder to my future-self of my accomplishments but there are also _(infrequent)_ occasions
when I am working on something and make a discovery that I think is worthwhile sharing. One thing
that prevents me from doing such things is that I am not a fan of website development.

Between 1997-2007 _(ish)_, I made a lot of websites and I deplored the entire experience every
single time. Since then,
[static site generators (SSG)](https://en.wikipedia.org/wiki/Static_site_generator) have become
more prevalent. In fact, a couple of years ago I embarked on my first SSG-based website using
[Svelte](https://svelte.dev/). The site itself was a network rendering solution _(à la
[Deadline](https://docs.thinkboxsoftware.com/products/deadline/10.1/1_User%20Manual/manual/overview.html))_
using [AWS](https://aws.amazon.com/). [Svelte](https://svelte.dev/) was used as a front-end for
users to upload [Modo](https://www.foundry.com/products/modo) scenes so that a
[AWS](https://aws.amazon.com/) back-end _(which was spun up on demand via
[rain](https://github.com/aws-cloudformation/rain))_ could speedily render the scene with Modo's
[mPath](https://irendering.net/overview-of-mpath-renderer-for-modo/) renderer. It all worked great!

At the time, [Svelte](https://svelte.dev/) appeared to be morphing into
[Svelte Kit](https://kit.svelte.dev/) and all my attempts to get
[Svelte Kit](https://kit.svelte.dev/) to play nicely with [vite](https://vitejs.dev/) failed
miserably. I did experiment with other frameworks like [Vue](https://vuejs.org/),
[Angular](https://angular.dev/), [Jekyll](https://jekyllrb.com/) but there is a learning curve to
all of these and there is still too much web-related aspects to them, so I pretty much walked away
from the exercise as my needs for a website were not that demanding.

Years later at work, I was automating the conversion of the project's
[RST](https://en.wikipedia.org/wiki/ReStructuredText)-based documentation into
[markdown](https://www.markdownguide.org/) and a colleague told me about
[Astro](https://astro.build/), which looked like it fits my criteria of focusing on content and
less about web things and package manager related shenanigans, especially given the
[Astro Nano](https://astro.build/themes/details/astronano/) template. So I thought I would try it
and see how the exercise goes.
