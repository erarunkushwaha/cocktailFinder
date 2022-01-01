import React, {useRef} from "react";

export default function SearchForm({ searchTerm }) {
    const  searchValue = useRef("");

    React.useEffect(() => {
        searchValue.current.focus()
    }, []);
  const  handleSubmit = (e) => {
        e.preventDefault();
  }
  const  serachCocktail = () => {
      searchTerm(searchValue.current.value)
  }
  return (
      <section className="section">
        <h2 className="section-title">
          search cocktails
        </h2>
        <form action="" className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">

            <label htmlFor="name">search your favourite cocktail</label>
            <input type="text" name={"name"} id={"name"} onChange={serachCocktail} ref={searchValue} />
          </div>
        </form>

      </section>
  );
}
