import { useGlobalContext } from "../context/context";
import { toast } from "react-toastify";

const SearchForm = () => {
  const { setTerm } = useGlobalContext();

  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) {
      return toast.error("Please provide a value!");
    }

    setTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images 🖼️</h1>
      <form onSubmit={handleSubmitSearchForm} className="search-form">
        <input
          className="form-input search-input"
          type="text"
          placeholder="Search image.."
          name="search"
        />

        <button type="submit" className="btn">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
