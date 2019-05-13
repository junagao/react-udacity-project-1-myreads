import React from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';
import Loading from './Loading';

const BookShelf = ({
  books, loadingBooks, onChangeShelf, bookRatings, onChangeRating,
}) => {
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
                    {loadingBooks
                      ? (<Loading />)
                      : (
                        <BookGrid
                          books={shelfBooks}
                          onChangeShelf={onChangeShelf}
                          bookRatings={bookRatings}
                          onChangeRating={onChangeRating}
                        />
                      )}
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
  loadingBooks: PropTypes.bool.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  bookRatings: PropTypes.shape({}).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default BookShelf;
