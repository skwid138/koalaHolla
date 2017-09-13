-- DB name: koala

-- Table create script
CREATE TABLE holla (
	id SERIAL PRIMARY KEY,
	name VARCHAR(20) unique,
	gender VARCHAR(1),
	age INT,
	ready_for_transfer BOOLEAN,
	notes VARCHAR(100)
);

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Scotty', 'M', 4, true, 'Born in Guatemala');

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Jean', 'F', 5, true, 'Allergic to lost of lava');

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Ororo', 'F', 7, false, 'Loves listening to Paula (Abdul)');

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Logan', 'M', 15, false, 'Loves the sauna');

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Charlie', 'M', 9, true, 'Favorite band is Nirvana');

INSERT INTO holla (name, gender, age, ready_for_transfer, notes) VALUES ('Betsy', 'F', 4, true, 'Has a pet iguana');

