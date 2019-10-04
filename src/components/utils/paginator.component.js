import React from 'react'

const Paginator = ({ page, pages, previousPage, nextPage, changePage }) => {
  let btnPages = [];
  for (let i = 1; i <= pages; ++i) {
    btnPages.push(i);
  }

  //TODO: Add buttons to change for any page
  return (
    <div className="mt-3 pt-1 pb-1 bg-primary d-flex justify-content-center fixed-bottom">
      <button type="button"
        className="btn btn-success mr-2"
        disabled={ page === 1 ? 'disabled' : '' }
        onClick={ () => previousPage()}>
        &laquo; Previous
      </button>

      { btnPages.map(numberPage => (
        <button type="button"
          class="btn btn-primary ml-1 mr-1"
          autoFocus={ page === numberPage ? true : false }
          onClick={ changePage(numberPage, pages) }>
          { numberPage }
        </button>
      ))}

      <button type="button"
        className="btn btn-success ml-2"
        disabled={ page === pages ? 'disabled' : '' }
        onClick={ () => nextPage(pages)}>
        Next &raquo;
      </button>
    </div>
  );
};

export default Paginator;