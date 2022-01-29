--game loop

function _init()
 map_setup()
end

function _update()
end

function _draw()
 cls()
 draw_map()
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

