import { useTransform } from "framer-motion";
import useWrapperScroll from "../Model/useWrapperScroll";
import { Burger, Container, Footer, Header, Logo } from "./styles";

export const UniqueOverlay = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/" aria-label="">
              UI Clone
            </a>
          </li>
          <li>
            <a href="/" aria-label="">
              made with 💜
            </a>
          </li>
          <li>
            <a href="/" aria-label="">
              by Eduardo Queirós
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};
