$(function(){

  console.log("jquery");
  bindPreviewHover();  

});

var bindPreviewHover = function(){

  if($(".linkPreview").length > 0){
    $(".linkPreview").hover(function(){
      console.log("hover in");
    }, function(){
      console.log("hover out");
    });  
  }
  else{
    window.setTimeout(bindPreviewHover, 1000);
  }

}

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
    case "colors-div":
      
      break;
  }
});