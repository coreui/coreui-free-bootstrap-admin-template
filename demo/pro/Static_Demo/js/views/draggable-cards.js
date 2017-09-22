$(function(){
  var element = "[class*=col]";
  var handle = ".card-header";
  var connect = "[class*=col]";
  $(element).sortable({
    handle: handle,
    connectWith: connect,
    tolerance: 'pointer',
    forcePlaceholderSize: true,
    opacity: 0.8,
    placeholder: 'card-placeholder'
  })
  .disableSelection();
});
