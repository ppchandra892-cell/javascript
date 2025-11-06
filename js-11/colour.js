function oncolour(){
    //alert("test122")
    /* document.getElementById("chnadu");
    console.log(ref); */
 /*    ref.innerHTML="gn";
    ref.style.backgroundColor="yellow"; */
    document.getElementById("chandu").style.backgroundColor="Blue";
}
function oncolour1(){
    document.getElementsByTagName("button")[1].style.backgroundColor="Yellow"
}
function oncolour2(){
    document.querySelector(".btn1").style.backgroundColor="Yellow"
}
function colour1(){
    document.getElementsByClassName("btn2")[0].style.backgroundColor="Yellow"
}
function onfocusex(){
    document.getElementById("frm1").style.backgroundColor="Blue"

}
function onblurex() {
  let name = document.getElementById("frm2").value;
  document.getElementById("frm2").value = name.toUpperCase();
}
/* function onblurex() {
  let ref = document.getElementById("frm2");
  ref.value = ref.value.toUpperCase();
} */

