CREATE TABLE visitors (
  id            SERIAL PRIMARY KEY,          
  city          VARCHAR,
  country       VARCHAR,
  latitude      DECIMAL,
  longitude     DECIMAL
);