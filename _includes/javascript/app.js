$(document).ready(function() {

  // remove navigation overlay when a link is clicked
  $('.navigation-list__item').click(function() {
    if ($('.navigation__toggle').prop("checked", true)) {
      $('.navigation__toggle').removeAttr("checked");
    }
  });

  // responsive headlines
  $('.post__title').fitText(1.2, {
    minFontSize: '36px',
    maxFontSize: '112px' });
});
