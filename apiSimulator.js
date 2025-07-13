"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId: productId, isGood: true },
                ]);
            }
            else {
                reject("Failed to fetch reviews for product ID " + productId);
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 50.00, unitsSold: 30, averagePrice: 10.00 });
            }
            else {
                reject("Failed to fetch the sales report.");
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
/* function fetchProductCatalog

function fetchProductReviews

function fetchSalesReport */
/* This file will contain functions that simulate API requests using Promises.
Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message. */ 
