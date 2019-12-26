
const express = require('express');
const Request = require("request");
const mongoose = require('mongoose');
const Product = require('./models/products');
require('./models/db');


app = express();



/*
Request.get("http://test.ats-digital.com:3000/products", (error, response, body) => {
    if(error) {
        return console.log(error);
    }
    
    else{
        let data = JSON.parse(body).products;
        console.log(data);
       
        Product.collection.insertMany(data,(err)=>{
            if (!err) console.log("docs inserted");
            else{
                console.log(err);
            }
        });
    }
});*/
app.get('/products', (req, res) => {
    
    Product.find({}, (err, products) => {
        if (!err) {
            var reviews =[{"rating": {type:Number} , "content" : {type : String}}];
            var ratingsArray=[];
            products.forEach(p=>{reviews.push(p.reviews)}); //get the array of reviews of each product
            console.log(reviews);
            for (let i = 0 ; i<reviews.length;i++){
                var r = reviews[i];
                var average = Object.values(r).reduce((total, next) => total + next.rating,0) / Object.values(r).length;
                ratingsArray.push(average.toFixed(2));//array of averages of each product 
            }
            res.render('products.ejs', {
                products: products,
                average :ratingsArray
            });
        } else res.send(err);
    });

});

app.get('/product/:id', (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (!err) {
            let reviews = product.reviews;
            console.log(reviews);
            res.render('product.ejs', {
                product: product,
                reviews: reviews
            });
        } else res.json(err);
    });
});

app.listen(4000);