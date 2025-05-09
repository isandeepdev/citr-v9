import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <>
      <h1 className="title">Padre Gino's classic & popular Pizzas</h1>
      <Pizza
        name="Margherita Magic"
        description="Tomato sauce, fresh mozzarella, basil, olive oil"
      />
      <Pizza
        name="Pepperoni Inferno"
        description="Spicy pepperoni, mozzarella, chili flakes, tomato sauce"
      />
      <Pizza
        name="Veggie Supreme"
        description="Bell peppers, red onion, mushrooms, olives, spinach, mozzarella, tomato sauce"
      />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
