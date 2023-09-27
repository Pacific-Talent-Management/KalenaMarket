drop table if exists user cascade;

create table user(
	id serial,
	email varchar(36) unique,
	password varchar(255),
	firstName varchar(36),
	lastName varchar(36),
	phone int,
   primary key (id)
);
