import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModels, getModelByName } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisterModels(modelName),
    [modelName, unregisterModels]
  );

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  );

  return {
    getModel,
    registerModel,
  };
}
