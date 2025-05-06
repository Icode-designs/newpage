import React from "react";
import { BookingArticleBox } from "./bookingArticleStyles";
import Article from "components/sharedComponents/article/Article";

function BookingArticle() {
  return (
    <BookingArticleBox>
      <div>
        <p>How can we help you today?</p>
        <Article
          heading="Take your time to fill this form"
          desc="We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner"
        />
      </div>
    </BookingArticleBox>
  );
}

export default BookingArticle;
