CREATE TABLE visitors (
  id            SERIAL PRIMARY KEY,    
  date          TIMESTAMP WITH TIME ZONE NOT NULL,      
  city          VARCHAR,
  country       VARCHAR,
  latitude      DECIMAL,
  longitude     DECIMAL
);