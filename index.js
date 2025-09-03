import express from "express";
const app = express();
app.use(express.json());


app.get("/hello", (req, res)=>{
    res.send("buscou");  
});

app.get("/hello/:id", (req,res)=>{
    console.log(req.params.id);
    res.send("Bucou 1");

});

app.post("/hello",(req,res)=>{
    console.log(req.body);
    res.send("criou")
    
});

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000");

 });


