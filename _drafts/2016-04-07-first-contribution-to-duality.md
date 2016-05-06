---
layout: post
---
A few days ago, [my first pull request](https://github.com/AdamsLair/duality/pull/311) got approved.

If you didn't know, Duality is an open-source 2D game engine,
the one behind my most successful (?!) game, [MoonRogue](/games/moonrogue.html).

My contribution is rather minimal, just a more detailed error message in a special case.
Duality's rendering pipeline is versatile, but in some cases, the lack of detailed
error messages make beginner's life hard. For instance, if you set the camera render
to texture using the _RenderTarget_ resource, it's not really straightforward that you
have to specify the texture size before. My error message warns to do this.

Before:

![Before](/images/posts/dualitor_before.png)

After:

![After](/images/posts/dualitor_after.png)
