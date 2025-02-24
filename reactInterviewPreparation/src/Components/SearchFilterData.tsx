import { useState } from "react";

const data = ["apple", "orange", "greenApple", "banana"];

const SearchFilterData = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchFruits = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((el) =>
    el.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        onChange={onSearchFruits}
        placeholder="Search fruits..."
      />

      {filteredData.length > 0 ? (
        filteredData.map((el) => {
          const index = el.toLowerCase().indexOf(searchTerm);
          if (index === -1) return <span key={el}>{el} </span>;

          return (
            <span key={el}>
              {el.substring(0, index)}
              <span style={{ backgroundColor: "yellow" }}>
                {el.substring(index, index + searchTerm.length)}
              </span>
              {el.substring(index + searchTerm.length)}{" "}
            </span>
          );
        })
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchFilterData;
