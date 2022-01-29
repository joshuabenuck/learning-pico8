# Inventory

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZF8exnHMQRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

When the player holds down the `X` key we'll show how many keys the player has
in their inventory.

Create a new tab called inventory code. It shoudl be tab `3`. Add a function
called `show_inventory` to it.

```lua
function show_inventory()
 invx=mapx*8+40
 invy=mapy*8+8

 rectfill(invx,invy,invx+48,invy+24,0)
 print("inventory",invx+7,invy+4,7)
 print("keys "..p.keys,invx+12,invy+14,9)
end
```

Then call this function from the `_draw` function.
You can use shift-x to get the `X` glyph.

```lua
function _draw()
 cls()
 draw_map()
 draw_player()
 if (btn(❎)) show_inventory()
end
```

## End Result

Save your changes with **ctrl+S**. Run them with **ctrl+R**. You should now be able
to pick up a key and then press `X` to see how many keys the player has in their
inventory. Next, lets add a way for the player to use the keys they collect.

<iframe width="750px" height="680px" src="./adventuregame_step_06.html"></iframe>
<a href="./adventuregame_step_06.p8.png" target="_blank">Download</a>


{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
