<!DOCTYPE html>
<html>
<head>
	<title>Circles</title>
	<
	<script src="https://kit.fontawesome.com/8b8ff6b690.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script type="text/javascript" src="paper-full.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.min.js"></script>
	<link rel="stylesheet" type="text/css" href="circles.css">

	<script type="text/paperscript" canvas="myCanvas">
		
		var keyData = {
			q: {
				sound: new Howl({
		  		src: ['sounds/bubbles.mp3']
				}),
				color: '#1abc9c'
			},
			w: {
				sound: new Howl({
		  		src: ['sounds/clay.mp3']
				}),
				color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		src: ['sounds/confetti.mp3']
				}),
				color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		src: ['sounds/corona.mp3']
				}),
				color: '#9b59b6'
			},
				t: {
				sound: new Howl({
		  		src: ['sounds/dotted-spiral.mp3']
				}),
				color: '#34495e'
			},
			y: {
				sound: new Howl({
		  		src: ['sounds/flash-1.mp3']
				}),
				color: '#16a085'
			},
			u: {
				sound: new Howl({
		  		src: ['sounds/flash-2.mp3']
				}),
				color: '#27ae60'
			},
			i: {
				sound: new Howl({
		  		src: ['sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					src: ['sounds/glimmer.mp3']
				}),
				color: '#8e44ad'
			},
			p: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: '#2c3e50'
			},
			a: {
				sound: new Howl({
		  		src: ['sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		src: ['sounds/piston-1.mp3']
				}),
				color: '#e67e22'
			},
				d: {
				sound: new Howl({
		  		src: ['sounds/piston-2.mp3']
				}),
				color: '#e74c3c'
			},
			f: {
				sound: new Howl({
		  		src: ['sounds/prism-1.mp3']
				}),
				color: '#95a5a6'
			},
			g: {
				sound: new Howl({
		  		src: ['sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		src: ['sounds/prism-3.mp3']
				}),
				color: '#d35400'
			},
			j: {
				sound: new Howl({
		  		src: ['sounds/splits.mp3']
				}),
				color: '#1abc9c'
			},
			k: {
				sound: new Howl({
		  		src: ['sounds/squiggle.mp3']
				}),
				color: '#2ecc71'
			},
			l: {
				sound: new Howl({
		  		src: ['sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		src: ['sounds/suspension.mp3']
				}),
				color: '#9b59b6'
			},
			x: {
				sound: new Howl({
		  		src: ['sounds/timer.mp3']
				}),
				color: '#34495e'
			},
			c: {
				sound: new Howl({
		  		src: ['sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		src: ['sounds/veil.mp3']
				}),
				color: '#27ae60'
			},
			b: {
				sound: new Howl({
		  		src: ['sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
					src: ['sounds/zig-zag.mp3']
				}),
				color: '#8e44ad'
			},
			m: {
				sound: new Howl({
		  		src: ['sounds/moon.mp3']
				}),
				color: '#2c3e50'
			}
		}

		var circles = [];

		function onKeyDown(event) {
			if(keyData[event.key]){
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var newCircle = new Path.Circle(point, 500)
				newCircle.fillColor = keyData[event.key].color;
				keyData[event.key].sound.play();
				circles.push(newCircle);
			}
		}

		function onFrame(event){
			for(var i = 0; i < circles.length; i++){
				circles[i].fillColor.hue += 1;
				circles[i].scale(.9);
			}
		}
	</script>
</head>
<body>
	
    <div class="container">
  
  <div class='row'>
    <div class='col-md-offset-2 col-md-8'>
      <div class="carousel slide"  id="quote-carousel">
        <!-- Bottom Carousel Indicators -->
        <!--<ol class="carousel-indicators">-->
          <div data-target="#quote-carousel"  class="active"></div>
          
        <!--</ol>-->
        
        <!-- Carousel Slides / Quotes -->
        <div class="carousel-inner">
        
          <!-- Quote 1 -->
          <div class="item active">
            <blockquote>
              <div class="row">
                <div class="col-sm-3 text-center">
                  <img  src="devesh.jpeg" style="width: 100px;height:100px;">
                  <!--<img class="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style="width: 100px;height:100px;">-->
                </div>
                <div class="col-sm-9">
                  <p>You may hold my hand for a while, but you hold my heart forever !! <span></p>
                  <small ><em style="color: #ff3399;">-Devesh Paradhi<em></small>
                </div>
              </div>
            </blockquote>
          </div>
         
         </div>
        
        <!-- Carousel Buttons Next/Prev -->
        <!--<a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>-->
        <!--<a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>-->
      </div>                          
    </div>
  </div>
   
	 <div id="hint" style="display: block;" >
      <p class="message">Press any key, A to Z and turn up speakers</p>
      <a class="ios-app-store" href="https://itunes.apple.com/us/app/patatap/id880626868?ls=1&amp;mt=8" target="_blank"></a>
      <a class="play-store" href="https://play.google.com/store/apps/details?id=com.jonobr1.Patatap" target="_blank"></a>
    </div> 
</div>
	<canvas id="myCanvas" resize>
	
	</canvas>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>	
</body>
</html>