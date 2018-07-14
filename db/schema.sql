/*if a previous database called burgers_db exists, drop it. otherwise, create 
database named burgers_db and use it*/
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

/*create a table named burgers with auto-incrementing id, name(string), whether the
burger has been eaten or not(boolean), and whether the burger was loved/loathed (boolean)
 as fields. the loved/loathed boolean value is for a future feature that may not be 
 completed upon submission*/
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
     id INT AUTO_INCREMENT NOT NULL,
     burger_name varchar(300) NOT NULL,
     eaten BOOLEAN DEFAULT false,
     loved BOOLEAN DEFAULT false,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
     PRIMARY KEY (id)
 );

