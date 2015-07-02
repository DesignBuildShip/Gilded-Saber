(function($){

  // Start Highlight.js
  hljs.initHighlightingOnLoad();


  // Start fitvids
  $(".container").fitVids();

  //unwrap images
  $('img').unwrap('p');

})(jQuery);