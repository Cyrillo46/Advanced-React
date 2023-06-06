import Starter from "./tutorial/01-useState/starter/01-error-example";

let count = 0;

const handleClick = () => {
  count += 1;
  console.log("Click!");
};

function App() {
  return (
    <div className="container">
      <Starter />
      <button
        increment={handleClick}
        style={{
          padding: "1em",
          width: "5em",
          backgroundColor: "green",
          border: "none",
          borderRadius: "5px",
        }}>
        {count}
      </button>
    </div>
  );
}

export default App;
