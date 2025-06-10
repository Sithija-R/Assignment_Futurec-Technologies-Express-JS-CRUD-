# Simple RESTful API

## 📦 Features

- Add a product
- Fetch all products
- Fetch a product by ID
- Search products by name (case-insensitive)
- Update a product
- Delete a product

---
  
# API Documentation

## User Authentication

### 1. Register User  
- **Method**: POST  
- **URL**: `/api/user/register`  
- **Request Body (JSON)**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### 2. Login User  
- **Method**: POST  
- **URL**: `/api/user/login`  
- **Request Body (JSON)**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

---

## Product Management

### 3. Add a Product  
- **Method**: POST  
- **URL**: `/api/product/add`  
- **Request Body (JSON)**:
```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "quantity": 100
}
```

### 4. Get All Products  
- **Method**: GET  
- **URL**: `/api/product/getall`  
- **Request Body**: None
  
### 5. Get Product by ID  
- **Method**: GET  
- **URL**: `/api/product/get/:id`  
- **Request Body**: None
  
### 6. Search Products by Name  
- **Method**: GET  
- **URL**: `/api/products/search?name=search_term`  
- **Request Parameters**:  
  - `name` (string) — name or partial name of the product to search for (case-insensitive)  
- **Request Body**: None  

### 7. Update Product  
- **Method**: PUT  
- **URL**: `/api/product/update/:id`  
- **Request Body (JSON)**:
```json
{
  "name": "Gaming Mouse",
  "price": 39.99,
  "quantity": 150
}
```

### 8. Delete Product  
- **Method**: DELETE  
- **URL**: `/api/product/delete/:id`  
- **Request Body**: None  
- **Success Response (200 OK)**:


---
