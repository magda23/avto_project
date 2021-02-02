$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
  .prev()
  .find("i:last-child")
  .toggleClass("fa fa-caret-up fa fa-caret-down");
   });