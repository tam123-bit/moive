import React, { useState } from "react";
import { Data } from "../Data/Data";
import { Link } from "react-router-dom";
import Page from "./Page";
import Movielist from "./Movielist";
const Movie = () => {
  const [page,setpage] = useState(1)
  const [next ,setnext] = useState(12)
  const index = page * next
  const last = index - next

  const pageitem = Data.slice(last,index)
  return (
    <section>
       <div className="pagelist">
        {pageitem.map((item) => <Movielist item={item} />)}
       </div>
      <Page  sum={Data.length} next={next} setpage={setpage}  />
    </section>
  );
};

export default Movie;
