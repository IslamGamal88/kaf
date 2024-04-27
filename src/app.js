const getCurrentActiveListItem = () =>
  $(".nav-list li:has(span.text-primary)");

const unselectActiveListItem = () => {
  const currentActiveListItem = getCurrentActiveListItem();
  if (currentActiveListItem.length) {
    currentActiveListItem.children().each(function () {
      $(this).removeClass("text-primary").addClass("text-grey-300");
    });
  }
};

const selectActiveListItem = (element) => {
  $(element)
    .children()
    .each(function () {
      $(this).removeClass("text-grey-300").addClass("text-primary");
    });
};

const listItemClickHandler = (event) => {
  unselectActiveListItem();
  selectActiveListItem(event.currentTarget);
};

$(".nav-list li").on("click", listItemClickHandler);
