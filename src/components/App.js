import React, { useState } from "react";
import "../styles/App.css";
import Menu from "./Menu";

const initialDishes = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 12.5,
    description: "Fluffy pancakes with maple syrup, berries, and whipped butter.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 10,
    description: "Sourdough toast, smashed avocado, chili flakes, and a poached egg.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Berry Yogurt Bowl",
    category: "Breakfast",
    price: 9.5,
    description: "Creamy Greek yogurt topped with fresh berries, granola, and honey.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Classic Cheeseburger",
    category: "Lunch",
    price: 15,
    description: "Grilled beef, cheddar, lettuce, tomato, and house sauce on a brioche bun.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Garden Harvest Salad",
    category: "Lunch",
    price: 13.5,
    description: "Seasonal greens, roasted vegetables, feta, and lemon herb dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Crispy Chicken Sandwich",
    category: "Lunch",
    price: 14.5,
    description: "Buttermilk fried chicken, crunchy slaw, pickles, and smoky mayo.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Classic Vanilla Shake",
    category: "Shakes",
    price: 6.5,
    description: "A thick vanilla bean shake blended with creamy ice cream.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Chocolate Shake",
    category: "Shakes",
    price: 7,
    description: "Chocolate ice cream blended smooth and topped with cocoa.",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Strawberry Shake",
    category: "Shakes",
    price: 7,
    description: "Fresh strawberries and vanilla ice cream in a classic shake.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    name: "Banana Shake",
    category: "Shakes",
    price: 6.5,
    description: "Ripe banana blended with milk and smooth vanilla ice cream.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "Oreo Shake",
    category: "Shakes",
    price: 7.5,
    description: "Vanilla shake blended with chocolate cookie pieces.",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Mango Shake",
    category: "Shakes",
    price: 7,
    description: "Sweet mango blended with chilled milk for a tropical treat.",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299abe4?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [menuItems] = useState(initialDishes);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="menu-page" id="main">
      <header className="menu-header">
        <a className="brand" href="/" aria-label="The Daily Table home">
          <span className="brand-mark" aria-hidden="true">
            DT
          </span>
          <span>The Daily Table</span>
        </a>
        <span className="header-note">Fresh food, made with care</span>
      </header>

      <section className="menu-intro" aria-labelledby="menu-title">
        <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
        <h1 id="menu-title">Our Menu</h1>
        <p className="intro-copy">
          Simple ingredients, feel-good favorites, and something delicious for
          every moment.
        </p>
      </section>

      <Menu
        dishes={menuItems}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <footer className="menu-footer">
        <span>Made fresh daily</span>
        <span>Prices in USD · Please ask us about allergens</span>
      </footer>
    </main>
  );
}

export default App;
