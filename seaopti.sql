create database searchopti;
use searchopti;
create table data (
    id int primary key auto_increment,
    name varchar(255) not null,
    city varchar(255) not null,
    state varchar(255) not null,
    pincode varchar(6) not null,
    country varchar(255) not null
);