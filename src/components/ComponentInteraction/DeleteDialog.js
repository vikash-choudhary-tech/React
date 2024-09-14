import "./DeleteDialog.css";
const DeleteDialog = ({ itemId, removeItem, handleDialog }) => {
  return (
    <form onSubmit={() => removeItem(itemId)}>
      <div className="modal-container">
        <div className="modal_title">Delete Item</div>
        <div className="modal-body">
          Are You Sure You Want to delete this item?
        </div>
        <div className="modal-footer">
          <button type="submit">Confirm</button>
          <button
            onClick={() => {
              handleDialog(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeleteDialog;
