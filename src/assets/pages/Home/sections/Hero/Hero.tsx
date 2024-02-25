import { Container, Grid, Typography, styled } from "@mui/material"
import perfil from "../../../../images/perfil.jpg"


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
          <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <StyledImg src={perfil} />
                </Grid>
                <Grid item xs={8}>
                    <Typography color="primary" variant="h1" >Felipe Oliveira</Typography>
                    <Typography color="primary" variant="h2" >Desenvolvedor Front-End</Typography>
                </Grid>
            </Grid>
            </Container>
        </StyledHero>
        </>
    )
}

export default Hero
