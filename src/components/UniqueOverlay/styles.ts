import { motion } from "framer-motion";
import styled from "styled-components";
import { BurgerSVG, LogoSVG } from "./IconSVG";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 52px;
`;

export const Logo = styled(LogoSVG)`
  width: 120px;
  cursor: pointer;
`;

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding-right: 5px;
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    li {
      list-style: none;
      font-size: 14px;
      a {
        text-decoration: none;
        color: #393c41;
        &:hover {
          color: #000;
        }
      }
    }
  }
  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;
    ul {
      flex-direction: row;
    }
  }
`;
