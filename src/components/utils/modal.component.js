import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalId, title, btnMessage, modalStatus }) => (
  <div className="modal fade" id={ modalId } tabIndex={-1} role="dialog" aria-labelledby={`${modalId}Label`} aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id={`${modalId}Label`}>{ title }</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        {this.props.children}
        </div>
        <div className="modal-footer">
          <button type="button"
            className="btn btn-warning"
            onClick={ modalStatus() }
            data-dismiss="modal">Close</button>
          <button type="submit"
            onClick={ modalStatus() }
            className="btn btn-success">{ btnMessage }</button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;

