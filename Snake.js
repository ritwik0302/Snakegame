function Snake(){
 this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  
this.update = function(){
  this.x =this.x + this.xspeed*20;
  this.y = this.y+ this.yspeed*20;
  this.x = constrain(this.x, 0, width-20);
  this.y   = constrain(this.y, 0, width-20);
}
  
this.direction = function(x,y){
   this.xspeed = x;
    this.yspeed = y;
  }

this.show = function(){
  fill("white");
  rect(this.x, this.y ,10,10);
}
}