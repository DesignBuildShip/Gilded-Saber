(function($){

  // Start Highlight.js
  hljs.initHighlightingOnLoad();


  // Start fitvids
  $(".container").fitVids();

  //unwraps
  $('p > img').unwrap();
  $('blockquote + p > cite').unwrap();

})(jQuery);