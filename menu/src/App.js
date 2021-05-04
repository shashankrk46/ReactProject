import React, { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
