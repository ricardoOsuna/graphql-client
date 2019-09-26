import React from 'react';

// TODO: Create mutation to delete any item
const DestroyItem = ({ _id, itemType }) => (
  <div className="input-group-append ml-2">
    <button type="button"
      className="btn btn-danger">
      {/* onClick={ () => removeItem(index, itemType) }> */}
        &times;
    </button>
  </div>
);

export default DestroyItem;