//var c=2;
//document.write("c")
//document.getElementById("demo").innerHTML=
//typeof 3.14+
//typeof [1,23,4]+"br"+
//typeof{name:"john"}
//var person={firstname:"john",lastname:"DOe",id:"5566"}
//document.write(person.firstname)
//document.write(person["firstname"])
function Myfunction(){
var x=" ";
//var time=new Date().getHours();
//if (time<20){
//x="GOOD"}
/*有for\for in\switch\while\do while,无论哪种都是在function中运行的。
break\continue; typeof\类型转换\正则表达式，这些用的时候再查，回去看看B站讲解视频。*/

var d=new Date().getDay();
switch (d)
{
  case 0:x="今天是星期日";
  break;
  case 1:x="今天是星期一";
  break;
  case 2:x="今天是星期二";
  break;
  case 3:x="今天是星期三";
  break;
  case 4:x="今天是星期四";
  break;
  case 5:x="今天是星期五";
  break;
  case 6:x="今天是星期六";
  break;
  default:
  x="天啊，我不知道";
}
document.getElementById("demo").innerHTML=x}
for (var;i;)