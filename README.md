# E-Commerce API by Aman
This is an e-commerce API that allows you to view products, update product quantities, and delete products.

# Live url of api  https://e-commerce-api-by-aman.onrender.com/
# step how to use it 
# type https://e-commerce-api-by-aman.onrender.com/product  in browser to see product list
# type https://e-commerce-api-by-aman.onrender.com/{product id}/quantity/{enter the number u want to set }  to update product quantity.

# Setup Instructions
Step 1: Clone the Repository
Clone this repository to your local machine using Git:

bash
Copy code
git clone https://github.com/AmanMalviya22/e-commerce-by-aman
Step 2: Configure Database (Optional - Local Database)
If you prefer to use a local MongoDB database instead of the default remote database, follow these steps:

a. Open .env File
Navigate to the project directory and open the .env file.

b. Update MongoDBURL
Change the MongoDBURL from the default remote URL to the local MongoDB URL:



# MongoDBURL=mongodb://127.0.0.1:27017/test
Step 3: Start the API Server
Run the following command to start the API server:

node index.js
Step 4: Test the API Using Postman

Open Postman.

Set the URL to localhost:8000/product.

In the body section, add the following parameters:

Key: product name
Value: [Name of the product]
Key: product quantity
Value: [Quantity of the product]
Set the HTTP method to POST.

Click the "Send" button to create a new product.

# Update Product Quantity:
In Postman, set the URL to localhost:8000/product/{product_id}/quantity/{new_quantity}.

Replace {product_id} with the ID of the product you want to update.
Replace {new_quantity} with the new quantity you want to set for the product.
Set the HTTP method to PUT.

Click the "Send" button to update the product quantity.

# Delete Product:
In Postman, set the URL to localhost:8000/product/{product_id}.

Replace {product_id} with the ID of the product you want to delete.
Set the HTTP method to DELETE.

Click the "Send" button to delete the product.
