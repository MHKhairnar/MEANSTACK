let callajax = () => {
  let cityname = "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityname;

  $.ajax(url).done((data) => {
    console.log(data);
    mydom(data);
  });
};

let mydom = (data) => {
  const parent = document.querySelector("#m1");
  const newelement = parent.children[0].cloneNode(true);
  newelement.innerHTML = data.name + " " + data.main.temp_max;
  parent.insertBefore(newelement, parent.firstChild);
};
