/**
 * Picture features testing
 *
 * @requires mocha
 *
 */
"use strict";

var NodeWebcam = require( __dirname + "/../index.js" );

var Async = require( "async" );

var Features = [
    {
        name: "Grayscale",
        options: {
            greyscale: true
        }
    },
    {
        name: "Rotation",
        options: {
            rotation: "50"
        }
    },
    {
        name: "Saturation",
        options: {
            saturation: "100%"
        }
    },
    {
        name: "Clean",
        options: {}
    }
];


//Main test sequence

describe( "Webcam Features", function() {


    //feature test setup

    featureTest();

});


function featureTest() {

    Async.map( Features, captureFeature );

    function captureFeature( feature, callback ) {

        it( "Should use Feature " + feature.name, function( itCallback ) {

            this.timeout( 6000 );

            var Webcam = NodeWebcam.create( feature.options );

            var url = __dirname + "/output/feature_" + feature.name;

            Webcam.capture( url, function() {

                callback();

                itCallback();

            });

        });

    }

}
