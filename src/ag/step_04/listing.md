--game loop

function _init()
 map_setup()
 make_player()
end

function _update()
 move_player()
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
 mapx=flr(p.x/16)*16
 mapy=flr(p.y/16)*16
 camera(mapx*8,mapy*8)

 map(0,0,0,0,128,64)
end

function is_tile(tile_type,x,y)
 tile=mget(x,y)
 has_flag=fget(tile,tile_type)
 return has_flag
end

function can_move(x,y)
 return not is_tile(wall,x,y)
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

function move_player()
 newx=p.x
 newy=p.y
 
 if (btnp(_)) newx-=1
 if (btnp(_)) newx+=1
 if (btnp(_)) newy-=1
 if (btnp(_)) newy+=1
 
 if (can_move(newx,newy)) then
  p.x=mid(0,newx,127)
  p.y=mid(0,newy,63)
 else
  sfx(0)
 end
end
