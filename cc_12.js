//task 1: business dashboard - DOM element selection 
const dashboardId = document.getElementById("dashboard"); //selecting dashboard container
const dashboardQuery = document.querySelector("#dashboard"); //selecting dashboard container 
const revenueCard = document.createElement("div"); //creating an element to represent a metric card
revenueCard.setAttribute("class", "metric-card");  //assigning class to this element 
revenueCard.setAttribute("id", "revenue-card");  //assigning id to this element 

revenueCard.innerHTML = `<h3>Revenue</h3> <p>$ 0 </p>`; //title and placeholder value
dashboardId.appendChild(revenueCard); //appending the metric card to the dashboard container

//task 2: updating dashboard metrics - working with nodelists and arrays 
const metricCards = document.querySelectorAll(".metric-card"); //selects all the elements with this class
const metricCardsArray = [...metricCards]; //converts NodeList into an array
metricCardsArray.forEach(card => {card.innerText += " - Updated"; card.style.backgroundColor = `pink`;}) 
//an array method that updates the card's text and color

//task 3: dynamic inventory management - adding and removing items
const inventoryList = document.getElementById("inventoryList");
function addInventoryItem(productName)
{
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "product-item"); //adding a class 
    newItem.innerHTML = `${productName}`; //appending a new product to the inventory list 
    inventoryList.appendChild(newItem);
    newItem.addEventListener("click", (event) => {inventoryList.removeChild(newItem);}); 
}//when clicked this function will remove a speciifc <li> 

