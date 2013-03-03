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

        var ctx = canvas.getContext('2d');

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
    var ctx = null;
    var img = null;

    var onImageLoad = function(){
        console.log("IMAGE!!!");
        // Draw an image to the canvas at position 192,192.
        // Remember that the drawImage method is attached
        // to the 2D Context, not the canvas element!
        // YOUR CODE HERE
        ctx.drawImage(img,192,192);
    };

    var setup = function() {
        var body = document.getElementById("body");
        canvas = document.createElement("canvas");

        ctx = canvas.getContext('2d');

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
