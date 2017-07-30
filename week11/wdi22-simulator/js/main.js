
var app = app || {};

app.step = 0;

app.xSineStep = 0;
app.yineStep = 0;
app.zSineStep = 0;

app.scrollNorm = 0.40;
app.metaScrollNorm = 0;

app.angle = 0;

app.cameraPosIndex = 0;

app.lastMouseTime = 0;

app.numParticles = 2000; //1000000;
app.particleDistribution = 300;

app.randyRange = function (min, max) {
  var range = max - min;
  return min + (Math.random() * range);
};

app.controller = {
  particleImages: {
    heads: [
      new THREE.TextureLoader().load( "img/alice-head.png"),
      new THREE.TextureLoader().load( "img/andy-head.png"),
      new THREE.TextureLoader().load( "img/anusha-head.png"),
      new THREE.TextureLoader().load( "img/edgy-head.png"),
      new THREE.TextureLoader().load( "img/james-head.png"),
      new THREE.TextureLoader().load( "img/john-head.png"),
      new THREE.TextureLoader().load( "img/jonathan-head.png"),
      new THREE.TextureLoader().load( "img/julian-head.png"),
      new THREE.TextureLoader().load( "img/lingxiao-head.png"),
      new THREE.TextureLoader().load( "img/luke-head.png"),
      new THREE.TextureLoader().load( "img/max-head.png"),
      new THREE.TextureLoader().load( "img/michelle-head.png"),
      new THREE.TextureLoader().load( "img/quinn-head.png"),
      new THREE.TextureLoader().load( "img/ryan-head.png"),
      new THREE.TextureLoader().load( "img/weijia-head.png")
    ],
    hotdogs: [
      // new THREE.TextureLoader().load( "img/snowflake.png" ),
      // new THREE.TextureLoader().load( "img/el.png" ),
      new THREE.TextureLoader().load( "img/sausage-alice.png"),
      new THREE.TextureLoader().load( "img/sausage-andy.png"),
      new THREE.TextureLoader().load( "img/sausage-anusha.png"),
      new THREE.TextureLoader().load( "img/sausage-james.png"),
      new THREE.TextureLoader().load( "img/sausage-john.png"),
      new THREE.TextureLoader().load( "img/sausage-jonathan.png"),
      new THREE.TextureLoader().load( "img/sausage-julian.png"),
      new THREE.TextureLoader().load( "img/sausage-lingxiao.png"),
      new THREE.TextureLoader().load( "img/sausage-max.png"),
      new THREE.TextureLoader().load( "img/sausage-michelle.png"),
      new THREE.TextureLoader().load( "img/sausage-quinn.png"),
      new THREE.TextureLoader().load( "img/sausage-ryan.png"),
      new THREE.TextureLoader().load( "img/sausage-weijia.png"),
      new THREE.TextureLoader().load( "img/sausage-weijia.png"),
      new THREE.TextureLoader().load( "img/sausage-alice.png")
    ]
  },
  particleMap: 0,
  PROJECTWEEK: false,
  particleBlend: THREE.AdditiveBlending,
  rotationSpeed: 0.02,
  bouncingSpeed: 0,  // 0.02
  particleAlpha: 0.5,
  particleSize: 14,
  velocityScale: 1.0,
  particleBright: 1.0,
  particleColour: [255, 255, 255],
  particleCount: app.numParticles,
  tour: false,

  xSineRange: 1,
  ySineRange: 1,
  zSineRange: 1,

  particleReset: function(projectWeek){

    // app.particleSystem = app.createParticleSystem();
    // app.scene.add( app.particleSystem );

    for (var i = 0; i < app.psystems.length; i++) {
      app.scene.remove( app.psystems[i] );
    }
    app.psystems  = [];

    if(projectWeek){

      for (var i = 0; i < app.controller.particleImages.hotdogs.length; i++) {
        var ps = app.createParticleSystem( app.controller.particleImages.hotdogs[i] );
        app.psystems.push( ps );
        app.scene.add( ps );
      }

    } else {

      for (var i = 0; i < app.controller.particleImages.heads.length; i++) {
        var ps = app.createParticleSystem( app.controller.particleImages.heads[i] );
        app.psystems.push( ps );
        app.scene.add( ps );
      }

    }

  },
  particlePos: {
    xMin: -app.particleDistribution,
    xMax: app.particleDistribution,
    yMin: -app.particleDistribution,
    yMax: app.particleDistribution,
    zMin: -app.particleDistribution,
    zMax: app.particleDistribution
  }
};


app.init = function () {

  console.log('hello my world', $('#output'));

  $('#output').on('mousewheel', function(e){
    var inc;

    if( !e.shiftKey && !e.metaKey ){
      return;
    }

    if( e.metaKey ){

      if(e.originalEvent.deltaY > 0){
        inc = -0.01;
      } else {
        inc = 0.01;
      }
      app.metaScrollNorm += inc;
      if(app.metaScrollNorm > 1.0) {
        app.metaScrollNorm = 1.0;
      } else if(app.metaScrollNorm < 0){
        app.metaScrollNorm = 0;
      }

      app.controller.velocityScale = -2 + (app.metaScrollNorm * 4);


    } else if( e.shiftKey ){

      if(e.originalEvent.deltaY > 0){
        inc = -0.005;
      } else {
        inc = 0.005;
      }
      app.scrollNorm += inc;
      if(app.scrollNorm > 1.0) {
        app.scrollNorm = 1.0;
      } else if(app.scrollNorm < 0){
        app.scrollNorm = 0;
      }

      app.controller.particleSize = 0.1 + (app.scrollNorm * 40);
    }
    // || event.shiftKey
		// 	|| event.metaKey
		// 	|| event.altKey
    // controls.sineSpeed = 0.001 + (app.scrollNorm * (0.2 - 0.001));

    // console.log('scroll!', app.controller.particleSize);
  });


  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // Camera params
  // field of view
  // screen ratio
  // how close to render things
  // how far to render things

  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 10000);

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // tell camera what to look at:
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // background color
  // app.renderer.shadowMap.enabled = true;
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  //
  // app.axes = new THREE.AxisHelper( 400 );
  // app.scene.add( app.axes );
  //
  // app.plane = app.createPlane();
  // app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  // app.sphere = app.createSphere();
  // app.scene.add( app.sphere );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambient = new THREE.AmbientLight( 0x444444 );
  app.scene.add( app.ambient );

  app.spline = app.createSpline();

  // app.line = app.createLineFromSpline( app.spline );
  // app.scene.add( app.line );

  app.psystems  = [];
  app.controller.particleReset();

  // for (var i = 0; i < app.controller.particleImages.heads.length; i++) {
  //   var ps = app.createParticleSystem( app.controller.particleImages.heads[i] );
  //   app.psystems.push( ps );
  //   app.scene.add( ps );
  // }

  //
  // app.particleSystem = app.createParticleSystem( app.controller.particleImages[0] );
  // app.scene.add( app.particleSystem );



// New version of texture loading
// app.spriteMap = new THREE.TextureLoader().load( "img/el.png" );
// var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
//
// app.sprite = new THREE.Sprite( spriteMaterial );
// app.scene.add( app.sprite );





  app.gui = new dat.GUI();

  app.gui.add(app.controller, 'PROJECTWEEK').onFinishChange(function(val){
    if(val) {
      app.controller.particleReset(true);
    } else {
      app.controller.particleReset();
    }
  });

  app.gui.add(app.controller, 'rotationSpeed', -0.5, 2);
  app.gui.add(app.controller, 'bouncingSpeed', 0, 0.2);
  app.gui.add(app.controller, 'particleSize', 1, 100).listen();
  // app.gui.addColor(app.controller, 'particleColour');
  app.gui.add(app.controller, 'particleBright', 0, 1.0);
  app.gui.add(app.controller, 'particleCount', 10, 200000);
  app.gui.add(app.controller, 'velocityScale', -2, 2).listen();
  app.gui.add(app.controller, 'particleReset');
  app.gui.add(app.controller, 'tour');

  // app.gui.add(app.controller, 'particleMap', 0, app.controller.particleImages.length-1)
  //  app.gui.add(app.controller, 'particleAlpha', 0.0, 1.0)
  // .onFinishChange(function(value) {
  //   app.particleSystem.material.alphaTest = value;
  // });

/**************
   app.gui.add(app.controller, 'particleMap', {head: 0, star: 1, ele: 2 })
  .onFinishChange(function(value) {
    console.log(value, app.controller.particleImages[ value ]);
    app.particleSystem.material.map = app.controller.particleImages[ value ];
  });

   app.gui.add(app.controller, 'particleBlend', {
     additive: 2, //THREE.AdditiveBlending,
     normal: THREE.NormalBlending,
     none: THREE.NoBlending,
     subtractive: THREE.SubtractiveBlending,
     multiply: THREE.MultiplyBlending,
   })
  .onFinishChange(function(value) {
    // console.log("new: %d, old: %d", value, app.particleSystem.material.blending);
    // app.particleSystem.material.blending = value;
    for (var i = 0; i < app.psystems.length; i++) {
      app.psystems[i].material.blending = value;
      app.psystems[i].material.needsUpdate  = true;
    }
  });
  *******************/

  app.gui.sineWaves = app.gui.addFolder('Sine Wave Ranges');
  app.gui.sineWaves.add(app.controller, 'xSineRange', -2, 2);
  app.gui.sineWaves.add(app.controller, 'ySineRange', -2, 2);
  app.gui.sineWaves.add(app.controller, 'zSineRange', -2, 2);

  app.gui.particlePlacementFolder = app.gui.addFolder('Particle Placement');
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'xMin', -1000, 0);
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'xMax', 0, 1000);
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'yMin', -1000, 0);
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'yMax', 0, 1000);
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'zMin', -1000, 0);
  app.gui.particlePlacementFolder.add(app.controller.particlePos, 'zMax', -1000, 0);

  // app.stats = app.addStats();

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  document.getElementById("output").appendChild( app.renderer.domElement );

  app.renderer.domElement.addEventListener('mousemove', function(){
    app.lastMouseTime = Date.now();
  });


  app.animate();

} // end init()


app.createPlane = function () {

  var planeGeometry = new THREE.PlaneGeometry( 120, 20 );  // 120 x 20 plane
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC // kind of grey
  });

  var plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.rotation.x = -0.5 * Math.PI;   // don't ask, it's because of math
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;

  return plane;
};

app.createCube = function () {

  var cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    wireframe: false
  });

  var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  cube.position.set( 0, 0, 0 );  // x y z coordinates for this object
  // cube.castShadow = true;

  return cube;
};

app.createSphere = function () {

  var sphereGeometry = new THREE.SphereGeometry( 20, 40, 40); // radius, x segments, y segments
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    // wireframe: true
    map: THREE.ImageUtils.loadTexture("img/earth.jpg")

  });

  var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

  sphere.position.set( 20, 4, 2 );
  // sphere.castShadow = true;

  return sphere;
};

app.createSpotlight = function () {

  var spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -20, 10, 10 );
  // spotlight.castShadow = true;
  // spotlight.shadow.mapSize.width = 2048;
  // spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};

app.animate = function () {

  if( app.controller.tour ){
    var radius = 50;
    app.camera.position.x = radius * Math.cos( app.angle );
    app.camera.position.z = radius * Math.sin( app.angle );
    // app.camera.position.y = radius * Math.cos( app.angle );
    app.camera.lookAt( app.scene.position );
    app.angle += 0.004;
  }
  // if( (Date.now() - app.lastMouseTime) > 30000 ){
  //
  //   app.cameraPosIndex++;
  //   if( app.cameraPosIndex > 10000) {
  //     app.cameraPosIndex = 0;
  //   }
  //
  //   // app.cameraPosIndex = (app.cameraPosIndex + 1) % 10000
  //
  //   var camPos = app.spline.getPoint( app.cameraPosIndex / 3000 );
  //   var camRot = app.spline.getTangent( app.cameraPosIndex / 3000 );
  //
  //   app.camera.position.set( camPos.x, camPos.y, camPos.z );
  //   app.camera.rotation.set( camRot.x, camRot.y, camRot.z );
  //
  //   app.camera.lookAt( app.spline.getPoint( (app.cameraPosIndex + 1) / 3000 ) );
  //
  // }


  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;


  app.step += app.controller.bouncingSpeed; // increment


  // app.sphere.rotation.y += app.controller.rotationSpeed;

  for (var i = 0; i < app.psystems.length; i++) {
    app.animateParticles( app.psystems[i] );
  }

  // app.sphere.position.x = 20 + (10 * Math.cos(app.step) );
  // app.sphere.position.y =  4 + (10 * Math.abs(Math.sin(app.step)));

  // app.stats.update();

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};

app.animateParticles = function ( ps ) {
/********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  var vertices = ps.geometry.vertices;

  //ps.material.alphaTest = app.con  troller.particleAlpha;

 ps.material.size = app.step ?
                    Math.abs( Math.sin(app.step) * app.controller.particleSize ) :
                    app.controller.particleSize;
                     //app.controller.particleSize;

 ps.material.color.setRGB( app.controller.particleBright, app.controller.particleBright, app.controller.particleBright );

  //ps.material.alphaTest = app.controller.particleAlpha;


/********************************* MUTUAL GRAVITATION first attempt: Maximum particles 200, or too slow!

    for (var i = 0; i < vertices.length; i++) {
      var vertA = vertices[i];

        for (var j = 0; j < vertices.length; j++) {
              var vertB = vertices[j];

              // if( vert.y < -app.particleDistribution/2 ){
              //     vert.y = app.particleDistribution;
              // }
              //
              // vert.y -= app.controller.rotationSpeed;
              var dx = vertA.x - vertB.x,
                  dy = vertA.y - vertB.y,
                  dz = vertA.z - vertB.z;

              var dist = Math.sqrt(dx*dx, dy*dy, dz*dz);

              // if dist > 100) {
                  // how to reverse? along line from particle to center
              // } else

              if( dist > 5.0){
                var force = (0.01 / (dist*dist)) * -app.controller.rotationSpeed; //0.05;
                vertA.vx += force * dx;
                vertA.vy += force * dy;
                vertA.vz += force * dz;
              }

              vertA.x += vertA.vx * app.controller.velocityScale;
              vertA.y += vertA.vy * app.controller.velocityScale;
              vertA.z += vertA.vz * app.controller.velocityScale;

              // vertA.x += app.controller.xSineRange * Math.cos(vertA.xStep);
              // vertA.y += app.controller.ySineRange * Math.cos(vertA.yStep);
              // vertA.z += app.controller.zSineRange * Math.cos(vertA.zStep);
      }
   }
   ps.geometry.verticesNeedUpdate = true;
 };
***************************************************/

  for (var i = 0; i < vertices.length; i++) {
    var vert = vertices[i];

    // if( vert.y < -app.particleDistribution/2 ){
    //     vert.y = app.particleDistribution;
    // }
    //
    // vert.y -= app.controller.rotationSpeed;

    var dist = Math.sqrt( vert.x*vert.x + vert.y*vert.y + vert.z*vert.z );

    // if dist > 100) {
        // how to reverse? along line from particle to center
    // } else

    if( dist > 10.0){
      var force = (10.0 / (dist*dist)) * -app.controller.rotationSpeed; //0.05;
      vert.vx += force * vert.x;
      vert.vy += force * vert.y;
      vert.vz += force * vert.z;
    }

    vert.x += vert.vx * app.controller.velocityScale;
    vert.y += vert.vy * app.controller.velocityScale;
    vert.z += vert.vz * app.controller.velocityScale;

    // vert.x += app.controller.xSineRange * Math.cos(vert.xStep);
    // vert.y += app.controller.ySineRange * Math.cos(vert.yStep);
    // vert.z += app.controller.zSineRange * Math.cos(vert.zStep);
  }

 ps.geometry.verticesNeedUpdate = true;
};


app.createSpline = function () {

  var randomPoints = [];
  for (var i = 0; i < 10; i++) {
    randomPoints.push(new THREE.Vector3(
      (Math.random() * 100) - 50,
      (Math.random() * 100) - 50,
      (Math.random() * 100) - 50
    ));
  }

  return new THREE.CatmullRomCurve3( randomPoints );
};

//
app.createLineFromSpline = function ( spline ) {

  var sGeometry =  new THREE.Geometry();

  var sMaterial = new THREE.LineBasicMaterial({
      color: 0xff00f0,
      linewidth: 8
  });

  var splinePoints = spline.getPoints(10000);

  for (var i = 0; i < splinePoints.length; i++) {
    sGeometry.vertices.push( splinePoints[i] );
  }

  return new THREE.Line( sGeometry, sMaterial );
}

app.createParticleSystem = function( map ){

  // Particles are just individual vertices in a geometry
  // Geometry stores an arbitrary collection of bits of geometric info to make an object
  var particles = new THREE.Geometry();

  var particleSpeed = 0.2;

  for (var i = 0; i < app.controller.particleCount; i++) {

    var x = app.randyRange( app.controller.particlePos.xMin, app.controller.particlePos.xMax );
    var y = app.randyRange( app.controller.particlePos.yMin, app.controller.particlePos.yMax );
    var z = app.randyRange( app.controller.particlePos.zMin, app.controller.particlePos.zMax );

    var particle = new THREE.Vector3( x, y, z );

    particle.vx = 0.01; //app.randyRange( -particleSpeed, particleSpeed );
    particle.vy = 0.01; //app.randyRange( -particleSpeed, particleSpeed );
    particle.vz = 0.01; //app.randyRange( -particleSpeed, particleSpeed );

    particle.xStep = 1.01;
    particle.yStep = 2.02;
    particle.zStep = 1.01;

    particles.vertices.push( particle );
  }

  console.log('p', app.controller.particleImages[ THREE.Math.randInt(0, app.controller.particleImages.length-1) ]);

  var particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF, //0xFF0000, //
    size: 10,
    // map: new THREE.TextureLoader().load( "img/luke-head.png" ),
    map: map, //app.controller.particleImages[ THREE.Math.randInt(0, app.controller.particleImages.length-1) ],
    //new THREE.TextureLoader().load( "img/luke-head.png" ),
    //THREE.ImageUtils.loadTexture("img/head.png"),
    blending:  THREE.NormalBlending, //app.controller.particleBlend, // THREE.NormalBlending,
    transparent: true,
    alphaTest: 0.5, // app.controller.particleAlpha
  });

  var particleSystem = new THREE.Points( particles, particleMaterial );

  return particleSystem;

};





app.onResize = function () {
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
};


app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
}

window.addEventListener("resize", app.onResize, false);

window.onload = app.init;
