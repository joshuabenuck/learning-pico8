--game loop

function _init()
 map_setup()
 make_player()
end

function _update()
end

function _draw()
 cls()
 draw_map()
 draw_player()
end


-->8
--map code

function map_setup()
 --map tile settings
 wall=0
 key=1
 door=2
 anim1=3
 anim2=4
 lose=6
 win=7
end

function draw_map()
 map(0,0,0,0,128,64)
end

-->8
--player code

function make_player()
 p={}
 p.x=3
 p.y=2
 p.sprite=1
 p.keys=0
end

function draw_player()
 spr(p.sprite,p.x*8,p.y*8)
end


