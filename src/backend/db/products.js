import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:"../Assets/T-shirt1.jpg",
    title: "Truck Art: Batman",
    category:"Oversized T-Shirts",
    price:"999",
    categoryName:"upperWear",
    rating:"4.5",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/T-shirt2.jpg",
    title: "Minions: I Don't Care",
    category:"Oversized T-Shirts",
    price:"999",
    categoryName: "upperWear",
    rating:"4.3",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/T-shirt3.jpg",
    title: "Black Panther: Wakanda Forever",
    category:"Oversized Jerseys",
    price:"1099",
    categoryName: "upperWear",
    rating:"5",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/T-shirt4.jpg",
    title: "Batman: The Cowl",
    category:"Oversized T-Shirts",
    price:" 949",
    categoryName: "upperWear",
    rating:"4",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/pant1.jpg",
    title: "Solids: Ice Blue (Straight Fit)",
    category:"Men Jeans",
    price:" 2299",
    categoryName: "bottomWear",
    rating:"5",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/pant2.jpg",
    title: "Justice League: Logo",
    category:"Men Joggers",
    price:" 899",
    categoryName: "bottomWear",
    rating:"3.9",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/pant3.jpg",
    title: "TSS Originals: Olive and Black",
    category:"Men Cargo Joggers",
    price:" 1599",
    categoryName: "bottomWear",
    rating:"4.2",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/trouser1.jpg",
    title: "Solids: Teak",
    category: "Men Cargo Shorts",
    price: "1099",
    categoryName: "bottomWear",
    rating:"3.7",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/shoe1.jpg",
    title: "Spider-Man: Spidey Sigil",
    category: "Men High Top Sneakers",
    price: "2499",
    categoryName: "footWear",
    rating:"4.5",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/shoe2.jpg",
    title: "Garfield: Just Chilling",
    category: "Men Lace Up Shoes",
    price: "1199",
    categoryName: "footWear",
    rating:"3.2",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/shoe3.jpg",
    title: "Harry Potter: Gryffindor",
    category: "Men Low Top Sneakers",
    price: "1999",
    categoryName: "footWear",
    rating:"4",
    cart: false,
    wishlist: false,
    quantity: 1
  },
  {
    _id: uuid(),
    image:"../Assets/shoe4.jpg",
    title: "Iron Man: Suit Up",
    category: "Men Loafers",
    price: "1199",
    categoryName: "footWear",
    rating:"2.5",
    cart: false,
    wishlist: false,
    quantity: 1
  }
];
