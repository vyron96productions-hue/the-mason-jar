export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string; // e.g. "Fan Favorite", "New", "Spicy"
}

export interface MenuCategory {
  id: string;
  label: string;
  description?: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    description: "Hand-pressed patties, built right every time.",
    items: [
      {
        name: "The Mason Burger",
        description:
          "Half-pound beef patty, cheddar, lettuce, tomato, onion, Mason Jar sauce on a brioche bun.",
        price: "$13",
        badge: "Fan Favorite",
      },
      {
        name: "Smokehouse BBQ Burger",
        description:
          "Smoked bacon, cheddar, crispy onion strings, BBQ sauce, pickles.",
        price: "$14",
      },
      {
        name: "Jalapeño Crunch Burger",
        description:
          "Pepper jack, fresh jalapeños, chipotle mayo, crispy fried onions.",
        price: "$14",
        badge: "Spicy",
      },
      {
        name: "Mushroom Swiss Burger",
        description:
          "Sautéed cremini mushrooms, Swiss cheese, garlic aioli, arugula.",
        price: "$13",
      },
      {
        name: "Classic Cheeseburger",
        description:
          "American cheese, ketchup, mustard, dill pickle, yellow onion. Simple. Perfect.",
        price: "$11",
      },
    ],
  },
  {
    id: "handhelds",
    label: "Handhelds",
    description: "Sandwiches and baskets worth grabbing with both hands.",
    items: [
      {
        name: "Mason Jar Chicken Sandwich",
        description:
          "Crispy fried chicken breast, honey butter, pickles, slaw on a brioche bun.",
        price: "$13",
        badge: "Fan Favorite",
      },
      {
        name: "Pulled Pork Sandwich",
        description:
          "Slow-smoked pulled pork, Carolina Gold sauce, pickled red onions, brioche bun.",
        price: "$13",
      },
      {
        name: "BLT Club",
        description:
          "Triple-decker with smoked bacon, lettuce, tomato, avocado, turkey, and mayo.",
        price: "$13",
      },
      {
        name: "Fish Basket",
        description:
          "Beer-battered cod, tartar sauce, coleslaw, seasoned fries.",
        price: "$14",
      },
      {
        name: "Hot Dog",
        description:
          "All-beef frank, your choice of toppings — chili, cheese, mustard, or kraut.",
        price: "$8",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    description: "Fresh, filling, and made to order.",
    items: [
      {
        name: "Grilled Chicken Caesar Wrap",
        description:
          "Grilled chicken, romaine, parmesan, croutons, Caesar dressing in a flour tortilla.",
        price: "$12",
      },
      {
        name: "Buffalo Chicken Wrap",
        description:
          "Crispy chicken tossed in buffalo sauce, blue cheese crumbles, celery, lettuce.",
        price: "$12",
        badge: "Spicy",
      },
      {
        name: "Southwest Steak Wrap",
        description:
          "Sliced flank steak, black beans, corn, pico de gallo, chipotle sour cream.",
        price: "$14",
      },
      {
        name: "Veggie Garden Wrap",
        description:
          "Roasted peppers, zucchini, mushrooms, hummus, spinach, feta in a whole wheat tortilla.",
        price: "$11",
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    description: "Sit-down plates for a real meal.",
    items: [
      {
        name: "Half-Rack Baby Back Ribs",
        description:
          "Slow-smoked, fall-off-the-bone pork ribs, dry rub or sauced. Served with two sides.",
        price: "$22",
        badge: "Fan Favorite",
      },
      {
        name: "Chicken Tenders Plate",
        description:
          "Hand-breaded tenders, honey mustard or ranch, seasoned fries, coleslaw.",
        price: "$14",
      },
      {
        name: "Loaded Nachos",
        description:
          "Tortilla chips, queso, pulled pork or chicken, jalapeños, pico, sour cream, guac.",
        price: "$15",
      },
      {
        name: "Wings (8 pc)",
        description:
          "Choice of Buffalo, Honey BBQ, Lemon Pepper, Garlic Parmesan, or dry rub. Served with dipping sauce.",
        price: "$16",
      },
      {
        name: "Ribeye Steak",
        description:
          "12 oz hand-cut ribeye, seasoned and grilled to order. Two sides included.",
        price: "$28",
      },
      {
        name: "Smash Bites",
        description:
          "Four smash-style sliders on potato rolls, american cheese, special sauce, pickles.",
        price: "$14",
      },
    ],
  },
  {
    id: "salads-soups",
    label: "Salads & Soups",
    description: "Fresh, hearty, and made from scratch.",
    items: [
      {
        name: "Mason Jar House Salad",
        description:
          "Mixed greens, cucumber, cherry tomatoes, red onion, croutons, your choice of dressing.",
        price: "$9",
      },
      {
        name: "Caesar Salad",
        description:
          "Chopped romaine, parmesan, housemade Caesar dressing, ciabatta croutons. Add chicken +$4.",
        price: "$10",
      },
      {
        name: "Loaded Wedge",
        description:
          "Iceberg wedge, blue cheese crumbles, bacon bits, cherry tomatoes, red onion, blue cheese dressing.",
        price: "$11",
      },
      {
        name: "Soup of the Day",
        description:
          "Ask your server for today's housemade selection. Cup or bowl available.",
        price: "Cup $5 / Bowl $7",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    description: "Cold beer, craft cocktails, and everything in between.",
    items: [
      {
        name: "Draft Beer",
        description:
          "Rotating local and national taps. Ask your server what's cold today.",
        price: "$5–$8",
      },
      {
        name: "Bottled & Canned Beer",
        description: "Domestic and import selection always available.",
        price: "$4–$6",
      },
      {
        name: "Mason Jar Mule",
        description:
          "House vodka, ginger beer, fresh lime juice, served in a copper mug.",
        price: "$9",
        badge: "Fan Favorite",
      },
      {
        name: "Southern Peach Lemonade",
        description: "House bourbon, peach schnapps, fresh lemonade, muddled mint.",
        price: "$9",
      },
      {
        name: "Whiskey Sour",
        description:
          "Bulleit bourbon, fresh lemon juice, simple syrup, egg white foam.",
        price: "$10",
      },
      {
        name: "Greer Sweet Tea Vodka",
        description: "Sweet tea vodka, half-and-half, fresh lemon. Southern as it gets.",
        price: "$8",
      },
      {
        name: "Non-Alcoholic",
        description: "Soft drinks, sweet tea, unsweet tea, lemonade, coffee.",
        price: "$2–$3",
      },
    ],
  },
  {
    id: "specials",
    label: "Daily Specials",
    description: "Ask your server — we run specials every day of the week.",
    items: [
      {
        name: "Monday — Wing Night",
        description: "Half-price wings all night. Pick your flavor, grab a cold one.",
        price: "See server",
      },
      {
        name: "Tuesday — Taco Tuesday",
        description:
          "Street tacos (chicken, beef, or pulled pork) + margarita deal.",
        price: "See server",
      },
      {
        name: "Wednesday — Burger + Beer",
        description: "Any classic burger + a draft beer combo special.",
        price: "See server",
      },
      {
        name: "Thursday — Ladies Night",
        description: "Drink specials all evening. Live music some nights — check our events.",
        price: "See server",
      },
      {
        name: "Friday & Saturday — Weekend Menu",
        description:
          "Chef weekend specials, late-night bites, and live entertainment. Kitchen stays open late.",
        price: "See server",
      },
    ],
  },
];
