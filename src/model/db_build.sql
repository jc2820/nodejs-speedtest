DROP TABLE IF EXISTS speedtests;

CREATE TABLE speedtests (
    ID SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    speed INTEGER
);

INSERT INTO speedtests (created_at, speed)
VALUES (current_timestamp, 34);