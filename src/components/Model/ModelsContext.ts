import React, { createContext, ReactNode } from "react";

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModels: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export default createContext<ModelsContext>({} as ModelsContext);
