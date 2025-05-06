import styled from "styled-components";

// Testimonials container styles
export const TestimonialsBox = styled.section`
  padding: 3.75rem 1.5rem;
  overflow-x: visible; /* allow the inner scroll box to show its scroll */

  > div {
    display: flex;
    flex-direction: column;
    max-width: 73.125rem;
    margin: 0 auto;
    align-items: center;

    > article {
      max-width: 37.5rem;
      p {
        font-size: 1rem;
        line-height: 160%;
        color: var(--col-60);
        margin-bottom: 3.25rem;
      }

      div {
        display: flex;
        gap: 0.75rem;
      }

      button {
        height: 3.5rem;
        width: 3.5rem;
        font-size: 1.5rem;
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ease 0.5s;
        border: 1px solid var(--col-30);
        color: var(--col-30);

        &:hover {
          background-color: var(--col-30);
          color: var(--col-70);
        }
      }
    }
  }
  @media (min-width: 768px) {
    text-align: center;

    > div {
      > article {
        div {
          justify-self: center;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    text-align: unset;
    > div {
      flex-direction: row;
      gap: 3.75rem;

      > * {
        max-width: 50%;
      }
    }
  }
`;

// **Make this auto instead of hidden** so it can actually scroll
export const ScrollBox = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: hidden; /* ← changed back to auto */
  width: 100%;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  text-align: left;
  max-width: 37.5rem;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  > * {
    scroll-snap-align: start;
    flex-shrink: 0; /* keep each card at its own width */
  }

  @media (min-width: 768px) {
    /* margin: 0 7.5rem;
    gap: 7.5rem; */
  }
`;

//testimonial card styles
export const TestimonialCardBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  margin: 0 auto;
  margin-top: 1.8rem;
  max-width: 37.5rem;

  p {
    color: var(--col-60);
    letter-spacing: 1%;
    line-height: 1.5rem;
  }

  .image {
    background-image: ${({ $img }) => `url(${$img})`};
    background-size: cover;
    background-position: center;
    height: 6.5rem;
    width: 4.56rem;
    border-radius: 0.625rem;
    @media (min-width: 768px) {
      height: 15.25rem;
      width: 10.625rem;
    }
  }

  article {
    width: 100%;
  }

  .titleBox {
    display: flex;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      line-height: 1.2rem;
      font-weight: 500;
      letter-spacing: 0;
      text-transform: capitalize;
    }
  }

  .quote-icon {
    background-color: var(--col-30);
    padding: 0.375rem;
    border-radius: 0.125rem;
    color: var(--col-70);
    height: fit-content;
  }
`;
