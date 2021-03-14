DROP DATABASE if EXISTS ur68g7xhh6z8hkdh;

CREATE DATABASE ur68g7xhh6z8hkdh;

USE ur68g7xhh6z8hkdh;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dog_name VARCHAR(50) NOT NULL,
    breed VARCHAR(50) NOT NULL,
    owner_name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(12) NOT NULL,
    extra_notes TEXT(255),
    stage INT NOT NULL,
    assigned_walker INT NOT NULL,
    total_walks INT NOT NULL
);




