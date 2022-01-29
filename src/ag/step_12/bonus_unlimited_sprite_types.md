# Bonus Step: Unlimited Sprite Types

We have been using sprite flags to differentiate between the different sprite
types. This limits us to a maximum of 8 sprite types.

To overcome this limitation and support an unlimited number of sprite types,
we are going to switch from using sprite flags to explicitly enumerating all
of the sprites of each type.

In `map_setup`, we currently have this mapping of sprite types to their flags.
```lua
wall=0
key=1
door=2
anim1=3
anim2=4
lose=6
win=7
```

Change each of these to be a list of all of the sprite numbers for each sprite
of that type. If you very closely followed along to this point, you should be
able to copy these values. If you were more casual in where you placed each
sprite type, your numbers will be different. Check each of these values against
your setup.
```lua
wall={18,32,33,34,36,37,50,52}
key={20,36}
door={52}
anim1={23}
anim2={24}
lose={23}
win={7}
```

Replace the call to `fget` in `is_tile` in tab `1` with this:
```lua
for i=1,#tile_type do
 if (tile == tile_type[i]) return true
end
return false
```

Once you have made these changes, hit `ctrl-s` to save your game and `ctrl-r`
to run it.

You will want to test to verify that all of the sprite types work. That means
you will want to:
* Attempt to walk into all wall tile types (e.g. water, wall)
* Pick up all key tile types (e.g. the key and the chest)
* Step on all spike tile types
* Walk on all non-wall types (e.g. grass, stone)

If a tile isn't behaving as you expect, double check that the number for the
sprite is in the correct list in `map_setup`.

# New Tile Type
Once you have verified all sprite types work, lets make use of the added
flexibility by adding a new sprite type.

We are going to change the chest so it gives us gold instead of a key. Modify
`map_setup`. Remove sprite `36` (the chest) from the key list.
```lua
key={20}
```
and add it to a newly created `gold` list.
```lua
gold={36}
```

Picking up gold does us no good, if we don't keep track of it. Lets modify
`make_player` in tab `2`. Put this at the end of the function.
```lua
p.gold=0
```

With a place to store it, we can add a function to allow us to get it. Copy
`get_key` in tab `1` and modify it to create `get_gold`.
```lua
function get_gold(x,y)
 p.gold+=5
 swap_tile(x,y)
 sfx(1)
end
```

```lua
function interact(x,y)
 if (is_tile(key,x,y)) then
  get_key(x,y)
 elseif (is_tile(door,x,y) and...
  open_door(x,y)
 elseif (is_tile(gold,x,y))
  get_gold(x,y)
 end
```

Now we just need to update `show_inventory` in tab `3` to show the player how
much gold they have. Start by making the rectangle `6` pixels taller by changing
`invy+24` to `invy+30`. Then add this line to the end of the function.
```lua
print("gold ", .p.gold,invx+12, invy+20,9)
```

Save and run the game. The gold in the player's inventory should start out at
`0`. Open the chest and show the inventory. It should show `5` gold.

If you made it to this point, congratulations! You now have the ability to add
an unlimited number of sprite types. Here are just a few of the possibilities:
* Chests that hold specific items
* Chests that hold a variable amount of gold
* Keys that only open certain chests or doors
* Items needed to complete quests
* etc

# Result
<iframe width="750px" height="680px" src="./adventuregame_bonus_step_more_tiles.html"></iframe>
<a href="./adventuregame_bonus_step_more_tiles.p8.png" target="_blank">Download</a>


{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
