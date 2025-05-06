import BookingArticle from "components/bookingpageComponents/bookingArticle/BookingArticle";
import BookingForm from "components/bookingpageComponents/bookingFormSection/BookingForm";
import React from "react";
import styled from "styled-components";

const BookingpageBox = styled.main`
  padding: 0 1.5rem;
  padding-top: 6.375rem;
  animation: rT 0.5s ease;
`;

function Bookingpage() {
  return (
    <BookingpageBox>
      <BookingArticle />
      <BookingForm />
    </BookingpageBox>
  );
}

export default Bookingpage;
