t=0
function _init()
 cls()
 ship={sp=1,x=60,y=60}
end

function _update()
 t=t+1
 if(t%6<3) then
  ship.sp=1
 else
  ship.sp=2
 end
 
 if btn(_) then ship.x-=1 end
 if btn(_) then ship.x+=1 end
 if btn(_) then ship.y-=1 end
 if btn(_) then ship.y+=1 end
end

function _draw()
 cls()
 spr(ship.sp,ship.x,ship.y)
end


