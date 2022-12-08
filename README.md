# Gaming-Company-Website

D3 Gaming Company is one of the popular E-sports organization. The company is a leading E-sports and gaming venture in India, renowned for hosting major E-sports tournaments.: Valorant Cup, BGMI Cup, Fortnite Cup and the popularity was seen across India.

:::::BACKEND MYSQL ::::::


create database nodejs;

show databases;
// to check the list of databases;
use nodejs;
create table if not exists loginuser (user_id int not null primary key auto_increment,user_name varchar(255),user_name varchar(255));

select * from nodejs.loginuser;
insert into loginuser(user_name ,user_pass) values("enteryour@gmail.com","password");

select * from nodejs.loginuser;
//To check the new values added in table


Login system using nodejs and mysql database-:
Step 1)create a folder at any location for db
now open terminal ,use commands:
npm init
create login.html,assests.css and login.js file

Step 2)npm i mysql2 // install mysql2 module
npm i body-parser express nodemon

Step 3)write code in login.js(check file)
Run command- node login.js

Step 4)go to web browser & type localhost:4000/
add style.css in application

Step 5)When we enter inccorect username or password it send us to login page but when login is success it send us to home page.

Note: add all static files in public folder to apply css and js properly
app.use("/assets",express.static("assets"));
app.use(express.static("public"));
