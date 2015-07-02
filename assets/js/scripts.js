(function($){

  // Start Highlight.js
  hljs.initHighlightingOnLoad();


  // Start fitvids
  $(".container").fitVids();

  //unwrap images
  $('p > img').unwrap('p');

})(jQuery);