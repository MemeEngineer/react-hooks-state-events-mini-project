import React from "react";


function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
{props.categories.forEach(category => 
  <button onClick={()=> console.log('hello')}>{category}</button>)}
      
    </div>
  );
}

export default CategoryFilter;
