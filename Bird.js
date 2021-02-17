class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.Visibility = 255
    this.trajectory = [] 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.speed > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position) 
    }
    
    //var arr3 = [[200,200],[201,201]]
   // this.Visiblity = this.Visiblity - 1;
   for(var i = 0; i < this.trajectory.length ; i++){
   // push(); 
   // tint(255,this.Visiblity);
    image(this.image2, this.trajectory[i][0] , this.trajectory[i][1])
   // pop();
   }
 
    super.display();
  }
}
