# Doors

<iframe width="560" height="315" src="https://www.youtube.com/embed/9EiXQxfK05I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What good are keys if you cannot do anything with them?

Let's fix this by adding doors that the player can open with their keys. First draw a pair of sprites: an closed and an opened door. Just like with the key and chest sprites, be sure to put them right next to each other. This allows us to use the `swap_tile` function to open a door.

![Closed Door](./door_closed.png)

![Opened Door](./door_opened.png)

Add a sound effect for opening a door. This should be sound `02`. Replicate
what is in the screenshot or create your own custom door opening sound.

![Open Door Sound](./open_door_sound.png)

Add a function `open_door` to open the door to the map code tab.

```lua
function open_door(x,y)
 p.keys-=1
 swap_tile(x,y)
 sfx(2)
end
```

This function gets called in the interact function.

```lua
function interact(x,y)
 if (is_tile(key,x,y)) then
  get_key(x,y)
 elseif (is_tile(door,x,y) and p.keys>0) then
  open_door(x,y)
 end
end
```

## End Result

Save your changes with **ctrl+S**. Run them with **ctrl+R**. You should now be
able to pick up a key and use it to unlock a door.

<iframe width="750px" height="680px" src="./adventuregame_step_07.html"></iframe>
<a href="./adventuregame_step_07.p8.png" target="_blank">Download</a>


{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
