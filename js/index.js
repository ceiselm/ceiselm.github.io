$(document).ready(function () {
  $('#myModal').on('show.bs.modal', function (e) {
    var image = $(e.relatedTarget).children('img').attr('src');
    var header = $(e.relatedTarget).children('img').attr('alt');
    $(".img-responsive").attr("src", image);
    $(".caption-header").text(header);
  });
});

$(document).ready(function(){
  jQuery('.showSingle').click(function() {
    var tile = jQuery('#div' + $(this).attr('data-target'));
    var isVisible = tile.is(':visible');
    if (isVisible === true) {
      tile.hide();
    } else {
      jQuery('.targetDiv').hide();
      tile.show();
    }
  });
});
