import React from "react";

function MainContentIndexPage() {
  return (
    <div>
      <p>
        Vaughan:
        {/* Require: Vaughan's introduction. */}
        <br />
        If you want to explore more on the home make vegan food, use the search
        engine
        <a
          href="http://potatocastles.com/"
          title="Go to potatocastles.com"
          className="title-link"
        >
          {" "}
          Potato Castles.
        </a>
      </p>

      <p>
        Amber: I am a girl from China. Not Vegetarian yet, still craving for
        meat and no matter how full I am, I always have space for dessert.
      </p>
    </div>
  );
}

export default MainContentIndexPage;
