import { lazy, Suspense } from "react";

const Lazy = () => {
  //   const LazyComp = lazy(() => import("../Todo/Todo"));

  const LazyComp = lazy(() => {
    return new Promise((res) => {
      setTimeout(() => {
        res(import("../Todo/Todo"));
      }, 3000);
    });
  });

  return (
    <>
      <Suspense fallback={"Loading...."}>
        <LazyComp />
      </Suspense>
    </>
  );
};

export default Lazy;
