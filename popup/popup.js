// popup.js
$(function(){
    console.log('popup');
    
    $(".funnyPic").click(function(){
        console.log("clicked");
        var url = "www.blah.com/funnyPic" + $(this).attr("index");
        $("#picUrl").val(url);


    });
});