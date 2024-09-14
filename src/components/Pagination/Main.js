import Pagination from "./Pagination";
import "./styles.css";

export default function Main() {
  const pages = [];
  for (let i = 1; i <= 1000; i++) pages.push(i);

  return (
    <div className="Main">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Pagination pagesArray={pages} />
    </div>
  );
}
