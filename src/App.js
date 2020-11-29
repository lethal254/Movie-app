import "./base.css";
import appStyles from "./App.module.css";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={appStyles.app}>
      <Navbar />
      <MoviesList />
    </div>
  );
}

export default App;
