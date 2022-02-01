# 07. Move Enemies

<video controls width="512" poster="./tut_7.gif">
    <source src="./tut_7.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

[Image](./tut_7.git) ([Original Source](https://ztiromoritz.github.io/pico-8-shooter/gif/tut_7.gif))

In `_init`, update the enemy creation code.

```lua
for i=1,10 do
 add(enemies,{
  sp=17,
  m_x=i*16,
  m_y=60-i*8,
  x=-32,
  y=-32,
  r=12
 })
end
```

In `_update`, add code to change the position of the enemies.

```lua
function _update()
 t=t+1

 for e in all(enemies) do
  e.x=e.r*sin(t/50)+e.m_x
  e.y=e.r*cos(t/50)+e.m_y
 end
```

Hit `ctrl-r` to run the game. You should see the enemies moving down the screen
in a circular pattern.

The enemies cannot hurt the player and vice versa. Come to think of it, the player doesn't even have any health. Let's explore that next.

## End Result
<iframe width="750px" height="680px" src="./ss_07.html"></iframe>
<a href="./ss_07.p8.png" target="_blank">Download</a>

{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
