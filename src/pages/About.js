import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Link, Button  } from '@mui/material';
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          h4: {
            fontFamily: "'Libre Franklin', sans-serif;",
          },
          subtitle1: {
            fontFamily: "'Libre Franklin', sans-serif;",
          },
          h3: {
            fontFamily: "'Libre Franklin', sans-serif;",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
            contained: {
                backgroundColor: "#04789a"
            }
        }
      }
    },
  });

function About() {

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>About | Simple F1</title>
                <meta name='description' content='About the F1 Grand Prix statistic site'/>
            </Helmet>
            <div class="flex-wrapper">
                <Header raceInfo={""}></Header>
                <div className='about-content'>
                    <Box component="img" sx={{width: "200px"}} alt="Race car icon" src={process.env.PUBLIC_URL + '/assets/images/racing-car.png'}/>
                    <Typography sx={{ color:"black", paddingTop: 2 }} variant="h3" component="div">
                        About
                    </Typography>
                    <Typography sx={{ color:"black", paddingTop: 2 }}>
                        Welcome to Simple F1!
                    </Typography>
                    <Typography sx={{ color:"black", paddingTop: 2}}>
                        The goal of this site is to display all the most essential F1 race statistics in a simple, easy-to-view format. The Grand Prix race data is sourced from
                        <Link  underline="none" href={"http://ergast.com/mrd/"}> Ergast </Link>
                        and the
                        <Link  underline="none" href={"https://www.formula1.com/en.html"}> F1 </Link>
                        website.
                        Icon by
                        <Link underline="none" href={"https://www.flaticon.com/free-icons/car"}> Smashicons</Link>.
                    </Typography>
                    <Typography sx={{ color:"black"}}>
                        If you have any feedback or ideas on what other stats you'd like to see, send me a message below.
                    </Typography>
                    <Box sx={{ paddingTop: 2 }}>
                        <Link  underline="none" href={"mailto:" + process.env.REACT_APP_CONTACT_EMAIL}>
                            <Button variant="contained">Contact</Button>
                        </Link>
                    </Box>
                </div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
};
export default About;