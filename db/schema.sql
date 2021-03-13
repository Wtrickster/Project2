DROP DATABASE if EXISTS hg1sixrm9gn0c7w7;

CREATE DATABASE hg1sixrm9gn0c7w7;

USE hg1sixrm9gn0c7w7;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dog_name VARCHAR(50) NOT NULL,
    breed VARCHAR(50) NOT NULL,
    owner_name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(12) NOT NULL,
    extra_notes TEXT(255),
    stage INT NOT NULL,
    assigned_walker VARCHAR(50),
    active_client BOOLEAN NOT NULL,
    walk_number INT NOT NULL
);

