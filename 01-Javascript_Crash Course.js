// 01- INSPECTING JSON //////////////////////////////////////////////////////////////////////

JSON: Formato de interncambio ligero

// This is an example of how the JSON would be structured.
// Note that chaingun_impact.png is not here.
//
// Note that this is an actual Javascript object, whereas
// JSON is a string that represents that object.

var JSONExample = {
    "frames": {
        "chaingun.png": {
            "frame": {
                "x": 1766,
                "y": 202,
                "w": 42,
                "h": 34
            },
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x": 38,
                "y": 32,
                "w": 42,
                "h": 34
            },
            "sourceSize": {
                "w": 128,
                "h": 128
            }
        },
        "chaingun_impact.png": {
            "frame": {
                "x":1162,
                "y":322,
                "w":38,
                "h":34},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x":110,
                "y":111,
                "w":38,
                "h":34},
            "sourceSize": {
                "w":256,
                "h":256}
        },
        "chaingun_impact_0000.png": {
            "frame": {
                "x": 494,
                "y": 260,
                "w": 22,
                "h": 22
            },
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x": 113,
                "y": 108,
                "w": 22,
                "h": 22
            },
            "sourceSize": {
                "w": 256,
                "h": 256
            }
        }
    }
};

// The above is an example of how the JSON would be structured.
// Note that chaingun_impact.png is not here, we'll call your
// parseJSON function with the full JSON input.
//
// Note also that the above is an actual Javascript object, whereas
// JSON is a string that represents that object.
var parseJSON = function (weaponJSON) {
    // First, use the JSON.parse function to
    // parse the passed in weaponJSON.
    //
    // Next, grab the 'x' data field within
    // 'spriteSourceSize' of 'chaingun_impact.png'
    //
    // After that, print this value to the console
    // and also return it.

    // YOUR CODE HERE
    var parsed = JSON.parse(weaponJSON);
    console.log(parsed['frames']['chaingun_impact.png']['spriteSourceSize']['x']);
};

parseJSON(JSONExample);

// 02 - XMLHttpRequest ////////////////////////////////////////////////////////////////////////

1) Create a new XMLHttpRequest() Object
2) xhr.open("GET|POST", "URL", async); // async = true|false
3) xhr.onload = function() {  };
4) xhr.send();

// 03 - MAKING A REQUEST //////////////////////////////////////////////////////////////////////

parseJSON = function (weaponJSON) {
    parsedJSON = JSON.parse(weaponJSON);

    return parsedJSON.frames.chaingun_impact.png.spriteSourceSize.x;
};

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest(); // YOUR CODE HERE

var setup = function() {
// then use its open method to to define the request that
// will be sent. The parameters to 'open' are:
//
// 1) The HTTP method to use, in our case we want
//    "GET".
// 2) The resource to request, in this case we're
//    interested in "/media/js/standalone/libs/gamedev_assets/weapon.json".
// 3) A boolean indicating whether or not we want
//    the request to be asynchronous or not. True
//    means we do want it to be asynchronous.

// YOUR CODE HERE
xhr.open("GET", "/media/js/standalone/libs/gamedev_assets/weapon.json", true);

// After that, we want to define the onload method
// of the request to be our parsing function from
// before. We've included that code above for
// reference. A few things to keep in mind here:
//
// 1) This function can't take any parameters.
// 2) Instead of parsing 'weaponJSON', we'll need
//    to parse the 'responseText' member of the
//    request object.
// 3) You can access the request object inside
//    your 'onload' function by using the 'this'
//    keyword.

// YOUR CODE HERE
xhr.onload = function() {

    return parseJSON(this.responseText);

};

// Finally, we want to call the send method of the
// request object to actually send the request.
    xhr.send();
};


// 04 - LOADING SOUND //////////////////////////////////////////////////////////////////////


    // Create a new XMLHttpRequest, that GETs the
    // file '/media/js/standalone/libs/gamedev_assets/bg_menu.ogg'.
    //
    // To properly read this binary file, we'll need
    // to specify the responseType of the request as
    // an 'arraybuffer'.
    //
    // Doing this is necessary to work with any kind
    // of binary data, like sound files, rather than
    // text data.
    //
    // WARNING: If you don't specify a responseType
    // of 'arraybuffer', your browser will try to
    // interpret the sound file as text data. This
    // could cause your browser to slow to a crawl or
    // worse.
    //
    // Once you have done this, leave the request's
    // onload to the below function. This will play
    // the sound that you loaded.
    //
    // Don't worry if you don't understand what this
    // code does, we'll be going over it later!
    //
    // YOUR CODE HERE
    var soundRequest = new XMLHttpRequest();

    var setup = function() {
        // YOUR CODE HERE
        soundRequest.open("GET", "/media/js/standalone/libs/gamedev_assets/bg_menu.ogg", true);
        soundRequest.responseType = 'arraybuffer';

        soundRequest.onload = function () {

            try {
                var context = new webkitAudioContext();

                var mainNode = context.createGainNode(0);
                mainNode.connect(context.destination);

                var clip = context.createBufferSource();

                context.decodeAudioData(soundRequest.response, function (buffer) {
                    clip.buffer = buffer;
                    clip.gain.value = 1.0;
                    clip.connect(mainNode);
                    clip.loop = true;
                    clip.noteOn(0);
                }, function (data) {});
            }
            catch(e) {
                console.warn('Web Audio API is not supported in this browser');
            }
        };

        soundRequest.send();
    };


// 05 - ABSTRACTING - XMLHTTPRequests /////////////////////////////////////////////

// Fill out the provided xhrGet function to abstract
// out the functionality of performing an XMLHttpRequest
// GET request.
//
// The provided parameters are the URI to make the request
// to, the callback to call at onload, and the responseType,
// if necessary. If we don't need a special responseType,
// assume that that parameter is null.
//
// Now, we're going to assume that the callback takes the
// request object as a parameter, instead of taking no
// parameters.
//
// We've provided you modified versions of the previous
// two callbacks below. At the bottom of the file, we call
// xhrGet with both callbacks to help you with testing your
// code.

function xhrGet(reqUri, callback, type) {
    // YOUR CODE HERE
    var caller = xhrGet.caller;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", reqUri, true);

    if( type )
    {
        responseType = type;
    }

    xhr.onload = function() {
        if (callback)
        {
            try
            {
                callback(xhr);
            } catch(e) {
                throw 'xhrGet failed:\n' + reqUri + '\nException: ' + e + '\nresponseText: '+ responseText + '\ncaller: ' + caller;
            }

        }
        callback(xhr);
    };

    xhr.send();
}

parseJSON = function (xhr) {
    parsedJSON = JSON.parse(xhr.responseText);

    x = parsedJSON.frames.chaingun_impact.png.spriteSourceSize.x;
    console.log(x);
    return x;
};

playSound = function (xhr) {
    try {
        var context = new webkitAudioContext();

        var mainNode = context.createGainNode(0);
        mainNode.connect(context.destination);

        var clip = context.createBufferSource();

        context.decodeAudioData(xhr.response, function (buffer) {
            clip.buffer = buffer;
            clip.gain.value = 1.0;
            clip.connect(mainNode);
            clip.loop = true;
            clip.noteOn(0);
        }, function (data) {});
    }
    catch(e) {
        console.warn('Web Audio API is not supported in this browser');
    }
};

// Test code for you to run
var test = function() {
    xhrGet('/media/js/standalone/libs/gamedev_assets/weapon.json', parseJSON, null);
    xhrGet('/media/js/standalone/libs/gamedev_assets/bg_menu.ogg', playSound, 'arraybuffer');
};

//test();


// 06 - The DOM /////////////////////////////////////////////

    // EXAMPLE

        <html>
        <head>
            <title></title>
        </head>
        <body id="body">
        <form action="javascript:void(0);" id="exampleForm">
            <input type="password" id="examplePass" />
            <input type="submit" />
        </form>
        </body>
        <script>
        document.getElementById("exampleForm").onSubmit = function() {
            var passwordRegex = /^[A-Za-z\d]{6,8}$/;
            if( !passwordRegex.test(document.getElementById('examplePass').value) )
            {
                console.lo-g("Regex didn't match");
                var notify = document.getElementById("notify");
                if( notify === null )
                {
                    notify = document.createElement("p");
                    notify.textContent = "Password need to be between 6 and 8 characters long ...";
                    notify.id = "notify";

                    var body = document.getElementById("body");
                    body.appendChild(notify);
                }
            }
        };
        </script>
        </html>

    // QUIZ

        // 1) Grab the body DOM object and store it in
        //    a variable for later use. Assume that the
        //    body element has an id of 'body'.
        //
        // 2) Create a new div DOM object, and set its
        //    id to "gameContent".
        //
        // 3) Create a new canvas DOM object and set its
        //    id to "gameCanvas".
        //
        // 4) Attach the canvas DOM object to the div,
        //    and the div DOM object to the body.
        //
        // You'll need to use the document.getElementById,
        // document.createElement, as well as the
        // <DOM Object>.appendChild methods to accomplish
        // this. You'll also need to modify the id property
        // of the DOM objects you create.
        //
        var manipulateDOM = function() {
            // YOUR CODE HERE
            var body = document.getElementById("body");

            var div = document.createElement("div");
            div.id = "gameContent";

            var canvas = document.createElement("canvas");
            canvas.id = "gameCanvas";

            div.appendChild(canvas);
            body.appendChild(div);

        };


// 07 - Javascript & Inheritance /////////////////////////////////////////////

// 08 - Classes /////////////////////////////////////////////

    // EXAMPLE

    Weapon = Class.extend({
        init: function() {
            this._super();
        }
    });

    MachineGun = Weapon.extend({
        init: function() {
            this._super();
        }
    });

    // QUIZ

    // Create an inheritance tree using Class.extend() of the
    // following form:
    //
    // 1) Weapon should extend Class.
    //
    // 2) MachineGun should extend Weapon.
    //
    // 3) ChainGun should extend Weapon.
    //
    // 4) Entity should extend Class.
    //
    // 5) Teleporter should extend Entity.
    //
    // 6) EnergyCanister should extend Entity.
    //
    // We've started things off for you by doing steps
    // (1) and (2).

    Weapon = Class.extend({
        init: function() {
            this._super();
        }
    });

    MachineGun = Weapon.extend({
        init: function() {
            this._super();
        }
    });

    // YOUR CODE HERE

    ChainGun = Weapon.extend({  });

    Entity = Class.extend({  });

    Teleporter = Entity.extend({  });

    EnergyCanister = Entity.extend({  });