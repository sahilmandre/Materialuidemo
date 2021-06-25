import "./App.css";
import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  BottomNavigation,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Sahil Mandre</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Hello, I am Sahil Mandre.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              distinctio fugit possimus dignissimos sunt aliquam alias ration.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="conatined" color="secondary">
                    See Photos
                  </Button>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>

                  <Button variant="outlined" color="default">
                    My work
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
