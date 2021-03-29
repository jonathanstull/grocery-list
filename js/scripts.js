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

    groceryListUpper.push(groceryList[0].toUpperCase());
    groceryListUpper.push(groceryList[1].toUpperCase());
    groceryListUpper.push(groceryList[2].toUpperCase());
    groceryListUpper.push(groceryList[3].toUpperCase());
    groceryListUpper.push(groceryList[4].toUpperCase());

    console.log(groceryListUpper);
  });
});
      

