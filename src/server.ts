import express from 'express';

const app = express();
app.get('',(request,response)=>{
    return response.json([
        { message:"Começando projeto com node"},
        {backend:"utilizando express,typescrit,knex"},
        {fronend:"utilizando Anguçlar"}
    ]);
});

app.listen(3333,()=>{
    console.log("Api rodando ...");
})