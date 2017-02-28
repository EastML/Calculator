$(document).ready(function() {
  var num1 = 0;
  var num2 = 0;
  var operand = "+";
  
  function maths (a, b, sym) {
    num1 = eval(a + sym + b);
    num2 = 0;
    $('#output').text(num1);
  }
  
  $('.num').click(function() {
    if (num2 == 0) {
      num2 = $(this).text();
    } else {
      num2 += $(this).text();
    }
    $('#output').text(num2);
  });
  
  $('.operator').click(function() {
    maths(num1, num2, operand);
    operand = $(this).text();
    
    $('.operator').css('border-right', 'solid #555 5px');
    $('.operator').css('border-bottom', 'solid #555 5px');
    $(this).css('border-right', 'solid #DDD 2px');
    $(this).css('border-bottom', 'solid #DDD 2px');
  });
  
  $("#equals").click(function() {
    maths(num1, num2, operand);
  });
  
  $('#clear').click(function() {
    num1 = 0; 
    num2 = 0;
    operand = "+";
    $('#output').text(num1);
    
    $('.operator').css('border-right', 'solid #555 5px');
    $('.operator').css('border-bottom', 'solid #555 5px');
  });
});
