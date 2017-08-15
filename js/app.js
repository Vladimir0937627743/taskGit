var li = document.querySelectorAll("li");
var div = document.querySelectorAll(".characteristic");
for (var i = 0; i < li.length; i++) {
   (function(a,iterator){
           a.onclick = function() {
                 div[iterator].classList.add("active");
               div[iterator -1].classList.remove("active");
               div[iterator +1].classList.remove("active");
            }


   }(li[i], i));
}
//changesfor (var j = 0; j < li.length; j++) {
//li[j].classList.remove("active");
//}
//a.classList.add("active");
//}
//for (var d = 0; d < div.length; d++) {
//if (a != dic[d]) {
//    div[d].classList.remove("active");
//} else {
  //  div[d].classList.add("active");
//}
//}
//var li = document.querySelectorAll("li");
//li.onclick = function() {
//   alert("hello");
//};