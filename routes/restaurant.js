const express = require('express');
const router = express.Router();
const restaurants = require('../data')

router.get('/',(req,res)=>{
    res.render('index',{restaurants});
});

//http://localhost:3000/api/restaurants
router.get("/restaurants", (req, res) => {
    res.json(restaurants);
});

//http://localhost:3000/api/restaurants/1
router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
});


//http://localhost:3000/api/restaurants
router.post("/restaurants", (req, res) => {
    //เช็ค error
    //console.log(req.body)
    const newRestaurant = {
      ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

//http://localhost:3000/api/restaurants/1
router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    const updatedRestaurant = {
      id:restaurantId,
      ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
});

//http://localhost:3000/api/restaurants/1
router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    restaurants.splice(restaurantIndex,1);
    res.sendStatus(204);
});  

module.exports = router;