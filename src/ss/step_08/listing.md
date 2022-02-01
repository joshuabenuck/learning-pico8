function _init()
 t=0

 ship={
  sp=1,
  x=60,
  y=100,
  h=3,
  p=0
 }
 bullets={}
 enemies={}
 for i=1,10 do
  add(enemies,{
   sp=17,
   m_x=i*16,
   m_y=60-i*8,
   x=-32,
   y=-32,
   r=12
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
 
 for e in all(enemies) do
  e.x=e.r*sin(t/50)+e.m_x
  e.y=e.r*cos(t/50)+e.m_y
 end
 
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
 
 for i=1,4 do
  if i<=ship.h then
   spr(33,80+6*i,3)
  else
   spr(34,80+6*i,3)
  end
 end
end

