
import { Typography, Button, Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


const FinalScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {score} = useSelector(state => state);

  const handleNewTest = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    navigate('/')
  }
  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score
        {score}
      </Typography>
      <Button variant="outlined" onClick={handleNewTest}>Let's do a New Test</Button>
    </Box>
  );
};

export default FinalScreen;
