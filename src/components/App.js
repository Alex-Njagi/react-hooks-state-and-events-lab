import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState((false))
  const handleThemeChange = (e) => {
    setDark(true)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = dark ? "App dark" : "App light"

  const [selectedCategory, setSelectedCategory] = useState('Filter by category')

  const filteredItems = itemData.filter((item) => {
    item.category.toLowerCase().includes(selectedCategory.toLowerCase())
  })

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleThemeChange}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default App;
