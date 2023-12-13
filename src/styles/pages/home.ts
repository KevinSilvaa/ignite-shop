import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: "656px",
})

export const Product = styled('a', {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  minWidth: '32.5rem',
  width: "100%",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    borderRadius: 6,
    backgroundColor: "rgba(32, 32, 36, 0.90)",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: 700,
      color: "$green300"
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 1,
    }
  }
})
