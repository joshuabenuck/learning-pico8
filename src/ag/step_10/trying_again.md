# Trying Again

<iframe width="560" height="315" src="https://www.youtube.com/embed/2UDThoTpxOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Add a way for the player to restart the game when they win or lose.

Add the following else condition to the `_update` function.

```lua
else
 if (btnp(X)) extcmd("reset")
```

Add the following code to the `draw_win_lose` function

```lua
print("press X to play again",20,72,5)
```

## End Result

Save your changes with **ctrl+S**. Run them with **ctrl+R**. You should now be able
to have reset the game after winning or losing.

Congratualations! This marks the point where you have a fully functional game!

You have an interactive world with a goal, obstacles to achieving that goal, the
ability for the player to win or lose, and the ability to reset the game after
a game over event.

Next, we will add text to the world to enable you to provide the player more
guidance on what to do in the game.

<iframe width="750px" height="680px" src="./adventuregame_step_10.html"></iframe>
<a href="./adventuregame_step_10.p8.png" target="_blank">Download</a>

{{#include ../source_code.md}}
```lua
{{#include listing.md}}
```
