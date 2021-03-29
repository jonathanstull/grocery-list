// business logic

// user interface logic
$(document).ready(function() {
  $("#grocery-items").submit(function(event) {
    event.preventDefault();
    
    let groceryList = [];
    let groceryListUpper = [];

    groceryList.push($("#item1").val());
    groceryList.push($("#item2").val());
    groceryList.push($("#item3").val());
    groceryList.push($("#item4").val());
    groceryList.push($("#item5").val());

    console.log(groceryList);

    groceryList.sort();

    console.log(groceryList);



    // groceryList.forEach(function(event) {
    //   event.toUpperCase();
    //   console.log(groceryList);
    // });
  });
});
      

