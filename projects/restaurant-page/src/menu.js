const menu = {
  mains: [
    {
      name: "Grilled Herb Chicken",
      description: "Tender chicken breast marinated in a blend of fresh rosemary, thyme, and garlic, then grilled to perfection and served with a lemon butter drizzle.",
      price: 14.99
    },
    {
      name: "Beef Stroganoff",
      description: "Succulent strips of slow-cooked beef simmered in a creamy mushroom and onion sauce, served over a bed of buttered egg noodles.",
      price: 16.49
    },
    {
      name: "Spicy Tofu Stir-Fry",
      description: "Crispy tofu cubes tossed in a fiery soy-garlic glaze with bell peppers, onions, and broccoli, served over jasmine rice.",
      price: 12.75
    },
    {
      name: "BBQ Pulled Pork Sandwich",
      description: "House-smoked pulled pork smothered in tangy BBQ sauce, piled high on a toasted brioche bun and topped with creamy slaw.",
      price: 13.50
    },
    {
      name: "Lemon Butter Salmon",
      description: "Pan-seared Atlantic salmon fillet served with a zesty lemon butter sauce, garnished with capers and fresh herbs.",
      price: 17.95
    }
  ],
  sides: [
    {
      name: "Garlic Parmesan Fries",
      description: "Thick-cut fries tossed with roasted garlic, shredded parmesan, and a touch of parsley for an irresistible crunch.",
      price: 4.99
    },
    {
      name: "Seasonal Veggies",
      description: "A medley of locally-sourced seasonal vegetables, lightly steamed and finished with herb-infused butter.",
      price: 3.99
    },
    {
      name: "Mac & Cheese",
      description: "Rich and creamy elbow pasta smothered in a blend of cheddar, mozzarella, and parmesan cheese.",
      price: 5.50
    },
    {
      name: "Side Salad",
      description: "Fresh greens topped with cherry tomatoes, cucumber slices, red onion, and your choice of dressing.",
      price: 4.25
    },
    {
      name: "Onion Rings",
      description: "Crispy battered onion rings fried to a golden brown, served with a side of ranch or spicy mayo.",
      price: 5.25
    }
  ],
  beverages: [
    {
      name: "Iced Lemon Tea",
      description: "Freshly brewed black tea served chilled with real lemon juice and a hint of mint.",
      price: 2.99
    },
    {
      name: "Sparkling Water",
      description: "Refreshing, lightly carbonated mineral water served with a slice of lime or lemon.",
      price: 2.49
    },
    {
      name: "Cold Brew Coffee",
      description: "Smooth, bold cold brew steeped for 18 hours, served over ice with optional cream.",
      price: 3.75
    },
    {
      name: "Fruit Smoothie",
      description: "A blend of ripe strawberries, banana, and mango with a splash of orange juice and honey.",
      price: 4.95
    },
    {
      name: "Classic Soda",
      description: "Choose from our selection of cola, lemon-lime, or root beer — served ice-cold.",
      price: 2.50
    }
  ],
  setMenu: [
    {
      name: "Lunch Set A",
      description: "A complete mid-day meal featuring Grilled Herb Chicken, a Side Salad with vinaigrette, and a refreshing Iced Tea.",
      price: 18.99
    },
    {
      name: "Lunch Set B",
      description: "Hearty Beef Stroganoff paired with crispy Garlic Parmesan Fries and a cold soda of your choice.",
      price: 19.49
    },
    {
      name: "Vegan Set",
      description: "Plant-powered combo of Spicy Tofu Stir-Fry, Seasonal Veggies, and a refreshing Fruit Smoothie.",
      price: 17.25
    },
    {
      name: "Family Combo",
      description: "Perfect for sharing — includes your choice of any 2 mains, 2 sides, and 2 beverages. Great value and variety.",
      price: 39.99
    },
    {
      name: "Kids Meal",
      description: "Kid-friendly portion of creamy Mac & Cheese with Garlic Fries and a juice box. Includes a fun surprise sticker!",
      price: 9.99
    }
  ]
};

export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuSection = document.createElement('div');
    menuSection.classList.add('tab-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    menuSection.appendChild(heading);

    Object.entries(menu).forEach(([category, items]) => {
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        menuSection.appendChild(categoryHeading);

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const name = document.createElement('h3');
            name.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            const desc = document.createElement('p');
            desc.textContent = item.description;

            itemDiv.appendChild(name);
            itemDiv.appendChild(desc);
            menuSection.appendChild(itemDiv);
        });
    });
    content.appendChild(menuSection);
}