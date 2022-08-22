const hour1 = document.getElementById("hours")
const min1 = document.getElementById("minutes")
const sec1 = document.getElementById("second")
const appm1 = document.getElementsByClassName("ampm")
function updateclock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm1;
  if(hour1>= 12){
  h=hour1-12
  ampm1="AM"
  }
  else
  {
    ampm1="PM"
  }
  h= h> 12 ? h% 12 : h
  h=h<10 ? "0"+h : h
  m=m<10 ? "0"+m : m
  s=s<10 ? "0"+s : s

  hour1.innerText= h
  min1.innerText= m
  sec1.innerText = s
  ampm1.innerText = ampm1
  setTimeout(()=>
  {
    updateclock()
  },1000)
}
updateclock();
