t=0
function _init()
 cls()
 ship={sp=1,x=60,y=60}
 bullets={}
end

function fire()
 local b={
  sp=3,
  x=ship.x,
  y=ship.y,
  dx=0,
  dy=-3,
 }
 add(bullets,b)
end

function _update()
 t=t+1
 
 for b in all(bullets) do
  b.x+=b.dx
  b.y+=b.dy
 end
 
 if(t%6<3) then
  ship.sp=1
 else
  ship.sp=2
 end
 
 if btn(_) then ship.x-=1 end
 if btn(_) then ship.x+=1 end
 if btn(_) then ship.y-=1 end
 if btn(_) then ship.y+=1 end
 if btnp(_) then fire() end
end

function _draw()
 cls()
 spr(ship.sp,ship.x,ship.y)
 for b in all(bullets) do
  spr(b.sp,b.x,b.y)
 end
end

