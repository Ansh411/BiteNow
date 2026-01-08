import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  // Apply white background only on Error Page
  useEffect(() => {
    document.body.classList.add("error-page");

    return () => {
      document.body.classList.remove("error-page");
    };
  }, []);

  return (
    <section className="page_404">
      <div className="wrapper_404">
        <div className="four_zero_four_bg">
          <h1 className="error-title">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
