import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import whatsappImg from "../images/iphone_whatsapp_h350px.svg"

const useStyles = makeStyles(theme => ({
  banner: {
    width: "100%",
    height: "350px",
  },
  iPhoneTextWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    position: "relative",
    width: "330px",
    height: "350px",
    background: `url('${whatsappImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  iPhoneTextTitle: {
    position: "absolute",
    top: "60px",
    left: "80px",
  },
  iPhoneTextBody: {
    position: "absolute",
    top: "100px",
    left: "40px",
    width: "260px",
    "& > p": {
      backgroundColor: "#e2ffc7",
      color: "#11230b",
      fontSize: ".95em",
      borderRadius: "5px",
      padding: "2px 6px",
      marginBottom: "3px",
    },
  },
  bannerTextWrapper: {
    padding: "10px 15px",
  },
}))
const BannerWhatsApp = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.banner}
    >
      <Grid item container className={classes.iPhoneTextWrapper}>
        <Typography className={classes.iPhoneTextTitle}>
          Caro Cliente
        </Typography>
        <div className={classes.iPhoneTextBody}>
          <Typography>
            Você já pode solicitar o agendamento do seu atendimento pelo
            WhatsApp!!1!
          </Typography>
          <Typography>
            Basta clicar no link abaixo, do seu celular, e começar a teclar com
            a gente!
          </Typography>
          <Typography>
            <a
              href="https://wa.me/556239374650"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wa.me/556239374650
            </a>
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={10}
        md={6}
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Agende seu atendimento online ou pelo WhatsApp!</strong>
        </Typography>
        <Typography align="center">
          Agora você pode agendar seu atendimento diretamente pelo site, ou
          solicitar o agendamento pelo WhatsApp!
        </Typography>
        <Typography paragraph align="center">
          Clique no botão abaixo e faça seu agendamento agora mesmo!
        </Typography>
        <Button
          component={AnchorLink}
          offset="104"
          href="#agendamento"
          variant="contained"
          color="primary"
          align="center"
        >
          Agende seu atendimento
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerWhatsApp