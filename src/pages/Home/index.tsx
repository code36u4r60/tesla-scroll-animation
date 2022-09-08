import { DefaultOverlayContent } from "../../components/DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../../components/Model";
import { UniqueOverlay } from "../../components/UniqueOverlay";
import { Container } from "./styles";

export const models = [
  {
    title: "Model Y",
    description: "",
  },
  {
    title: "Model 3",
    description: "Marcar Test Drive",
  },
  {
    title: "Model S",
    description: "Agende uma Consulta Virtual",
  },
  {
    title: "Model X",
    description: "Agende uma Consulta Virtual",
  },
  {
    title: "Solar e Powerwall",
    description: "Energia para tudo",
  },
  {
    title: "Acessórios",
    description: "",
  },
];

export const Home = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((model) => (
            <ModelSection
              key={model.title}
              className="colored"
              modelName={model.title}
              overlayNode={
                <DefaultOverlayContent
                  label={model.title}
                  description={model.description}
                />
              }
            />
          ))}
        </div>
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};
