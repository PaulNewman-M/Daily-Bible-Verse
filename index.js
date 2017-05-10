
  $(document).ready(function() {
    $("#Message").on("click", function(){
     $("#target").fadeOut(400).fadeIn(400);
    //  $(".message").html("Here is the message ");
     
    });
  });

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function (){

  
  showText("#target1", "-by Paul Newman Mekala", 0, 500);   

});

$('button').click(function(){
  randomQuote();
});
function randomQuote() {
  // Animation for disply name.
  
      $("#target1").toggle("");
  $("#target1").toggle("");
  //hid();
var $target= $("#target");
 var $tweet= $("#tweet"); 
  $.ajax({
    
      url: "http://labs.bible.org/api/?passage=random&type=json&formatting=plain&callback=?",
     dataType: "jsonp",
     // data: "lang=en",
      success: function( response) {
        var v=response[0].text;
        
       var text =v.replace("&copy;NET",""); 
       
       
        $target.html("<h4 id='my' class='text-center'>" +
        text + "</h4><p id='para'><br>&dash; " + response[0].bookname +":"+response[0].chapter+"-"+response[0].verse + "</p> <br>      ");
        
      }  
  });
}
   function changeLink(){
       var textToTweet=$("#my").text()+ ' (' + $("#para").text()+')';
     var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
 window.open(tweetLink,'_blank');
   }
 function changeMail(){
       var textToTweet=$("#my").text()+ ' (' + $("#para").text()+')';
     var tweetLink = "https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&su=Daily-Bible-Verse&body=Hi Name,%0a%0a%0a" + encodeURIComponent( textToTweet +"");
 window.open(tweetLink,'_blank');
   }
function changePost(){
       var textToTweet=$("#my").text()+ ' (' + $("#para").text()+')';
     var tweetLink = "https://www.facebook.com/sharer/sharer.php?u=google.com" + encodeURIComponent(textToTweet);
 window.open(tweetLink,'_blank');
   }

/*
 src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">

$(function() {
    var json_url = "http://labs.bible.org/api/?passage=random&type=json&callback=?";

    $.getJSON(json_url, function(json_response) { 
        for(var i = 0; i < json_response.length; i++) {
            alert(json_response[i].text);
        }
    });
});
*/
