# 2024-03-15-backend
technical test


## Db Schema 
### Here is the schema in SQL to create the tables to this project

CREATE TABLE Empleado (
    ID SERIAL PRIMARY KEY,
    FECHA_INGRESO DATE NOT NULL,
    NOMBRE VARCHAR(50) NOT NULL,
    SALARIO NUMERIC NOT NULL
);

CREATE TABLE Solicitud (
    ID SERIAL PRIMARY KEY,
    CODIGO VARCHAR(50) NOT NULL,
    DESCRIPCION VARCHAR(50) NOT NULL,
    RESUMEN VARCHAR(50),
    ID_EMPLEADO INTEGER REFERENCES Empleado(ID)
);

## .env to develop
### Here the dotenv required to the project, the values are valid just for develop env

DB_NAME="mydatabase"
DB_USERNAME="admin"
DB_PASSWORD="admin"
DB_HOST="localhost"