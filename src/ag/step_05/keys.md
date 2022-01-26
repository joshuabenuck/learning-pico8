# Keys

<iframe width="560" height="315" src="https://www.youtube.com/embed/8RXnQYXufB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Draw a sprite for a key and a sprite for a chest. The key can be picked up and the chest can be opened. When the player interacts with these items they are replaced by the sprite to the right, so you will need to draw two additional sprites.

The key is replaced by grass and the chest is replaced by an open chest.

Make a sound effect for the pick-up key sound.

Add two functions, `swap_tile` and `get_key`, to the map code tab.

```lua
function swap_tile(x,y)
 tile=mget(x,y)
 mset(x,y,tile+1)
end

function get_key(x,y)
 p.keys+=1
 swap_tile(x,y)
 sfx(1)
end
```

Add a function, interact to the player code tab.

```lua
function interact(x,y)
 if (is_tile(key,x,y)) then
  get_key(x,y)
 end
end
```

Now call this function from the `mode_player` function.

```lua
function move_player()
 newx=p.x
 newy=p.y

 if (btnp(⬅️)) newx-=1
 if (btnp(➡️)) newx+=1
 if (btnp(⬆️)) newy-=1
 if (btnp(⬇️)) newy+=1

 interact(newx,newy)
```

## End Result

Save your changes with **ctrl+S**. Run them with **ctrl+R**. You should now be able
to have your character pick up keys, but you will not be able to see how many keys
your character is holding. We will fix that in the next section.

<iframe width="750px" height="680px" src="./adventuregame_step_05.html"></iframe>
<a href="./adventuregame_step_05.p8.png" target="_blank">Download</a>


