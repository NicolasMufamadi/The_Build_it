DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_Id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    number_phone VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    password TEXT NOT NULL,
    userRole VARCHAR(50) DEFAULT 'Customer'
);