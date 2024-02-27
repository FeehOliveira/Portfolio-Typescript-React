import { Button, Container, Grid, Typography, styled } from "@mui/material"
import perfil from "../../../../images/perfil.jpg"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import MailIcon from '@mui/icons-material/Mail';


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                <StyledImg src={perfil} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color="primary" variant="h1" textAlign="center" >Felipe Oliveira</Typography>
                    <Typography color="primary" variant="h2" textAlign="center" >Desenvolvedor Front-End</Typography>
                    <Grid container>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <Button>
                    <DownloadForOfflineIcon />
                        Download CV
                        </Button>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <Button>
                    <MailIcon/>
                        Contact me
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </StyledHero>
        </>
    )
}

export default Hero
