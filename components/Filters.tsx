import {
  Button,
  Checkbox,
  Input,
  Paper,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { useContext } from "react";
import languagesFile from "../assets/languages.json";
import labelsFile from "../assets/labels.json";
import { FiltersContext } from "../contexts/filtersContextProvider";
const { main: languages } = languagesFile;

const Filters = () => {
  const { language, label, assigned, setAssigned, setLabel, setLanguage } =
    useContext(FiltersContext);
  return (
    <Paper p={20}>
      <Stack>
        <Title order={2} color="white">
          Filters
        </Title>
        <Select
          data={[...languages]}
          searchable
          value={language}
          onChange={(e) => {
            setLanguage(e?.toLowerCase() as string);
          }}
          label="Language"
        />
        <div>
          <Input.Wrapper id={"labelInput"} label="Label">
            <Input
              value={label}
              id="labelInput"
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
          </Input.Wrapper>
          {labelsFile.map((labelFromJson, idx) => {
            return (
              <Button
                variant={label === labelFromJson ? "light" : "default"}
                onClick={() => {
                  setLabel(labelFromJson);
                }}
              >
                {labelFromJson}
              </Button>
            );
          })}
        </div>
        <Checkbox
          label="assigned"
          onChange={(e) => {
            setAssigned(e.target.checked);
          }}
          checked={assigned}
        />
      </Stack>
    </Paper>
  );
};

export default Filters;
