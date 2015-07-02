(function($){

  // Start Highlight.js
  hljs.initHighlightingOnLoad();


  // Start fitvids
  $(".container").fitVids();

  //unwraps
  $('p > img').unwrap();
  $('p > cite').unwrap();

})(jQuery);