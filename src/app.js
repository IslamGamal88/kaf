// // Get all <li> elements
// var listItems = document.querySelectorAll(".nav-list li");

// // Add click event listener to each <li> element
// listItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     // Remove 'text-primary' class from all <i> and <span> elements
//     listItems.forEach(function (li) {
//       var icon = li.querySelector("i");
//       var text = li.querySelector("span");
//       icon.classList.remove("text-primary");
//       text.classList.remove("text-primary");
//     });

//     // Add 'text-primary' class to <i> and <span> elements of clicked <li>
//     var icon = this.querySelector("i");
//     var text = this.querySelector("span");
//     icon.classList.add("text-primary");
//     text.classList.add("text-primary");
//   });
// });
const li = document.querySelector(
  ".nav-list li['data-testid]=contacts'"
);

li.addEventListener("click", function () {
  alert("Hello World");
});
