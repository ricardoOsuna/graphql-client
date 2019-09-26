import React from 'react';

const RemoveItem = ({ removeItem, index, itemType }) => (
  <div className="input-group-append ml-2">
    <button type="button"
      className="btn btn-danger"
      onClick={ () => removeItem(index, itemType) }>
        &times;
    </button>
  </div>
);

export default RemoveItem;