import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import noCoverImg from '../assets/images/no-cover.png';

const SearchResults = ({
  searchResults, onChangeShelf, maxRating, bookRatings, onChangeRating,
}) => (
  searchResults.length > 0 && (
    <div>
      <h3>{`Search returned ${searchResults.length} books`}</h3>
      <ol className="books-grid">
        {searchResults.map((book) => {
          // check if a thumbnail exists in book object
          // if not create a property with the image noCoverImg
          const finalImage = book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : noCoverImg;
          const imageLinks = { thumbnail: finalImage };
          const bookToRender = book;
          bookToRender.imageLinks = imageLinks;

          // if no title found, render text 'no title'
          const bookTitle = bookToRender.title || 'No title available';

          return (
            <BookItem
              key={bookToRender.id}
              id={bookToRender.id}
              imageUrl={bookToRender.imageLinks.thumbnail}
              title={bookTitle}
              authors={bookToRender.authors}
              shelf={bookToRender.shelf}
              onChangeShelf={onChangeShelf}
              maxRating={maxRating}
              bookRatings={bookRatings}
              onChangeRating={onChangeRating}
            />
          );
        })}
      </ol>
    </div>
  )
);

SearchResults.propTypes = {
  searchResults: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  maxRating: PropTypes.number.isRequired,
  bookRatings: PropTypes.instanceOf(Object).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default SearchResults;
