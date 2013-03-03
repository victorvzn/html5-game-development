// 01- WHAT IS CANVAS //////////////////////////////////////////////////////////////////////

// 02- YOUR FIRST CANVAS //////////////////////////////////////////////////////////////////////

    // QUIZ

    <body>
        <canvas id="my_canvas"></canvas>
    </body>
    <script>

    var canvas = null;
    var context = null;


    setup = function() {

        canvas = document.getElementById("my_canvas");  /* YOUR CODE HERE */
        context = canvas.getContent('2d');

        canvas.width = 1200; // window.innerWidth
        canvas.height = 720; // window.innerHeight

    };

    // We'll call your setup function in our test code, so
    // don't call it in your code.
    setup();

    </script>

// 03- LOADING IMAGES //////////////////////////////////////////////////////////////////////7

    // Loading an Image

    1) Declare a new Image() object.
    2) Declare its 'onload' method.
    3) Set Image.src = "url"

    // QUIZ

    setup = function() {
        var body = document.getElementById('body');
        var canvas = document.createElement('canvas');

        var context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        body.appendChild(canvas);

        // Create a new image with:
        // a 'src' attribute of "/media/img/gamedev/ralphyrobot.png"
        // and an 'onload' attribute of onImageLoad
        // YOUR CODE HERE
        img = new Image();
        img.onload = onImageLoad;
        img.src = '/media/img/gamedev/ralphyrobot.png';
    };

    onImageLoad = function(){
        // Use the console.log function to print a statement to the browser console.
        // This will print once the image has been downloaded.
        // YOUR CODE HERE
        console.log('Image downloaded!!');
    };

    // We'll call your setup function in our test code, so
    // don't call it in your code.
    // setup();


// 04- DRAWING IMAGES //////////////////////////////////////////////////////////////////////7

    // A reference for canvas we find in http://www.webplatform.org/

    // QUIZ

    var canvas = null;
    var context = null;
    var img = null;

    var onImageLoad = function(){
        console.log("IMAGE!!!");
        // Draw an image to the canvas at position 192,192.
        // Remember that the drawImage method is attached
        // to the 2D Context, not the canvas element!
        // YOUR CODE HERE
        context.drawImage(img,192,192);
    };

    var setup = function() {
        var body = document.getElementById("body");
        canvas = document.createElement("canvas");

        context = canvas.getContext('2d');

        canvas.setAttribute('width', 500);
        canvas.setAttribute('height', 700);

        body.appendChild(canvas);

        img = new Image();
        img.onload = onImageLoad;
        img.src = "/media/img/gamedev/ralphyrobot.png";
    };


    // We'll call your setup function in our test code, so
    // don't call it in your code.
    // setup();


// 05- COORDINATE SYSTEMS //////////////////////////////////////////////////////////////////////

// 06- IMAGE FORMATS //////////////////////////////////////////////////////////////////////

    JPEG
        SIZE & COMPRESSION > MENOR
        ALPHA              > NO TIENE
    PNG
        SIZE & COMPRESSION > MAYOR
        ALPHA              > OK
    WEB-P
        SIZE & COMPRESSION > MUCHO MENOS
        ALPHA              > OK


// 07- ANIMATION ////////////////////////////////////////////////////////////////////////

    // QUIZ - MI SOLUCIÓN :P

    var canvas = null;
    var context = null;
    var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
                  '/media/img/gamedev/robowalk/robowalk01.png',
                  '/media/img/gamedev/robowalk/robowalk02.png',
                  '/media/img/gamedev/robowalk/robowalk03.png',
                  '/media/img/gamedev/robowalk/robowalk04.png',
                  '/media/img/gamedev/robowalk/robowalk05.png',
                  '/media/img/gamedev/robowalk/robowalk06.png',
                  '/media/img/gamedev/robowalk/robowalk07.png',
                  '/media/img/gamedev/robowalk/robowalk08.png',
                  '/media/img/gamedev/robowalk/robowalk09.png',
                  '/media/img/gamedev/robowalk/robowalk10.png',
                  '/media/img/gamedev/robowalk/robowalk11.png',
                  '/media/img/gamedev/robowalk/robowalk12.png',
                  '/media/img/gamedev/robowalk/robowalk13.png',
                  '/media/img/gamedev/robowalk/robowalk14.png',
                  '/media/img/gamedev/robowalk/robowalk15.png',
                  '/media/img/gamedev/robowalk/robowalk16.png',
                  '/media/img/gamedev/robowalk/robowalk17.png',
                  '/media/img/gamedev/robowalk/robowalk18.png'
                 ];
    var frames = [];
    var c = 0;

    var onImageLoad = function(){
        console.log("IMAGE!!!");
    };

    var setup = function() {
        body = document.getElementById('body');
        canvas = document.createElement('canvas');

        context = canvas.getContext('2d');

        canvas.width = 100;
        canvas.height = 100;

        body.appendChild(canvas);

        // Load each image URL from the assets array into the frames array
        // in the correct order.
        // Afterwards, call setInterval to run at a framerate of 30 frames
        // per second, calling the animate function each time.
        // YOUR CODE HERE
        for( var i=0; i < assets.length; i++ )
        {
            img = new Image();
            img.onload = onImageLoad;
            img.src = assets[i];
            frames[i] = img;
        }
        setInterval(animate, 1000/30);
    };

    var animate = function(){
        // Draw each frame in order, looping back around to the
        // beginning of the animation once you reach the end.
        // Draw each frame at a position of (0,0) on the canvas.

        // Try your code with this call to clearRect commented out
        // and uncommented to see what happens!
        //
        context.clearRect(0,0,canvas.width, canvas.height);

        // YOUR CODE HERE
        context.drawImage(frames[c],0,0);
        c++;
    };

    // We'll call your setup function in our test code, so
    // don't call it in your code.
    // setup();


    // QUIZ : SOLUCIÓN OPTIMA *****************************************************************************************

    var canvas = null;
    var context = null;
    var frameRate = 1000/30; // Represents how often we'd like to actually call the animate function.
    var frame = 0; // Varriable that we're going to use to represent what the current frame.
    var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
                  '/media/img/gamedev/robowalk/robowalk01.png',
                  '/media/img/gamedev/robowalk/robowalk02.png',
                  '/media/img/gamedev/robowalk/robowalk03.png',
                  '/media/img/gamedev/robowalk/robowalk04.png',
                  '/media/img/gamedev/robowalk/robowalk05.png',
                  '/media/img/gamedev/robowalk/robowalk06.png',
                  '/media/img/gamedev/robowalk/robowalk07.png',
                  '/media/img/gamedev/robowalk/robowalk08.png',
                  '/media/img/gamedev/robowalk/robowalk09.png',
                  '/media/img/gamedev/robowalk/robowalk10.png',
                  '/media/img/gamedev/robowalk/robowalk11.png',
                  '/media/img/gamedev/robowalk/robowalk12.png',
                  '/media/img/gamedev/robowalk/robowalk13.png',
                  '/media/img/gamedev/robowalk/robowalk14.png',
                  '/media/img/gamedev/robowalk/robowalk15.png',
                  '/media/img/gamedev/robowalk/robowalk16.png',
                  '/media/img/gamedev/robowalk/robowalk17.png',
                  '/media/img/gamedev/robowalk/robowalk18.png'
                 ];
    var frames = [];

    var onImageLoad = function(){
        console.log("IMAGE!!!");
    };

    var setup = function() {
        body = document.getElementById('body');
        canvas = document.createElement('canvas');

        context = canvas.getContext('2d');

        canvas.width = 100;
        canvas.height = 100;

        body.appendChild(canvas);

        // Load each image URL from the assets array into the frames array
        // in the correct order.
        // Afterwards, call setInterval to run at a framerate of 30 frames
        // per second, calling the animate function each time.
        // YOUR CODE HERE
        for( var i = 0; i < assets.length; i++ )
        {

            frames.push(new Image());
            frame[i].onload = onImageLoad;
            frame[i].src = assets[i];
        }
        setInterval(animate, frameRate);
    };

    var animate = function(){
        // Draw each frame in order, looping back around to the
        // beginning of the animation once you reach the end.
        // Draw each frame at a position of (0,0) on the canvas.

        // Try your code with this call to clearRect commented out
        // and uncommented to see what happens!
        //

        // YOUR CODE HERE
        context.clearRect(0,0,canvas.width, canvas.height);
        context.drawImage(frames[frame], 192, 192);
        frame = (frame + 1) % frames.length;
        // What we do is increment the frame counter and that modulo it by the frame's length.

    };

    /* frame = 0

        frame = (frame + 1) % frames.length;

        frame = (0 + 1) % 19 = 1
        frame = (1 + 1) % 19 = 2
        frame = (2 + 1) % 19 = 3
        frame = (3 + 1) % 19 = 4
        frame = (4 + 1) % 19 = 5
        frame = (5 + 1) % 19 = 6
        frame = (6 + 1) % 19 = 7
        frame = (7 + 1) % 19 = 8
        ...
        frame = (18 + 1) % 19 = [ 0 ]
        frame = (0 + 1) % 19  = 1
        frame = (1 + 1) % 19  = 2
        ...

    */

    // NOTA:  ESTA ES LA URL PARA DESCARGAR LAS IMAGENES DE ROBOWALK
    // http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png




