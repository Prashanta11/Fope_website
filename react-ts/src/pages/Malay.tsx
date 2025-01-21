import React from "react";
import malay1 from "../assets/images/malay1.jpeg";
import malay2 from "../assets/images/malay2.jpeg";
import malay3 from "../assets/images/malay3.jpeg";
import malay4 from "../assets/images/malay4.jpeg";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Nasi Lemak",
    description:
      "Fragrant rice cooked in coconut milk served with sambal, boiled egg, and anchovies.",
    price: 5.99,
    imageUrl: malay1,
  },
  {
    id: 2,
    name: "Rendang",
    description: "Slow-cooked beef in a rich coconut milk and spice paste.",
    price: 12.99,
    imageUrl: malay2,
  },
  {
    id: 3,
    name: "Satay",
    description:
      "Grilled skewered meat served with peanut sauce ,spicy and hot.",
    price: 8.99,
    imageUrl: malay3,
  },
  {
    id: 4,
    name: "Laksa",
    description:
      "Spicy noodle soup with a mix of coconut milk and fish-based broth.",
    price: 10.99,
    imageUrl: malay4,
  },
];

const Malay: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8">
      <h1 className="border-2 border-gray-200 bg-gray-900 mx-auto mb-6 px-3 py-2 rounded-full w-max font-bold text-3xl text-center text-customTeal">
        Malay Cuisine
      </h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg transition-shadow overflow-hidden group"
          >
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="right-0 bottom-0 absolute flex justify-center items-center pb-4 w-full">
                <button className="group-hover:block hidden bg-customTeal px-4 py-2 rounded-full text-white">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="border-2 border-customTeal mt-2 px-2 rounded-md w-max font-bold text-customTeal">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Malay;
