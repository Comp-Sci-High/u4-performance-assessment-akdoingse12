const express = require('express')
const app = express()

const Places = [
TopSpotsNearYou = [
    {
        name: "Joe's Pizza",
        description: "Absolutely the best slice in NYC! Crispy crust and perfect cheese-to-sauce ratio. - Alex R.",
        ratinganddistance: "⭐ 4.8 | 0.5 miles away",
        location: "https://maps.google.com?q=Joe's+Pizza",
        Category: "Lunch"
    },
    {
        name: "Happy Boba",
        description: "Great selection of flavors and the tapioca pearls are always fresh! - Jamie L.",
        ratinganddistance: "⭐ 4.7 | 1.2 miles away",
        location: "https://maps.google.com?q=Happy+Boba",
    },
    {
        name: "Levain Bakery",
        description: "The best cookies in NYC! Soft, gooey, and absolutely delicious. - Emma S.",
        ratinganddistance: "⭐ 4.9 | 1.0 miles away",
        location: "https://maps.google.com?q=Levain+Bakery",
    },
] 
 ]
 app.use((req, res, next) => {
    console.log(req.method + "" + req.path)
    next()
 })
 
 app.get("/spots", (req,res) => {
     console.log(Places[0])
 })

 app.listen(3000, ())