var express = require("express");
var ejs = require("ejs");
var app = express();
var loginctr = require("./routes/indexctr")
var path = require("path")
//设置模板引擎
app.engine('.html',ejs.__express);
app.set("view engine","html");

//设置静态文件
app.use(express.static(path.join(__dirname,"public")));

app.use("/",loginctr);

app.listen(3000);