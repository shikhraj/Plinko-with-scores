class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
        
        // if(this.body.x>0 && this.body.x<120 && this.body.y>500){
        //     count = count + score;
        // }
    
        if(this.body.position.x>0 && this.body.position.x<180 && this.body.position.y>760){
            turn = turn + 1;
            if(turn<2){
            count = count + score;
            }

        }
        if(this.body.position.x>180 && this.body.position.x<420 && this.body.position.y>760){
            turn2 = turn2 + 1;
            if(turn2<2){
            count = count + score1;
            }

        }
        if(this.body.position.x>420 && this.body.position.x<600 && this.body.position.y>760){
            turn3 = turn3 + 1;
            if(turn3<2){
            count = count + score1;
            }

        }
        console.log(turn);
    }

    text(){
    }
};