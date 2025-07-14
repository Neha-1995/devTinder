const express = require('express');

const app = express();

app.get("/user",(req,res) => {
     res.send({firstName: "Kumari Neha", lastName: "Verma"});
});

app.post("/user",(req,res) =>{
    res.send("data saved successfully in db ");
})

app.delete("/user",(req,res) =>{
    res.send("data deleted successfully ");
})


app.use("/Test",(req,res) =>{
    res.send("Hello From the test  server");
})

app.listen(7777 ,() => {
    console.log('server is running on port 7777');
}
);