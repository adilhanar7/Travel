$(document).ready(function() {
    $('#accordeon .Stories__link').on('click', f_acc);
});
  function f_acc(){
    $('#accordeon .text').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);
}