-- DROP DATABASE if EXISTS dogs_db;

-- CREATE DATABASE dogs_db;

-- USE dogs_db;

DROP DATABASE if EXISTS hg1sixrm9gn0c7w7;

CREATE DATABASE hg1sixrm9gn0c7w7;

USE hg1sixrm9gn0c7w7;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR(50) NOT NULL,
    owner_name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(12) NOT NULL,
    long_walk BOOLEAN NOT NULL,
    walking BOOLEAN NOT NULL,
    walked BOOLEAN NOT NULL,
    walk_time INT NOT NULL,
    extra_notes TEXT(255),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR (50) NOT NULL,
    walking BOOLEAN NOT NULL
);