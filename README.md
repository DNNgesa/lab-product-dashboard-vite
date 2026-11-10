# Lab: Product Dashboard Manager

## Project Description
This repository contains a clean, beginner-friendly e-commerce product catalog dashboard built with React, Vite, and CSS Modules. The dashboard dynamically renders a collection list of product data inventory, filters active cards dynamically by availability status, and implements an interactive administrative removal mechanism. 

---

## Setup Instructions

### Prerequisites
Make sure you have [Node.js] and npm installed on your machine before running local setup commands.

### Local Installation Steps
1. **Clone the Repository**
   Fork this assignment repository to your personal GitHub workspace, then clone it to your device using your terminal:
   ```bash
   git clone https://github.com/DNNgesa/lab-product-dashboard-vite
   cd lab-product-dashboard-vite
   ```

2. **Install Project Dependencies**
   Download all verified structural frameworks, layout assets, and testing libraries mapped inside your configuration files:
   ```bash
   npm install
   ```

3. **Launch the Local Development Server**
   Boot up the Vite compiler to view your product dashboard layout live inside your web browser:
   ```bash
   npm run dev
   ```
   *Copy and open the link provided in your terminal output (usually `http://localhost:5173/`) inside your web browser.*

4. **Verify Interactive Features**
   * Click on the **In Stock** or **Out of Stock** top buttons to filter your active cards view cleanly by current item availability.
   * Click the red **Remove** action button at the bottom of any item card to delete that product completely from your screen layout track.

---

## Instructions for Running the Tests

This project uses **Vitest** paired with **React Testing Library** and **jsdom** to simulate user gestures, evaluate card statuses, and verify core layout states within a headless terminal sandbox environment.

### Command Execution Instructions
Run this direct command in your terminal window to execute your local unit tests:
```bash
npm run test
```

### What the Test Suite Evaluates:
1.  **Title Rendering Verification**: Confirms that your template header accurately renders a `"Product Dashboard"` title onto the screen view.
2.  **Dataset Mounting Verification**: Confirms that the initial state array hooks successfully mount all initial item nodes (`Laptop`, `Phone`, `Tablet`) onto your document layout.
3.  **Conditional Style Assessment**: Asserts that out-of-stock items successfully receive the explicit `'outOfStockClass'` style indicator tag on their container `<div>`.
4.  **Mechanical Removal Tracking**: Simulates a user click on your card buttons, confirming that the tool correctly deletes the item card array instance cleanly from your live layout view.
