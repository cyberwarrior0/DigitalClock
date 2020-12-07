function digitalclock()
{
    var date =new Date();
    var hours=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var day=date.toDateString();
    var am_pm="AM";
  if (hours>12)
  {
    hours-=12;
    am_pm="PM";
  }
  if (hours==0)
  {
    hours=12;
  }
  
  hours=(hours<10) ? "0"+hours: hours;
  min=(min<10) ? "0"+min: min;
  sec=(sec<10) ? "0"+sec: sec;

    document.getElementById("h").innerHTML=hours;
    document.getElementById("m").innerHTML=min;
    document.getElementById("s").innerHTML=sec;
    document.getElementById("day").innerHTML=day;
  document.getElementById("am_pm").innerHTML=am_pm;
   

    setTimeout(digitalclock,500)

}
digitalclock();
    