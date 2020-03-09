import React from 'react';


class Form extends React.Component {

  state = {
    initialSearch: [],
    books: []
  }




  render() {
    return (
      <div className="searchFilter">
        <form className="searchBar">
          <input type="text" placeholder="Search Books" />
          <button type="submit">Search</button>
          <select>
            <option value="default">Book Options</option>
            <option value="free e-books">e-books</option>
            <option value="type of book">Print</option>
          </select>
          <select>
            <option value="default">All</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>


        </form>
      </div>
    );
  };
}

export default Form;