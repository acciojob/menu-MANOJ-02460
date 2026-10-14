import React from "react";

const categories = [
  { name: "Breakfast", buttonId: "filter-btn-1" },
  { name: "Lunch", buttonId: "filter-btn-2" },
  { name: "Shakes", buttonId: "filter-btn-3" },
];

function Menu({ dishes, activeCategory, onCategoryChange }) {
  const visibleDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <>
      <nav className="category-list" aria-label="Filter dishes by category">
        {categories.map(({ name, buttonId }) => (
          <button
            className={`category-button${
              activeCategory === name ? " is-active" : ""
            }`}
            id={buttonId}
            key={name}
            type="button"
            aria-pressed={activeCategory === name}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </nav>

      <section className="dish-grid" aria-live="polite">
        {visibleDishes.map((dish) => (
          <article
            className="dish-card"
            data-test-id={`menu-item-${dish.category.toLowerCase()}`}
            key={dish.id}
          >
            <div className="dish-image-wrap">
              <img className="dish-image" src={dish.image} alt={dish.name} />
              {dish.tag && <span className="dish-tag">{dish.tag}</span>}
            </div>
            <div className="dish-details">
              <div className="dish-heading">
                <h2>{dish.name}</h2>
                <span className="dish-price">${dish.price.toFixed(2)}</span>
              </div>
              <p>{dish.description}</p>
              <span className="dish-category">{dish.category}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Menu;
