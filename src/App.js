import './App.scss';
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import TableCatalog from './components/Catalogue/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Searchbar />
        <TableCatalog />
      </section>
    </div>
  );
}

export default App;
