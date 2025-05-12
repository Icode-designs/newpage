import React from "react";

// components
import Article from "components/sharedComponents/article/Article";

// styles
import { BookingArticleBox } from "./bookingArticleStyles";

function BookingArticle() {
  const articleDetails = {
    heading: "Take your time to fill this form",
    desc: "We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner",
  };

  return (
    <BookingArticleBox>
      <div>
        <p>How can we help you today?</p>
        <Article articleDetails={articleDetails} />
      </div>
    </BookingArticleBox>
  );
}

export default BookingArticle;
