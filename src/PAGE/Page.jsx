import React, { useState } from "react";
const Page = ({ sum, setpage, next }) => {
  let page = [];
  for (let i = 1; i <= Math.ceil( sum / next); i++) {
    page.push(i);
  }
  return (
    <div className="pagenow">
      {page.map((pages) => {
        return (
          <div className="pag">
            <button onClick={() => setpage(pages)}>{pages}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
