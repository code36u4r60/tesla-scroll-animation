import { Buttons, Container, Heading } from "./styles";

interface Props {
  label: string;
  description: string;
  showBtn?: boolean;
}

export const DefaultOverlayContent = ({
  label,
  description,
  showBtn = true,
}: Props) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <p>{description}</p>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        {showBtn && <button className="white">Existing Inventory</button>}
      </Buttons>
    </Container>
  );
};
