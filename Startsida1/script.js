



// här börjar richards kod

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function () {

  showPopup();
  // setTimeout(function(){
  //   loginPopup.classList.add("show");
  // },5000)

})


function showPopup() {
  const timeLimit = 1; // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i)
  }, 1000);
}


close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
})
function showModal() {
  // get value from localStorage
  var is_modal_show = sessionStorage.getItem('alreadyShow');
  if (is_modal_show != 'alredy shown') {
    $("#popup").show()
    sessionStorage.setItem('alreadyShow', 'alredy shown');
  } else {
    console.log(is_modal_show);
  }
}
