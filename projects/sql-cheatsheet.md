---
layout: content
title: SQL Cheatsheet
categories:
- blog
---

##LIMIT [count]
Example: `SELECT * FROM movies ORDER BY imdb_rating ASC LIMIT 3;`

> Limits results to the top [count] number

##ORDER BY [file_name] DESC
Example: `SELECT * FROM movies ORDER BY imdb_rating ASC LIMIT 3;`

> Sorts by descending or ascending(ASC)

##PRIMARY KEY/FOREIGN KEY
Example: `CREATE TABLE artists(id INTEGER PRIMARY KEY, name TEXT);`

Example: `CREATE TABLE album(id INTEGER, artist_id, FOREIGN KEY (artist_id) REFERENCES artists(id));`

> A PRIMARY KEY serves as a unique identifier for each row or record in a given table. The primary key is literally an id value for a record. We're going to use this value to connect artists to the albums they have produced.
By specifying that the id column is the PRIMARY KEY, SQL makes sure that:

> - None of the values in this column are NULL
> - Each value in this column is unique
> - A table can not have more than one PRIMARY KEY column.

> FOREIGN KEY is something that refers to PRIMARY KEY in another table.

##JOIN
Example: `SELECT * FROM albums LEFT JOIN artists ON albums.artist_id = artists.id;`

> Joins lists together

>**LEFT retains entries that don’t have a match.

##AS
Example: `SELECT albums.name AS 'Album', albums.year, artists.name AS 'Artist' FROM albums JOIN artists ON albums.artist_id = artists.id WHERE albums.year > 1980;`

>Sets an alias for column value when displaying

##ROUND/AVG
Example: `SELECT price, ROUND(AVG(downloads),2) FROM fake_apps GROUP BY price;`

>Rounds the value by the number of decimal points as set by the second parameter. Default is 0

##GROUP BY
Example: `SELECT price, COUNT(*) FROM fake_apps GROUP BY price;`

> GROUP BY is a clause in SQL that is only used with aggregate functions. It is used in collaboration with the SELECT statement to arrange identical data into groups.

##COUNT
Example: `SELECT price, COUNT(*) FROM fake_apps GROUP BY price;`

> Aggregate function that counts the number of instances that contain the value falling within each category.

##WHERE
Example: `SELECT * FROM movies WHERE name = “Forrest Gump”;`

> Conditional operator

##Wildcards: % and _ and []
Example: `SELECT * FROM movies WHERE name LIKE 'A%';`

Example: `SELECT * FROM Customers WHERE City LIKE 'L_n_on';`

Example: `SELECT * FROM Customers WHERE City LIKE '[bsp]%';`

> Used with the LIKE operator. This SQL statement selects all customers with a City starting with "b", "s", or "p"

##DISTINCT
Example: `SELECT DISTINCT genre FROM movies;`

> Displays only unique results.

##DELETE FROM
Example: `DELETE FROM celebs WHERE twitter_handle IS NULL;`

> Deletes entire row of values

##Create a table
Example: `CREATE TABLE celebs (id INTEGER, name TEXT, age INTEGER);`

##Alter a table
Example: `ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;`

> Adds a column

##UPDATE
Example: `UPDATE celebs SET age = 24 WHERE age = 22;`

> Updates values in a table

##INSERT INTO
Example: `INSERT INTO celebs (name, age, id) VALUES ("Taylor Swift", 26, 4);`

> Inserts a new row into table

##IS NULL
Example: `SELECT LastName,FirstName,Address FROM Persons WHERE Address IS NULL`

> Used to check for null values, because “= NULL” will always return NULL and thus will always fail