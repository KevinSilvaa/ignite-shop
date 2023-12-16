import { styled } from "@/styles/index";

export const HeaderContainer = styled('header', {
  padding: '2.5rem 0 2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
})

export const CartButton = styled("button", {
  padding: "0.75rem",
  backgroundColor: "$gray800",
  color: "#8D8D99",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  fontSize: "0.875rem",
  fontWeight: "bold",
  lineHeight: 1.6,

  "&::after": {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "$green500",
    color: "$white",
    border: "3px solid $gray900",
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  svg: {
    transition: "all 0.2s ease-in-out",
  }
})
