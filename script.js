for (let i = 0; i < 4; i++) {
    $('#container').append(`<div class="row">
    </div> `);
  }
  
  for (let i = 0; i < 4; i++) {
    $('.row').append(`<div class="boxes">
    </div> `);
  }
  
  
  //Change colors 
  $( "#container" ).on( "click", ".boxes", function() {
      if($(this).css("background-color") == "rgb(0, 0, 0)"){
         $(this).css("background-color", "gray");
      }else{
        $(this).css("background-color", "black");
      }
  });