"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
(0, apiSimulator_1.fetchProductCatalog)()
    .then(products => {
    console.log("Products:", products);
    products.forEach(product => {
        console.log(`Product ID: ${product.id}, Name: ${product.name}`);
        (0, apiSimulator_1.fetchProductReviews)(product.id)
            .then(reviews => {
            console.log("Reviews for," + "product.name");
        })
            .catch(error => {
            console.error(`Error fetching reviews for ${product.name}:`, error);
        });
        (0, apiSimulator_1.fetchSalesReport)()
            .then(reviews => {
            console.log("Here is the Sales Report:", report);
        })
            .catch(error => {
            console.error("Error fetching the Sales Report:", error);
        });
    })
        .catch(error => {
        console.error("Error occurred:", error);
    });
});
/* Part 3: Build the Main Application Logic
Create an index.ts file to contain the main logic of your application.

Write a Function to Handle API Calls and Display Data:

Use fetchProductCatalog() to fetch product details and display them.
For each product, fetch the reviews using fetchProductReviews(productId).
After fetching products and reviews, retrieve the sales report using fetchSalesReport().
Implement Error Handling Using Promises:

Use .catch() to handle any errors from fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().
Display error messages to the console if any of the calls fail.
Use .finally() to log a message indicating that all API calls have been attempted. */ 
