// business logic
let groceryList = [];
let groceryListUpper = [];

// user interface logic
$(document).ready(function() {
  $("#grocery-items").submit(function(event) {
    $(groceryList).push("#item1");
    $(groceryList).push("#item2");
    $(groceryList).push("#item3");
    $(groceryList).push("#item4");
    $(groceryList).push("#item5");
    console.log(groceryList);

    groceryList.sort();
    console.log(groceryList);

    groceryList.forEach(function(event) {
      event.toUpperCase();
      console.log(groceryList);
    });
  });
});
      

