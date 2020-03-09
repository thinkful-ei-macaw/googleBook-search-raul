import React from 'react';



class Store extends React.Component {

  state = {
    bookResults: []
  };

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=string&bookType=all')
      .then(res => res.json())
      .then(bookResults => this.setState({ bookResults }));
  }

  render() {
    // const bookResults = this.state.repos.map(bookResult => <li>{bookResults.name}</li>);
    return <ul>{this.bookResults}</ul>;
  }

  // fetch('https://www.googleapis.com/books/v1/volumes?q=string&bookType=all');
  //   .then(res => res.json())
  //   .then(bookResults => {

  //     const promises = bookResults.map(bookResults => fetch(`${bookResults.url}`));
  //     return Promise.all(promises);
  //   })
  //   .then(responses => {
  //     const missingCount = responses.reduce(
  //       (count, res) => count + (res.status === 404 ? 1 : 0), 0
  //   );
  //     console.log(missingCount);
  //   });
}
export default Store;