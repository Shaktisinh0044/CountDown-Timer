let enddate = " 1 JAN 2035 12:00"
document.getElementById("end-date").innerText = enddate;
let input = document.querySelectorAll("input");

function clock(){
  let end = new Date(enddate);
  let now = new Date();
  let diff = (end-now) /1000;

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff/3600) % 24;
  input[2].value = Math.floor(diff/ 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}
clock();

setInterval( () =>{
  clock()

},1000)






















