const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { className: "name" }, props.name),
    React.createElement("p", { className: "description" }, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "heading" },
      "Padre Gino's classic & popular Pizzas"
    ),
    React.createElement(Pizza, {
      name: "Margherita Magic",
      description: "Tomato sauce, fresh mozzarella, basil, olive oil",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Inferno",
      description: "Spicy pepperoni, mozzarella, chili flakes, tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Veggie Supreme",
      description:
        "Bell peppers, red onion, mushrooms, olives, spinach, mozzarella, tomato sauce",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
