import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import noCoverImg from '../assets/images/no-cover.png';

const SearchResults = (props) => {
  const { searchResults, onChangeShelf } = props;

  return (
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
              />
            );
          })}
        </ol>
      </div>
    )
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchResults;
