# Tabloid - Fullstack

## We have two sprints to implement a production ready Tabloid application.

### Getting Started

1. Pull down this repo

2. Run the two scripts that are in the SQL folder. These will create the Tabloid database and add some test data. The database it creates is identitical to the prototype from the last MVC sprint.

Seed Data: <br/>
https://github.com/NewForce-Cohort-6/tabloidfullstack-stuffing/blob/main/SQL/01_Tabloid_Create_DB.sql

https://github.com/NewForce-Cohort-6/tabloidfullstack-stuffing/blob/main/SQL/02_Tabloid_Seed_Data.sql

New Query:
ALTER TABLE UserProfile
ADD IsActive bit NOT NULL
DEFAULT 1;


3. Install your dependencies by running `npm install` from the same directory as your `package.json` file

### ERD

![image](https://user-images.githubusercontent.com/106984214/202237041-04ee6d04-9973-4ef9-b917-93118c9ac386.png)

### WireFrame
![image](https://user-images.githubusercontent.com/106984214/205366549-8791e29f-cce3-4e83-b3a8-e683afe9370d.png)



![Tabloid Web API](https://user-images.githubusercontent.com/106984214/202562706-93692f42-6d20-410d-91e6-2b1c883192d8.png)

