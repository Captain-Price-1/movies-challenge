import React from "react";
import ServiceProvider from "./serviceProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const intro = () => {

=======
  let c = 6;
  let n = 55;
  let m = 67;
>>>>>>> component
  return (
    <article className="intro-main">
      <div className="intro-screen">
        {/* <img src="" alt="" /> */}
        <div className="page-intro">
          <h1>Sample Movie</h1>
          <div className="info">
            <p>Popular|God of Mischeif is backafter Endgame:</p>
          </div>
        </div>
      </div>
      <ServiceProvider />
    </article>
  );
};

export default intro;
