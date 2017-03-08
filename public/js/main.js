$(document).ready(function() {
    jsonToList();


});
// This does not work
// $('#calculator  li a').on('click', function() {
//     console.log($(this).text());
// });
//(function(){
  const $calculator = $('#calculator .dropdown a');
  $calculator.on('click', function() {
      //console.log($(this).text());
      console.log($(this).text());
  });
  $('h1').on('click', function() {
      console.log($(this).text());

      });

// }());
// This works
