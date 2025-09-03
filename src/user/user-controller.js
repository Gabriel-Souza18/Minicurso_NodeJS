import { json, Router } from "express";


const router = new Router()

router.get("/", (req, res)=>{
    res.send("buscou");  
});

router.get("/:id", (req,res)=>{
    const id = req.params.id
    res.send("Bucou "+ id);

});

router.post("/",(req,res)=>{
    const body = JSON.stringify(req.body);
    res.send("criou "+ body)
    
});

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const body =JSON.stringify(req.body);
    res.send("Atualizei tudo"+ id+ body);
});

router.patch("/:id", (req,res)=>{
    const id = req.params.id;
    const body =JSON.stringify(req.body);
    res.send("Atualizei parcial"+ id+ body);
});

router.delete("/:id", (req,res)=>{
    const id = req.params.id;
    res.send("Deletei"+ id);
});

export default router;

