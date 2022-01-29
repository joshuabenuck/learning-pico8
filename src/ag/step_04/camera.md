# Camera

<iframe width="560" height="315" src="https://www.youtube.com/embed/DE-J_n-Y-cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Have the camera follow the player around the map.

Add code to set the camera to the `draw_map` function in the map code tab.
* divide the player's x and y coordinates by 16
* round down
* multiply by 16
* convert mapx, mapy to a pixel coordinate by multiplying by 8

```lua
function draw_map()
 mapx=flr(p.x/16)*16
 mapy=flr(p.y/16)*16
 camera(mapx*8,mapy*8)

 map(0,0,0,0,128,64)
end
```

## End Result

Save your changes with **ctrl+S**. Run them with **ctrl+R**. The camera should now
follow your character from screen to screen. Wondering a world without being able
to interact with it isn't all that interesting so lets add some things the player
can pick up in the next section.

<iframe width="750px" height="680px" src="./adventuregame_step_04.html"></iframe>
<a href="./adventuregame_step_04.p8.png" target="_blank">Download</a>



{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
