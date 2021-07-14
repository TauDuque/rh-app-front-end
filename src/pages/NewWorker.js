import React, { useEffect, useContext, useState } from "react";
import { TextField, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inside: {
    height: "540px",
    width: "450px",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    borderRadius: "18px",
    border: "solid #AFB1A9",
    backgroundColor: "#EFE7CC",
    boxShadow: "2px 1px 75px 1px rgba(0, 0, 0, 0.54)",
  },
}));

const NewWorker = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [hiring, setHiring] = useState("");
  const [sector, setSector] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="center-att">
      <Box className={classes.inside}>
        <Box marginTop={2}>
          <Typography variant="h5">Cadastrar Novo Funcionário</Typography>
        </Box>

        <Box>
          <TextField></TextField>
        </Box>
        <Box>
          <TextField></TextField>
        </Box>

        <Box>NASCIMENTO</Box>
        <Box>admissao</Box>
        <Box>setor</Box>
        <Box>cargo</Box>
        <Box>nivel</Box>
      </Box>
      ;
    </div>
  );
};

export default NewWorker;
