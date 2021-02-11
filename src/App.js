import './App.scss';
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Searchbar />
      </section>
    </div>
  );
}

export default App;
