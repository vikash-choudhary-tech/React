import DeleteDialog from "./DeleteDialog";
import { useEffect, useRef, useState } from "react";

const Child = ({ description, id, removeItemFromParent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  function handleOutsideClick(event) {
    console.log("Clicked", ref);
    if (ref.current && !ref.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleDialog(event) {
    setIsModalOpen(event);
  }

  return (
    <div>
      <div className="item_description">{description}</div>
      <div className="action-button">
        <button className="removeItemButton" onClick={handleDialog}>
          Delete Item
        </button>
      </div>
      {isModalOpen && (
        <div ref={ref}>
          <DeleteDialog
            itemId={id}
            removeItem={removeItemFromParent}
            handleDialog={handleDialog}
          />
        </div>
      )}
    </div>
  );
};

export default Child;
