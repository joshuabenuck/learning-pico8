# The Game Loop

PICO-8 uses three specially-named functions to create what's called a game
loop. The `_init()` function happens one time, then `_update()` and `_draw()`
happen in a loop until your game ends.  Here's the basic structure of the
PICO-8 game loop and what each functions does:

```lua
function _init()
 --code here one time
 --when your game starts.
end

function _update()
 --code here happens 30 times
 --every second.
end

function _draw()
 --code here also happens 30
 --time every second, but
 --after _update() happens.
end
```

You *could* put all of your code inside these three functions, but it's
generally not considered a good idea. A better solution is usually to make
other functions that do specific things, and then have `_init()`, `_update()`,
or `_draw()` run those functions.

For example, instead of putting player movement code in `_update()`, write your
own function called `move_player()` and run that inside `_update()`.

Here's an example of how it would all look. (Try it out! Type this code into PICO-8 and run it! Don't forget to make sprite #1!)

```lua
function _init()
 make_player()
end

function _update()
 move_player()
end

function _draw()
 cls() --clear screen
 draw_player()
end

function make_player()
 px=64
 py=64
 psprite=1
end

function move_player()
 if (btn(0)) px-=1 --left
 if (btn(1)) px+=1 --right
 if (btn(2)) py-=1 --up
 if (btn(3)) py+=1 --down
end

function draw_player()
 spr(psprite,px,py)
end
```

See how the game loop functions are kept nice and tidy? Now you can see a good
overview of how the game works just from those three functions.

When PICO-8 first came out, all your code went in one place. More recent
versions have added tabs to the code editor. This provides an additional way to
organize your code. The Adventure Game Tutorial makes great use of tabs. The
Space Shooter tutorial was written before tabs were in PICO-8. As you work
through them, notice how effective use of the tabs feature makes it easier to
work with the code in the tutorial.

**Note:** Not all of the tutorials included on this site follow the guidance
given here. As you work through them, you may discover other practices you wish
were followed more consistently. Make a note of them and discuss them with your
community. You may find others agree and start following your example!
