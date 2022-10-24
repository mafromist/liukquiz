import React from "react";
import { useDispatch } from "react-redux";
import { Box, FormControl, TextField } from "@mui/material";
import { handleAmountChange } from '../redux/actions'

const TextFieldComponent = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          variant="outlined"
          type="number"
          size="small"
          label="Amount of Questions"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComponent;
