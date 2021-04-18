var bg
var cat, cat_img1, cat_img2 , cat_img3
var mouse, mouse_img1, mouse_img2, mouse_img3

function preload() {
    //load the images here
bg = loadImage("images/garden.png")

cat_img1 = loadAnimation("images/cat1.png")
cat_img2 = loadAnimation("images/cat2.png" , "images/cat3.png")
cat_img3 = loadAnimation("images/cat4.png")

mouse_img1 = loadAnimation("images/mouse1.png")
mouse_img2 = loadAnimation("images/mouse2.png" , "images/mouse3.png")
mouse_img3 = loadAnimation("images/mouse4.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("sleep", cat_img1)
    cat.scale = 0.15

    mouse = createSprite(200,600)
    mouse.addAnimation("standing", mouse_img1)
    mouse.scale = 0.15
}

function draw() {

   background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("end", mouse_img3)
        mouse.changeAnimation("end")
    
        cat.velocityX = 0
        cat.addAnimation("walk1", cat_img3)
        cat.changeAnimation("walk1")
        cat.x = 300
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("teasing", mouse_img2)
    mouse.changeAnimation("teasing")
    mouse.frameDelay = 25

    cat.velocityX = -5
    cat.addAnimation("walk", cat_img2)
    cat.changeAnimation("walk")
}

}
