import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ filter, setFilter, categories }) => {
  //Temporaly disabled due a bug with CustomerCatalog categories
  // const getCategoryName = () => {
  //   const filter = categories.filter((data) => data.isActive);
  //   const { name } = filter[0];
  //   return name;
  // };

  const handleKeyPress = (event) => {
    //Debounce timer of 0.5 sec
    setTimeout(() => {
      setFilter({ ...filter, search: event.target.value });
    }, 500);
  };

  return (
    <div className="search-bar">
      <div className="search-bar">
        <input
          className="input"
          type="text"
          // placeholder={`Buscar entre ${getCategoryName()}`}
          placeholder="buscar entre los productos"
          onChange={handleKeyPress}
        />
        <span>
          <FontAwesomeIcon className="icon-search" icon={faSearch} size="lg" />
        </span>
        <FontAwesomeIcon
          className="icon-faEllipsis"
          icon={faEllipsisV}
          size="lg"
        />
      </div>
    </div>
  );
};

export default Searchbar;
