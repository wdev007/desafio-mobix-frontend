import React from "react";
import { Stack } from "@chakra-ui/react";
import AppCheckBox from "../../../../../shared/components/checkbox";

const StackCheckboxChildren = () => {
  return (
    <Stack spacing={10} direction="row">
      <AppCheckBox isCheked={false} handleChange={() => {}} />
      <AppCheckBox isCheked={false} handleChange={() => {}} />
      <AppCheckBox isCheked={false} handleChange={() => {}} />
      <AppCheckBox isCheked={false} handleChange={() => {}} />
      <AppCheckBox isCheked={false} handleChange={() => {}} />
    </Stack>
  );
};

export default StackCheckboxChildren;
