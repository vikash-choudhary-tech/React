import { useState } from "react";
import "./Pagination.css";

const pagesToDisplay = 8;
const Pagination = ({ pagesArray }) => {
  const [pages, setPages] = useState(pagesArray);
  const [startIndex, setStartIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(false);
  const [isRightDisabled, setisRightDisabled] = useState(false);
  const [selectedItem, setIsSelectedItem] = useState(0);

  function handleFirstPage() {
    setStartIndex(0);
    displayCurrentItem(0);
  }

  function handleLastPage() {
    setisRightDisabled(true);
    setStartIndex(pages.length - pagesToDisplay);
    displayCurrentItem(pages.length - 1);
  }

  function handleLeft() {
    displayCurrentItem(selectedItem - 1);
    setisRightDisabled(false);
    startIndex !== 0 ? setStartIndex(startIndex - 1) : disableLeft();
  }

  function handleRight() {
    displayCurrentItem(selectedItem + 1);
    setIsLeftDisabled(false);
    startIndex !== pages.length - pagesToDisplay
      ? setStartIndex(startIndex + 1)
      : disableRight();
  }

  function disableLeft() {
    if (startIndex === 0) setIsLeftDisabled(true);
  }

  function disableRight() {
    if (startIndex === pages.length - pagesToDisplay) setisRightDisabled(true);
  }

  function displayCurrentItem(index) {
    setIsSelectedItem(index);
  }
  return (
    <div className="pagination">
      <button disabled={isRightDisabled} onClick={handleFirstPage}>
        First Page
      </button>
      <button disabled={isLeftDisabled} onClick={handleLeft}>
        Left
      </button>
      {pages
        .map((item, index) => (
          <button
            key={item}
            onClick={() => displayCurrentItem(index)}
            className={`pages ${selectedItem === index ? "selectedItem" : ""}`}
          >
            {item}
          </button>
        ))
        .slice(startIndex, startIndex + pagesToDisplay)}
      <button disabled={isRightDisabled} onClick={handleRight}>
        Right
      </button>
      <button disabled={isRightDisabled} onClick={handleLastPage}>
        Last Page
      </button>
    </div>
  );
};

export default Pagination;
