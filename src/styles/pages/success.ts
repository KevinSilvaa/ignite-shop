import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: "2rem",
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: 700,

    "&:hover": {
      color: "$green300",
    },
  }
});

export const ImageContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  img: {
    objectFit: "cover",
  }
});
