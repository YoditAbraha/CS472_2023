const express = require ("express");
 const app=express();
app.use (express.urlencoded ({"extended":false}));
app.get ("/", (req, res) => {
    res.send (`<form action='http://localhost:3000/multiply' method='POST'>
        <input text name= 'num1'>
        <input text name = 'num2'>
        <input type='submit' value= 'Multiply Numbers'>
        </form>`);
});
// * insert another route here to compute product and send HIM to Browser */ 
app.post('/multiply', (req, res)=>{
   
    res.send(`The product is ${parseInt(req.body.num1) * parseInt(req.body.num2)}`)
    
})
app. listen (3000) ;