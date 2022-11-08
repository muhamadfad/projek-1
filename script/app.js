



const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function () {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function () {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("wrapper").style.top = "0";
  } else {
    document.getElementById("wrapper").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


//membuat scroll bar dengan arrow
var button = document.getElementById('slide');
button.onclick = function () {
  var container = document.getElementById('galery');
  sideScroll(container, 'right', 10, 100, 10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
  var container = document.getElementById('galery');
  sideScroll(container, 'left', 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 10;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
