Product Display App
A React Native application that enables users to select a product, enter a pincode, and receive an estimated delivery date based on the associated logistics provider. The app handles large datasets efficiently, including 5000 products and 25000 pincodes, while maintaining responsive performance.
Setup Instructions

Here's the documentation you can paste into your README.md file:

Product Display App
A React Native application that enables users to select a product, enter a pincode, and receive an estimated delivery date based on the associated logistics provider. The app handles large datasets efficiently, including 5000 products and 25000 pincodes, while maintaining responsive performance.

Setup Instructions
Clone the Repository:
bash
git clone https://github.com/your-username/product-display-app.git
cd product-display-app
Install Dependencies:
bash
npm install
Run the Application:
To test locally on the web:
bas
npm run web
To run on a mobile device:
bash

npm start
Use the Expo Go app on your mobile device (iOS/Android) to scan the QR code and test.
Deploy to Vercel (Optional):

Follow Vercel's deployment instructions to deploy the application for web access.
Assumptions
Stock Availability: Approximately 80% of products are assumed to be "in stock."
Provider Rules:
Provider A: Same-day delivery for orders placed before 5 PM, if the product is in stock.
Provider B: Same-day delivery for orders placed before 9 AM; next-day delivery otherwise.
General Partners: Delivery within 2-5 days based on the pincode’s regional classification (metro, non-metro, or tier 2-3 cities).
Countdown Timer: A countdown timer shows the remaining time for qualifying for same-day delivery with Providers A and B.
Key Design Decisions
Efficient Data Handling:

Product and pincode data are managed and optimized for high performance, enabling efficient handling of large datasets.
Responsive UI:

The application’s interface is designed responsively, ensuring usability across devices of varying screen sizes.
Modular Architecture:

Each feature, such as ProductList, PincodeInput, and DeliveryEstimate, is organized into modular components for maintainability and reuse across the app.

