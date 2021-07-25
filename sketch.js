var bg,bgi, butterfly1i,butterfly2i,maxi,neti,max,net,ground,butterfly1,butterfly2,butterfly3,butterfly4
var butterfly5,butterfly6, vbutteri, vbutter


function preload() {
    bgi = loadImage("bg.jpg");
    butterfly1i = loadImage("butterfly1.png");
    butterfly2i = loadImage("butterfly2.png");
    neti = loadImage("net.png");
    maxi = loadImage("max.png");
    vbutteri = loadImage("vbutter.png")
}

function setup() {
    
    bg = createSprite(500,300,1000,600)
    bg.addImage(bgi)
    bg.scale = 2
    max = createSprite(500,500,50,50);
    max.addImage(maxi);
    max.scale = 0.3
    net = createSprite(570,490,50,50);
    net.addImage(neti);
    net.scale = 0.2

    ground = createSprite(500,580,2000,0.01)
    ground2 = createSprite(500,540,2000,0.01)

    vbutter = createSprite(480,330,50,50);
    vbutter.addImage(vbutteri);
    vbutter.scale = 0.15

    butterfly1 = createSprite(100,330,50,50)
    butterfly1.addImage(butterfly1i)
    butterfly1.scale = 0.1
    
    
    

    butterfly2 = createSprite(250,330,50,50)
    butterfly2.addImage(butterfly2i)
    butterfly2.scale = 0.1

    butterfly3 = createSprite(400,330,50,50)
    butterfly3.addImage(butterfly1i)
    butterfly3.scale = 0.1

    butterfly4 = createSprite(550,330,50,50)
    butterfly4.addImage(butterfly2i)
    butterfly4.scale = 0.1

    butterfly5 = createSprite(700,330,50,50)
    butterfly5.addImage(butterfly1i)
    butterfly5.scale = 0.1
    
    butterfly6 = createSprite(850,330,50,50)
    butterfly6.addImage(butterfly2i)
    butterfly6.scale = 0.1
    
    butterfly1.velocityX = -3
    butterfly2.velocityX = -3
    butterfly3.velocityX = 4
    butterfly4.velocityX = 4
    butterfly5.velocityX = 5
    butterfly6.velocityX = -4
    vbutter.velocityX = 7
}
  
  function draw() {
    createCanvas(1000,600);
    background("white");
    
    max.velocityY = 2
    net.velocityY = 2
    max.collide(ground)
    net.collide(ground2)
    
    if(butterfly1.x>900){
        butterfly1.velocityX = -4
    }
    if(butterfly1.x<12){
        butterfly1.velocityX = 4
    }
    if(butterfly2.x>900){
        butterfly2.velocityX = -4
    }
    if(butterfly2.x<12){
        butterfly2.velocityX = 4
    }
    if(butterfly3.x>900){
        butterfly3.velocityX = -4
    }
    if(butterfly3.x<12){
        butterfly3.velocityX = 4
    }
    if(butterfly4.x>900){
        butterfly4.velocityX = -4
    }
    if(butterfly4.x<12){
        butterfly4.velocityX = 4
    }
    if(butterfly5.x>900){
        butterfly5.velocityX = -4
    }
    if(butterfly5.x<12){
        butterfly5.velocityX = 4
    }
    if(butterfly6.x>900){
        butterfly6.velocityX = -4
    }
    if(butterfly6.x<12){
        butterfly6.velocityX = 4
    }
    if(vbutter.x>900){
        vbutter.velocityX = -8
    }
    if(vbutter.x<12){
        vbutter.velocityX = 8
    }
    
    if(keyDown  ("SPACE")){
        max.y = max.y - 5
        net.y = net.y - 5
}
    if(keyDown  ("LEFT_ARROW")){
        net.x = net.x - 4
        max.x = max.x - 4

}
    if(keyDown ("RIGHT_ARROW")){
        net.x = net.x + 4
        max.x = max.x + 4
}

if(max.y < 400){
    max.y = 430;
    net.y = 430
}

if(max.x > 979){
    max.x = 888;
    net.x = 978
}
if(max.x < 12){
    max.x = 40;
    net.x = 126
}
    console.log(butterfly6.x)
    drawSprites();
    

}