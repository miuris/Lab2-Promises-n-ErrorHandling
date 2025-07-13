import { rejects } from "assert"

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
export const fetchProductReviews = (productId: number): Promise<{ productId: number, isGood: boolean }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId: productId, isGood: true },
                ]);
            } else {
                reject("Failed to fetch reviews for product ID " + productId);
            }
        }, 1500);
    });
};
export const fetchSalesReport = (): Promise<{ totalSales: number, unitsSold: number, averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(
                    { totalSales: 50.00, unitsSold: 30, averagePrice: 10.00 },
                );
            } else {
                reject("Failed to fetch the sales report.");
            }
        }, 1000);
    });
};







/* function fetchProductCatalog

function fetchProductReviews

function fetchSalesReport */




/* This file will contain functions that simulate API requests using Promises.
Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message. */