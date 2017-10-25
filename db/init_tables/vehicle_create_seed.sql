-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS vehicles;

-- === CREATE TABLE ==================

-- Complete the create table statement below. The table should have the following columns:

CREATE TABLE IF NOT EXISTS vehicles (
  id serial,
  make text,
  model text,
  year integer,
  owner_id integer,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("owner_id") REFERENCES "users"("id")
);

-- === INSERT STATEMENT ===============

-- Complete the insert statement below. The values below need to be inserted into the 'vehicles' table.
INSERT INTO vehicles (make, model, year, owner_id) VALUES 

('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3)

