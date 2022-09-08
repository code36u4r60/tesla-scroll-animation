import { Buttons, Container, Heading } from "./styles";

interface Props {
  label: string;
  description: string;
}

export const DefaultOverlayContent = ({ label, description }: Props) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <p>{description}</p>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};
