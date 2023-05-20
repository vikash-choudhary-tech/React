const ItemDesription = ({ description, id, removeItemFromParent }) => {
    return (
      <div>
        <div className="item_description">{description}</div>
        <div className="action-button">
        <button className="removeItemButton" onClick={() => removeItemFromParent(id)}> Delete Item</button>
        </div>
      </div>
    );
  };

  export default ItemDesription;
  