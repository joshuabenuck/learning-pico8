t=0
function _init()
 cls()
 ship={sp=1,x=60,y=60}
 bullets={}
 enemies={}
 for i=1,10 do
  add(enemies, {
   sp=17,
   x=i*16,
   y=60-i*8
  })
 end
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
  if b.x<0 or b.x>128 or
   b.y<0 or b.y>128 then
   del(bullets,b)
  end
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
 print(#bullets,6)
 spr(ship.sp,ship.x,ship.y)
 for b in all(bullets) do
  spr(b.sp,b.x,b.y)
 end
 
 for e in all(enemies) do
  spr(e.sp,e.x,e.y)
 end
end

