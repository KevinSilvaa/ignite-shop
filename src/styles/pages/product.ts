import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  }
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    color: "$gray300",
    fontSize: "$2xl",
  },

  span: {
    color: "$green300",
    fontSize: "$2xl",
    marginTop: "1rem"
  },

  p: {
    marginTop: "2.5rem",
    color: "$gray300",
    lineHeight: 1.6,
    fontSize: "$md"
  },

  button: {
    backgroundColor: "$green500",
    color: "$white",
    fontSize: "$md",
    fontWeight: 700,
    borderRadius: 8,
    padding: "1.25rem 2rem",
    border: 0,
    cursor: "pointer",
    marginTop: "auto",
    transition: "all 0.2s ease-in-out",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    }
  }
});
