CREATE DATABASE website_form;

\c website_form;

CREATE TABLE message(
    id SERIAL PRIMARY KEY,
    gender VARCHAR(50) NOT NULL,
    personName VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
    requestType VARCHAR(50) NOT NULL,
    messageValue VARCHAR(50) NOT NULL
);



-- psql -U postgres -f database.sql

-- delete database
-- psql -U postgres -c "DROP DATABASE IF EXISTS website_form;"

-- Kullanicilari sonlandir
-- psql -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'website_form';"