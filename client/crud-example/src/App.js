import './App.css';
function App() {
  return (
    <div className="App">
    <h1>CRUD APPLICATION</h1>
        <form>
        <label>
        Movie Name:
        <input type="text" name="Moviename" />
        </label>
        <label>
          Review
        <input type="text" name="Reviews" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
export default App; 
