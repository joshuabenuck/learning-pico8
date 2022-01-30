# 03. Basic Ship Movement

<video controls width="512" poster="tut_3.gif">
    <source src="./tut_3.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

[Image](./tut_3.git) ([Original Source](https://ztiromoritz.github.io/pico-8-shooter/gif/tut_3.gif))

In this step, we will add code to move the ship around the screen.

At the end of the `_update` function, add an `if` statement for each arrow key.

**Tip:** After typing the first `if` statement, hit `ctrl-d` to duplicate the
first line. Then edit the new line. This will save you some typing.

```lua
if btn(L) then ship.x-=1 end
if btn(R) then ship.x+=1 end
if btn(U) then ship.y-=1 end
if btn(D) then ship.y+=1 end
```

On each frame, `_update` new checks to see if an arrow key is being held down.
If it is, it changes the pixel coordinate of the ship by `1` in the appropriate
direction.

Hit `ctrl-r` to run your cart and try it out!
