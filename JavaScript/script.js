// CONSTANTS / VARIABLES
var body = $('body');
var button = $("#api_button");
var container = $("#output_container");
var imageOutput = $("#image_output");
var heading = $("h1");

// -----BODY-----
body.css("background-color", "black");
body.css("color", "white");

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
    width:"150px",
    height:"150px",
    margin:"5%",
    marginTop:"10px",
    borderRadius:"30px",
});
button.mouseover(function(){
    button.css({
        backgroundColor:"black",
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
