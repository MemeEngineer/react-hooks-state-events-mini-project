import React from "react";

function CategoryFilter({categories, updateCat, currentCat}) {
function handleClick(event){
updateCat(event.target.value)
};

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category)=> (
        <button key={category}  value={category} onClick={(event)=>handleClick(event)}
         className= {(currentCat === category) ? "selected" : null}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;