# [FSJ01] Project: Challenge 1

# Project Overview
This project is an e-commerce store built using Next.js with server-side rendering (SSR). The store allows users to browse products, view detailed product information, and navigate between pages with ease. The project makes use of the Next E-commerce Store API to fetch product data. The project is styled using Tailwind CSS and includes features like loading skeletons, responsive design, and carousel for product images.

# Project Brief
The project is based on Next.js and follows the structure and requirements outlined in Challenge 1.
It integrates with the Next E-commerce Store API to fetch product data, categories, and reviews.
The solution is developed using Next.js with JSDoc documentation for functions and components.
The project code and changes are committed to a GitHub repository following the naming convention: StudentNo_Classcode_Group_Name-Surname_FSJ01.
The project includes detailed documentation and instructions for setting up the project, and technologies used.
The application has been tested for bugs and improvements, ensuring a seamless user experience.

# Technologies Used
- Next.js: A React-based framework for building server-rendered applications with built-in routing and API capabilities.
- Tailwind CSS: A utility-first CSS framework for rapid UI development and customization.
- Next E-commerce Store API: The external API used to fetch product data, reviews, and other necessary resources.

### The following API endpoints from the Next E-commerce Store API are utilized in this project:
- GET /products: Fetch a paginated list of products with optional query parameters for skip and limit.
- GET /products/: Fetch detailed information for a specific product including its reviews and images.

## Usage Examples
- Product Browsing: Users can browse through a list of products with pagination. Product data is fetched from the Next E-commerce Store API.
- Product Details: Users can click on a product to view detailed information, including price, description, and customer reviews. The product detail page includes a carousel for images and dynamic content.
- Loading States: Skeleton loaders are displayed while product data is being fetched, ensuring a smooth user experience.
- Pagination: The user can navigate through multiple pages of products using the previous/next buttons, and data is fetched on the server before being rendered.
- Error Handling: The application gracefully handles API errors and notifies users if there is an issue fetching product data.

## Set Up Instructions
To set up and run this project locally:

- Clone the Repository: Clone this repository to your local machine 
- Install Dependencies: npm install
- Run the Development Server: npm run dev
- Access the Application: Open your browser and navigate to http://localhost:3000 to access the e-commerce store.
- API Integration: The project is pre-configured to connect with the Next E-commerce Store API. Ensure you have an active internet connection to fetch data from the external API.