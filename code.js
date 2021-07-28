var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a6bb5d8-e0cc-4aa4-b1c7-60e454699465","4fcb62b5-d436-45b2-81d5-91c65edc0f50","de685ca9-5248-4150-9b21-78a81913d32e"],"propsByKey":{"9a6bb5d8-e0cc-4aa4-b1c7-60e454699465":{"name":"sticker_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"4fcb62b5-d436-45b2-81d5-91c65edc0f50":{"name":"thief","sourceUrl":"assets/v3/animations/-M3GRNqT-i_xQka3AI-gV6CvlIZPisP0Y1-A051Quz4/4fcb62b5-d436-45b2-81d5-91c65edc0f50.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"uChbAugwayUPpfWMlDbHLLUyKBkjRxQi","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/-M3GRNqT-i_xQka3AI-gV6CvlIZPisP0Y1-A051Quz4/4fcb62b5-d436-45b2-81d5-91c65edc0f50.png"},"de685ca9-5248-4150-9b21-78a81913d32e":{"name":"kid_42_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png","frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ol296q7gAf0h40KzajFDpJw7o6mUWSV6","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(25,365,15,15);
thief.setAnimation("kid_42_1");
thief.scale=0.25;

var laser1 = createSprite(298,32,200,5);
laser1.shapeColor="purple";
laser1.velocityY=2;

var laser2 = createSprite(200,70,5,200);
laser2.shapeColor="purple";
laser2.velocityX=4;
laser2.velocityY=3;

var diamond = createSprite(365,25);
diamond.setAnimation("sticker_14_1");
diamond.scale = 0.25;

function draw() {
  background("aqua");
  
  createEdgeSprites();
  
  thief.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  
  if (keyDown("UP_ARROW")) {
    thief.velocityY=-2;
    
  }
  if (keyDown(DOWN_ARROW)) {
    thief.velocityY=2;
    
  }
  if (keyDown(RIGHT_ARROW)) {
    thief.velocityX=2;
    
  }
  if (keyDown(LEFT_ARROW)) {
    thief.velocityX=-2;
    
  }
  
 if (thief.isTouching(diamond)) {
    textSize(20);
    stroke("black");
    text("DIAMOND IS STOLEN!",100,200);
    laser1.velocityX=0;
    laser1.velocityY=0;
    laser2.velocityX=0;
    laser2.velocityY=0;
    
  }
  if (laser1.isTouching(thief)|| laser2.isTouching(thief)) {
     stroke(0);
     fill(0);
     textSize(20);
     text("THIEF IS CAUGHT!",100,200);
     thief.velocityX=0;
     thief.velocityY=0;
    laser1.velocityX=0;
    laser1.velocityY=0;
    laser2.velocityX=0;
    laser2.velocityY=0;
    
   }
    
     drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
