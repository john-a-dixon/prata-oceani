import './css/App.css';

function App() {
  const abc = ["A", "B", "C"]
  const abcList = abc.map((x, i) => <li key={i}>{x}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!</h1>
        <p>{4 + 5}</p>
        <ul>{abcList}</ul>
      </header>
    </div>
  );
}

export default App;
