# 04. Fire Laser Bullets

<video controls width="512" poster="tut_4.gif">
    <source src="./tut_4.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

[Image](./tut_4.git) ([Original Source](https://ztiromoritz.github.io/pico-8-shooter/gif/tut_4.gif))

<div><img src="./code1.png" width="512"/></div>

Update `_init` to have a table to hold information about all of the bullets.

```lua
function _init()
 ship={sp=1,x=60,y=60}
 bullets={}
end
```

Now add a `fire` function to create a new bullet and add it to the bullets
table.
```lua
function fire()
 local b={
  sp=3,         -- which sprite to display for bullets
  x=ship.x,     -- start bullets at the ship's location
  y=ship.y,
  dx=0,
  dx=-3,        -- bullets move up from the ships location
 }
 add(bullets,b) -- add bullet to the table of bullets
end
```
<div><img src="./code2.png" width="512"/></div>

Bullets move after being fired. This is an update operation and not a draw
operation so we will add it in `_update`.

```lua
function _update()
 t=t+1

 for b in all(bullets) do
  b.x+=b.dx
  b.y+=b.dy
 end
```

We will need a way to trigger the firing of a bullet. Add this `if` statement at the end of `_update`. It will cause a bullet to fire if you press `X`.

```lua
if btnp(X) then fire() end
```

**Note:** We use `btnp` instea of `btn` to limit the rate of firing. 

<div><img src="./code3.png" width="512"/></div>

Let's display the bullets.

```lua
function _draw
 cls()
 spr(ship.sp,ship.x,ship.y)
 for b in all(bullets) do
  spr(b.sp,b.x,b.y)
 end
end
```

Finally, let's actually create the bullet sprite so we have something to draw!

<div><img src="./bullet.png" width="512"/></div>

Hit `ctrl-r` to run the game and then press `X` a few times. You should see something like this.

<div><img src="./result.png" width="512"/></div>

Don't get carried away and fire too many! The code we wrote in this step has a
**fatal** flaw. It never forgets about any of the bullets that have been fired. As
bullets are fired an ever increasing amount of memory is consumed. It will also
take an ever increasing amount of time to update the position of the bullets
and draw them.  Taken to the extreme, it has the potential to crash the game or
make it unplayable.

This isn't a safe play to remain so we will address this in the next step.

