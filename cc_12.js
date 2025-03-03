//task 1: business dashboard - DOM element selection 
const dashboardId = document.getElementById("dashboard"); //selecting dashboard container
const dashboardQuery = document.querySelector("#dashboard"); //selecting dashboard container 
const revenueCard = document.createElement("div"); //creating an element to represent a metric card
revenueCard.setAttribute("class", "metric-card");  //assigning class to this element 
revenueCard.setAttribute("id", "revenue-card");  //assigning id to this element 

revenueCard.innerHTML = `<h3>Revenue</h3> <p>$ 0 </p>`; //title and placeholder value
dashboardId.appendChild(revenueCard); //appending the metric card to the dashboard container