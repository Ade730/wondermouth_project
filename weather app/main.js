function submit() {
  // alert('hiiii');
  const searchbox = $("#search").val();
  const weathericon = $("#weather-icon").val();
  const apikey = "9dcc48a308ec20b11ae10538bff3c429";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchbox}&appid=${apikey}`;

  $.ajax({
    type: "GET",
    url: apiurl,
    data: {},
    dataType: "json",
    success: function (response) {
      console.log(response);

      $('#city-name').html(response.name);
      $('#temperature').html(response.main.temp+ "°C");
      $('#humdity').html(response.main.humidity + "%")
      $('wind').html(response.wind.speed+ "%")
    

    if (response.weather[0].main == "Clouds") {
                weathericon.src = "images/clouds.png"
            } else if (response.weather[0].main == "Clear") {
                weathericon.src = "images/clear.png"
            } else if (response.weather[0].main == "Rain") {
                weathericon.src = "images/rain.png"
            }else if (response.weather[0].main =="Drrizle"){
                weathericon.src ="images/drizzle.png"
            }else if (response.weather[0].main ==" Mist"){
                weathericon.src ="images/mist.png"
            }
        }
  });
}
