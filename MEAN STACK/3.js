let callajax = () => {
   let cityname =  $("#textid").val() ||"nashik";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityname;

  $.ajax(url).done((data) => {
    
$("#m1");
    $("#m1 :nth-child(1)")
  .clone(true)
  .html(data.name + " " + data.main.temp_max);
   .insertBefore($("#m1 :nth-child(1)"));

  });
};
