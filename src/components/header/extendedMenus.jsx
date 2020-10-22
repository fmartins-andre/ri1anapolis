import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import AnchorLink from "react-anchor-link-smooth-scroll"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import store from "./reduxStore"

const ExtendedMenus = ({ linksGroups }) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  const handleClick = () => {
    store.dispatch({ type: "CLOSE_MENU" })
  }

  const groups = linksGroups.map((group, index) => {
    const linksList = group.links.map((link, index) => {
      const isAnchor = link?.href.split("")[0] === "#"
      const _key = `${group.groupName}-link${index}`
      const _component = isAnchor ? AnchorLink : "a"
      const _target = link.target || isAnchor ? null : "_blank"
      const _rel = link.rel || isAnchor ? null : "noopener noreferrer"
      const _offset = isAnchor ? "89" : null

      return (
        <ListItem
          dense
          key={_key}
          component={_component}
          href={link.href}
          target={_target}
          rel={_rel}
          offset={_offset}
          className={classes.exMenuItem}
          onClick={handleClick}
        >
          <ListItemText
            primary={link.text}
            secondary={link.description || null}
            classes={{
              primary: classes.exMenuItemText,
              secondary: classes.exMenuItemDescription,
            }}
          />
        </ListItem>
      )
    })

    return (
      <Grid
        key={`${group.groupName}-${index}`}
        item
        container
        direction="column"
        alignContent="center"
        xs={6}
        sm={4}
        md={3}
        className={classes.exMenuGroup}
      >
        <Typography variant="subtitle2" className={classes.exMenuTitle}>
          {group.groupName}
        </Typography>
        <List component="nav" aria-label={group.groupName}>
          {linksList}
        </List>
      </Grid>
    )
  })

  return groups
}

export default ExtendedMenus
