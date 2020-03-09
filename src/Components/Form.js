import React from 'react';


class Form extends React.Component {

  state = {
    books: []
  }


  render() {
    return (

      <form className="searchBar">
        <input type="text" placeholder="Search Books" />
        <button type="submit">Search</button>
        <select>
          <option value="free e-books">Free e-books</option>
          <option value="type of book">Book type</option>
        </select>

      </form>
    );
  };
}

export default Form;