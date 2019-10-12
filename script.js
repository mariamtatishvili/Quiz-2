//Task 1 --------------------------------------------------------------------------
function weatherBalloon( cityID ) {
  var key = '{bd76cd1b4ff74d18e6aff930f3644240}';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=611717&appid={bd76cd1b4ff74d18e6aff930f3644240}')  
  .then(function(resp) { 
    return resp.json() }) 
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
   console.log("Error");
})
}

 // window.onload = function() {
 // weatherBallon( 611717 );
 // }


function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}

function weatherBalloon( cityID ) {
  var key = '{bd76cd1b4ff74d18e6aff930f3644240}';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=611717&appid={bd76cd1b4ff74d18e6aff930f3644240}')   
  .then(function(resp) { 
    return resp.json() 
  }) 
  .then(function(data) {
    // drawWeather(data);
     window.localStorage.setItem('weather', JSON.stringify(data));
    console.log(localStorage);

  })
  .catch(function() {
    console.log("Error");
  });
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;



weatherBalloon();

window.localStorage.setItem('cityID', '611717');

var timer = window.setInterval(function()
{
   window.localStorage.getItem('weather');
JSON.parse(window.localStorage.getItem('weather'));
}, 1800000);



//Task 2 --------------------------------------------------------------------------
function randomFact() {
  
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.chucknorris.io/jokes/random";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4  &&  this.status == 200) {
      var json = JSON.parse(this.responseText);
      
      parseJson(json);
    }   
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
setInterval(function(){
        randomFact();
    },5000);

function parseJson(json) {
  
  var fact = "<b>" + json["value"] + "</b>";
  document.getElementById("chuckdata").innerHTML = fact;
}

