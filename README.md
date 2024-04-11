# 2024-03-15-backend
technical test


## To run in local
### docker-compose
You need to have installed docker, once in the project folder,
run:
    docker-compose-up
now you got the container fot the db in localhost port 5432
yo may config pg-admin(in the container) to admin the db and run the structure 
described bellow

### Db Schema 
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

### .env to develop
### Here the dotenv required to the project, the values are valid just for develop env

DB_NAME="mydatabase"
DB_USERNAME="admin"
DB_PASSWORD="admin"
DB_HOST="localhost"

### Install dependencies

Just need to run:
    npm install

### Run project

Just need to run:
    npm run dev




