import { createContext, Dispatch, SetStateAction, useState, FC } from "react";
import { ICommonFC } from "../interfaces/common";

interface IFilterContext {
  assigned: boolean;
  setAssigned: Dispatch<SetStateAction<boolean>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  label: string;
  setLabel: Dispatch<SetStateAction<string>>;
}

export const FiltersContext = createContext<IFilterContext>({
  assigned: false,
  setAssigned: () => {},
  language: "Python",
  setLanguage: () => {},
  label: "hacktoberfest",
  setLabel: () => {},
});

const FiltersContextProvider: FC<ICommonFC> = ({ children }) => {
  const [assigned, setAssigned] = useState(false);
  const [language, setLanguage] = useState("Python");
  const [label, setLabel] = useState("hacktoberfest");

  return (
    <FiltersContext.Provider
      value={{ assigned, setAssigned, language, setLanguage, label, setLabel }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
