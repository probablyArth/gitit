import { createContext } from "react";
import { FilterState } from "../enums/Filters";

interface IFiltersContext {
  state: FilterState;
  assigned: boolean;
}

export const FiltersContext = createContext({});

const FiltersContextProvider = () => {
  return <div>FiltersContextProvider</div>;
};

export default FiltersContextProvider;
