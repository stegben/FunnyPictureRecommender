// popup.js
$(function(){
  console.log('popup');
    
  $(".funnyPic").click(function(){
    console.log("clicked");

    // change url
    var url = "chrome-extension://obcibjhblhobgcdaaehocjokmahpppdd/images/image" 
      + $(this).attr("index") 
      + ".jpg";
    $("#picUrl").val(url);

    // navigate to preview
    $(".previewPic").attr("src", url);
    
    $(".previewPic").load(function(){

      var w = $(".previewPic").outerWidth();
      if(w > 800){

        w = 800;
        $(".previewPic").css("width", 800);
        
      }
      console.log("w: " + w);
      $("html").animate({
        width: w
      }, 200, function(){});
      $("body").animate({
        width: w
      }, 200, function(){});
      $(".carousal").animate({
        marginLeft: "-350px",
        width: w+350
      }, 200, function(){});

    });
    

  });
});