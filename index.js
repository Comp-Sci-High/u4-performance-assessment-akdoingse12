const express = require('express');
const app = express();

const NewYork = [
    {
        category: "FoodSpots",
        list: [
            {
                name: "Joe's Pizza",
                description: "Absolutely the best slice in NYC! Crispy crust and perfect cheese-to-sauce ratio. - Alex R.",
                ratinganddistance: "⭐ 4.8 | 0.5 miles away",
                location: "https://maps.google.com?q=Joe's+Pizza",
                Type: "Lunch",
                path: "/TopSpotsNearYou/0"
            },
            {
                name: "Happy Boba",
                description: "Great selection of flavors and the tapioca pearls are always fresh! - Jamie L.",
                ratinganddistance: "⭐ 4.7 | 1.2 miles away",
                location: "https://maps.google.com?q=Happy+Boba",
                path: "/TopSpotsNearYou/1",
                Type: "Drinks & Frozen"
            },
            {
                name: "Levain Bakery",
                description: "The best cookies in NYC! Soft, gooey, and absolutely delicious. - Emma S.",
                ratinganddistance: "⭐ 4.9 | 1.0 miles away",
                location: "https://maps.google.com?q=Levain+Bakery",
                path: "/TopSpotsNearYou/2",
                Type: "Baked-Goods"
            },
            {
                name: "Katz's Deli",
                description: "A must-visit for an authentic NYC pastrami sandwich! - Michael T.",
                ratinganddistance: "⭐ 4.6 | 2.3 miles away",
                location: "https://maps.google.com?q=Katz's+Deli",
                Type: "Lunch",
                path: "/TopSpotsNearYou/3"
            },
            {
                name: "Van Leeuwen Ice Cream",
                description: "Unique and rich flavors with creamy texture. Love the honeycomb flavor! - Sarah J.",
                ratinganddistance: "⭐ 4.6 | 2.3 miles away",
                location: "https://maps.google.com?q=Van+Leeuwen+Ice+Cream",
                Type: "Drinks & Frozen",
                path: "/TopSpotsNearYou/4"
            }
        ]
    },
    {
        category: "Hang Out Spots",
        list: [
            {
                name: "Washington Square Park",
                location: "Greenwich Village, New York, NY",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Washington_Square_Park%2C_NYC.jpg"
            },
            {
                name: "The High Line",
                location: "Manhattan, NY 10011",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/09/The_High_Line_%2810808%29.jpg"
            }
        ]
    }
];
     
 


 app.get("view engine", "ejs")



 app.use((req, res, next) => {
    console.log(req.method + "" + req.path)
    next()
 })
 


app.use(express.static(__dirname + "/public"))

app.get("/", ("req, res") => {
    res.render("index.html", data)
})

app.get("/foodspots")

app.get("/hangoutspots")
    




 app.listen(3000, () => {
    console.log("Server is running")
 })