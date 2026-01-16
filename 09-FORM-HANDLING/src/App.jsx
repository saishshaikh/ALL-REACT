import "./App.css";

const App = () => {

  const formhndler = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
  };

  return (
    <div>
      <form onSubmit={(e) => {
        formhndler(e);
      }}>
        <input type="text" placeholder="ENTER YOUR NAME" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
