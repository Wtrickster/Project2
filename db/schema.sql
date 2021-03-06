DROP DATABASE if EXISTS dogs_db;

CREATE DATABASE dogs_db;

USE dogs_db;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR(50) NOT NULL,
    owner_name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number INT(10),
    long_walk BOOLEAN NOT NULL,
    walk_time TIME,
    extra_notes TEXT(255),
    PRIMARY KEY (id)
);