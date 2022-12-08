const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({extended:true});

const app = express();
app.use("/assets",express.static("assets"));
app.use(express.static("public"));
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "****",
//     enter your mysql password
    database: "nodejs"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})



app.get("/contactUs",function(req,res){
    res.sendFile(__dirname + "/contactUs.html");
})

app.get("/signup",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})
app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
})

app.post("/login",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
    
        if (results.length > 0) {
            
            res.redirect("/");
        } else { 
            res.redirect("/");
        }
        res.end();
    })
})

app.post("/signup",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;
   
    connection.connect(function(err) {
        console.log("Connected!");
        var sql = "INSERT INTO loginuser (user_name, user_pass) VALUES (?,?);";
        connection.query(sql, [username,password],function (err, result) {
            if(err)
            console.log(err);
            else
          console.log("1 record inserted");
        });
      });
res.redirect("/login");
})

// when login is success
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})


// set app port
app.listen(4000);
