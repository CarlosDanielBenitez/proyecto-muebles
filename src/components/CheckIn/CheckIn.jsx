import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

const CheckIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el inicio de sesión o el registro
    if (isSignIn) {
      // Simulando inicio de sesión exitoso
      console.log("Inicio de sesión exitoso con:", email, password);
    } else {
      // Simulando registro exitoso
      console.log("Registro exitoso con:", email, password);
    }
    // Redireccionar a otra página después de realizar la acción deseada
    // Puedes utilizar <Link> o history.push() aquí
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          {isSignIn ? "Iniciar sesión" : "Crear cuenta"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignIn ? "Iniciar sesión" : "Registrarse"}
          </Button>
          <Button
            fullWidth
            variant="text"
            color="primary"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "Crear una cuenta"
              : "¿Ya tienes una cuenta? Iniciar sesión"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CheckIn;
