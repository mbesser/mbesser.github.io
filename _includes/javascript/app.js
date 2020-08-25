$(document).ready(function() {
  // remove navigation overlay when a link is clicked
  $('.navigation-list__item').click(function() {
    if ($('.navigation__toggle').prop("checked", true)) {
      $('.navigation__toggle').removeAttr("checked");
    }
  });
})


// Hide and show site navigation on scroll
// ---------------------------------------
// Author: Hunter Chang 
// Source: https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm

let scrollPos = 0;
const nav = document.querySelector('.site__header');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }
  scrollPos = windowY;
}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));

// Encrypt email address
function UnCryptMailto(s, shift) {
  var n=0;
  var r="";
  for(var i=0;i<s.length;i++) {
    n=s.charCodeAt(i);
    if (n>=8364) {n = 128;}
    r += String.fromCharCode(n-(shift));
  }
  return r;
}
function linkTo_UnCryptMailto(s, shift)	{
  location.href=UnCryptMailto(s, shift);
}