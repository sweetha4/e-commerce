import React from 'react';

const CategoriesList = () => {
  const categories = [
    {
      name: 'Electronics',
      subcategories: ['Phone', 'Camera', 'Television', 'Laptops', 'Headphones']
    },
    {
      name: 'Clothing',
      subcategories: ['Jeans', 'Kurthi', 'Salwar', 'T-shirts', 'Jackets']
    },
    {
      name: 'Home Appliances',
      subcategories: ['Washing Machine', 'Refrigerator', 'Microwave', 'Vacuum Cleaner', 'Air Conditioner']
    },
    {
      name: 'Toys',
      subcategories: ['Action Figures', 'Puzzles', 'Board Games', 'Stuffed Animals', 'Building Blocks']
    },
    {
      name: 'Books',
      subcategories: ['Fiction', 'Non-fiction', 'Comics', 'Biographies', 'Self-help']
    }
  ];

  return (
    <div className="categories">
      <h3>Browse by Category</h3>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <a href={`#${category.name.toLowerCase()}`} className="category-name">{category.name}</a>
            <div className="subcategory-list">
              {category.subcategories.map((subcategory, subIndex) => (
                <a href={`#${subcategory.toLowerCase()}`} key={subIndex} className="subcategory">{subcategory}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;

