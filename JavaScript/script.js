// CONSTANTS / VARIABLES
var body = $('body');
var button = $("#api_button");
var container = $("#output_container");
var imageOutput = $("#image_output");
var heading = $("h1");

// -----BODY-----
// body.css("background-color", "black");
body.css("color", "white");

function changeBackgroundImage(data){
    var image = data.url;
    body.css({
    backgroundImage: 'url(' + image + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",

    });
}

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    method: "GET",
    success: changeBackgroundImage
});

// ----TEXT SECTION----
heading.html("Welcome 1<sup>st</sup> API Testing!");
heading.css({
    color:"red",
    marginTop:"10px",
});

// ----IMAGE SECTION----
imageOutput.css({
    border:"2px solid dimgrey",
    borderRadius:"30px",
    width:"400px",
    height:"400px",
});

// ---BUTTON SECTION----
button.css({
    color:"red",
    opacity:"0.5",
    width:"100px",
    height:"100px",
    margin:"5%",
    marginTop:"10px",
    borderRadius:"30px",
    boxShadow: "0px 4px 20px",
});
button.mouseover(function(){
    button.css({
        backgroundColor:"transparent",
        border:"2px solid white",
        color:"lightgreen",
        transition:"0.3s",
        transform:"scale(1.1)",
    });
});
button.mouseout(function(){
    button.css({
        backgroundColor:"white",
        color:"red",
        transition:"0.3s",
        transform:"scale(1.0)",
    });
});


// Function For Fetching API
function fetchRandomDogImage(){

    button.css("background-color","green");

    // -------------JavaScript Syntax-----------------
    /* var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);   // This give JSON value on Console
        var JSON_Response = JSON.parse(xhrRequest.response);
        var imageURL = JSON_Response.message;
        imageOutput.attr('src', imageURL);
        imageOutput.css({
            boxShadow:"0px 10px 50px cyan",
        });
    };
    xhrRequest.onerror = function(){
        console.log("Request Failed!");
    };
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send(); */

    // --------JQuery Syntax------------
    /* $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data){
            var imageURL = data.message;
            imageOutput.attr('src', imageURL);
            imageOutput.css({
                boxShadow:"0px 10px 50px cyan",
            });
        },
    }).fail(function(){
        console.log('error');
    }); */

    $.get('https://dog.ceo/api/breeds/image/random', function(data){
         var imageURL = data.message;
         imageOutput.attr('src', imageURL);
         imageOutput.css({
             boxShadow:"0px 10px 50px cyan",
         });
    }).fail(function(xhr, textStatus, errorThrown){
        console.log("Request Failed!");
    });
}

button.on('click',fetchRandomDogImage);
