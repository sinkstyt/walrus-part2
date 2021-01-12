// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#go-dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });

  $("button#go-light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });
});