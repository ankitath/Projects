
$("#equal").click(function(){
    $(".display").val(eval($(".display").val()));
});

  $('.num-operator').click(function(){
    var v=$(this).val();
    var total = $(".display").val($('.display').val()+v);
  });

  $(".clear").click(function(){
      $(".display").val('');
  });

  
