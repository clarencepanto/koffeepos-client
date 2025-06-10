# Project Title

KoffeePOS

## Overview

A simple BOM (Bill of Materials) POS for small time coffee shop that tracks inventory and updates real time, summarizes data by end of the day, POS UI that will flag unavailable, updates the product quantity based on current ingredients and can order supplies and ingredients/utilites that is needed. For mobile version, It allows staff/manager to use their phones to update the inventory manually if needed without going to the actual computer itself.

### Problem

For every coffee shop I've been to, to update inventory, staff/manager they always go to the computer to update. What if the stock/supplies is on the back of the store? Is it necessary to walk back and fourth to update the items? Also, if manager forgot to send the order, is it worth the hassle to call the owner, open the store and send the order from the computer?. Furthermore, I see a common problem where a customer orders product , clerk/barista prepares the product, and stops midway because they did not have this key ingredient to make that product. Isn't it convenient to know if we have that product available from the getgo?

### User Profile

Store Managers:
looking to access ordering from home - (mobile feature)
looking to Update the Inventory using Mobile/Phones (without walking back and fourth) - (mobile feature)
that looks for a summary page of the products and the revenue
that wants to know if products is available from the getgo
adds new products with ease - (mobile feature)

Regular Staff:
looking to Update the Inventory using Mobile/Phones (without walking back and fourth) - (mobile feature)
that wants to know if products is available from the getgo
adds new products with ease - (mobile feature)

### Features

- As a logged in store manager, I want to have notifications sent when stocks are low or expiring soon
- As a logged in store manager, I want to be able to order from home from my phone
- As a logged in store manager, I want to be able to update, add, delete without going to my computer
- As a logged in store manager, I want to be able to see the available products right away and update the customers (POS)
- As a logged in store manager, I want to be able to see the summary for revenue, products and wasted/expired products
- As a logged in store manager, I want to be able to see the list of ingredients , products and product details (how they are made? from which ingredients)

- As a logged in regular staff, I want to be able to see the available products right away and update the customers (POS)
- As a logged in regular staff, I want to be able to update, add, delete without going to my computer
- As a logged in regular staff, I want to be able to see the list of ingredients , products and product details (how they are made? from which ingredients)

## Implementation

### Tech Stack

- React
- Javascript
- MySQL
- Express

- Client libraries:
  - react
  - react-router
  - axios
    -Toastify (notifications)
- Server libraries:
  - knex
  - express
  - axios
  - JWT-based authentication (JSON Web Tokens)
    -Toastify (notifications)

### APIs

Will be creating a fake api for supplier/ordering page

### Sitemap

(Desktop)

- Login (Authentication Page)
- POS page (MAIN)
- Product List Page
- Ingredients List Page
- Summary Page
- Order/Supplier Page

(Tablet/Mobile)

- Login (Authentication Page)
- Summary Page (MAIN)
- Product List Page
- Ingredients List Page
- Order/Supplier Page

### Mockups (Provided)

### Data (Provided)

### Endpoints

**GET /products** shows list of products
**GET /products/:id** shows a single product that has same id
**POST /products/add** shows a single product that has same id
**PATCH /products/:id/update** updates a single product that has same id
**DELETE /products/:id/remove** delete a single product that has same id

**GET /ingredients** shows list of ingredients
**Patch /ingredients/:id** updates ingredients

### Auth(Will learn JWT and add it here)

## Roadmap (Will start from server and finish on the frontend, (mobile view to desktop view))

Will provide more details soon

## Nice-to-haves

AI powered? Can predict the waste, profit , growth of the coffee shop
