$("#btnMore1").on('click', function(e) {
  $("#more1").collapse("show");
  $("#btnLess1").show();
  $(this).hide();
  e.preventDefault();
});

$("#btnMore2").on('click', function(e) {
  $("#more2").collapse("show");
  $("#btnLess2").show();
  $(this).hide();
  e.preventDefault();
});

$("#btnLess1").on('click', function(e) {
  $("#more1").collapse("hide");
  $("#btnMore1").show();
  $(this).hide();
  e.preventDefault();
});


$("#btnLess2").on('click', function(e) {
  $("#more2").collapse("hide");
  $("#btnMore2").show();
  $(this).hide();
  e.preventDefault();
});