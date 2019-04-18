import React from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

const BookShelf = (props) => {
  const { books } = props;

  const shelfTypes = [
    { id: 1, type: 'currentlyReading', title: 'Currently Reading' },
    { id: 2, type: 'wantToRead', title: 'Want to Read' },
    { id: 3, type: 'read', title: 'Read' },
  ];

  return (
    <React.Fragment>
      <div className="list-books-content">
        {shelfTypes.map((shelf) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);
          return (
            <div key={shelf.id}>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <BookGrid books={shelfBooks} />
                  </ol>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

BookShelf.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookShelf;
