import React from "react";

const Jumbotron = () => {
  return (
    <div className="row align-items-md-stretch">
      <div className="col-md-12">
        <div className="h-100 p-5 text-white bg-secondary rounded-3">
          <h2>Change the background</h2>
          <p>
            Swap the background-color utility and add a `.text-*` color utility
            to mix up the jumbotron look. Then, mix and match with additional
            component themes and more. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloribus provident illum repellendus fugiat
            dolorem placeat. Consectetur ad deserunt sapiente dolores est
            laudantium dicta! Nostrum fuga deleniti cum quae nisi veniam
            aliquid. Consequuntur ipsam, a quisquam asperiores dolores officia.
            Dicta eaque fugiat unde eveniet cumque explicabo.
          </p>
          <button className="btn btn-primary" type="button">
            Example button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
