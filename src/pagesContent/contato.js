import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Article, Section } from "../components/section"
import InstagramIcon from "@material-ui/icons/Instagram"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk"

const ContatoSectionContent = () => {
  const {
    file: { publicURL: place },
  } = useStaticQuery(graphql`
    query {
      file(name: { eq: "local-world" }, ext: { eq: ".svg" }) {
        publicURL
      }
    }
  `)

  const useStyles = makeStyles(theme => ({
    listItem: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    listItemIcon: {
      minWidth: "30px",
      "& > svg": {
        color: "#fff",
      },
    },
    locationImg: {
      width: "30vw",
      height: "auto",
      maxWidth: "75px",
      maxHeight: "75px",
      margin: "0 5px",
      filter: "invert()",
    },
    alignTextRight: {
      textAlign: "right",
    },
    contactLink: {
      textDecoration: "none",
      color: "#fff",
    },
  }))

  const classes = useStyles()

  return (
    <>
      <Article id="contato" background="true">
        <Section style={{ textAlign: "center" }} xs={12} sm={12} md={9} lg={8}>
          <Typography component="h1" variant="h4">
            Endereço e Contato
          </Typography>

          <Typography>
            Agende um horário, tire dúvias, faça uma visita. O atendimento
            presencial e pelos canais de comunicação se dá de segunda a
            sexta-feira das 08:00h as 17:00h
          </Typography>
          <br />

          <Grid container xs={12} justify="space-around">
            <Grid
              container
              item
              xs={12}
              sm={6}
              justify="space-around"
              alignItems="center"
            >
              <List dense="dense" className={classes.list}>
                <ListItem>
                  <ListItemText
                    className={classes.alignTextRight}
                    primary={
                      <>
                        Av. Universitária, nº 2221
                        <br /> Anashopping, LUC 100
                        <br /> Anápolis/GO
                        <br /> CEP: 75.083-350
                      </>
                    }
                  />
                  <ListItemIcon className={classes.listItemIcon}>
                    <img
                      src={place}
                      alt="localização"
                      className={classes.locationImg}
                    />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justify="space-around"
              alignItems="center"
            >
              <List dense="dense" className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <Typography variant="body2">
                          <Link
                            className={classes.contactLink}
                            target="_blank"
                            href="mailto:primeirocartorioregistro@gmail.com"
                          >
                            primeirocartorioregistro
                            <wbr />
                            @gmail.com
                          </Link>
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PhoneInTalkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        href="tel:+556239374650"
                      >
                        (62) 3937-4650
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <WhatsAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        target="_blank"
                        href="https://wa.me/556239374650"
                      >
                        (62) 3937-4650
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        target="_blank"
                        href="https://www.instagram.com/ri1anapolis/"
                      >
                        @ri1anapolis
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Section>
      </Article>

      <iframe
        title="cri1_map"
        width="100%"
        height="200"
        frameborder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL4ZOwnikXpMR2Wydv1gsibk&key=AIzaSyBZGM23zN53u0yVFX3rhUA6Yyg7b1lwzY0"
        allowfullscreen
      ></iframe>
    </>
  )
}

export default ContatoSectionContent
