function menuToggle() {
  
    var x = document.getElementById('myNavToggle');
    if (x.className === 'navtoggle')
      x.className += ' responsive';
    else
      x.className = 'navtoggle';
  };
  
  /*
  $(document).ready(function() {
    $('.fade').css('display', 'none');
    // $(".fade").fadeIn(500);
    $('.fade').fadeTo(2000, 1);
  });
  */
  
  // rounded box
  // <script type="text/javascript"> $(document).ready(function(){ $("div.roundbox").wrap(' <div class="roundedbox">'+ ' <div class="bd">'+ ' <div class="c">'+ ' <div class="s">'+ ' </div>'+ ' </div>'+ ' </div>'+ '</div>'); }); </script>
  
  // console.log("Welcome to my portfolio site!");