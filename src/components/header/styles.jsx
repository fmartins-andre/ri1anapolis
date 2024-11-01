import makeStyles from "@material-ui/styles/makeStyles"

const headerHeight = "90px"

const useStyles = makeStyles(theme => ({
  headerPlaceholder: {
    height: headerHeight,
  },
  header: {
    zIndex: `${theme.zIndex.appBar + 1} !important`,
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    height: headerHeight,
    background: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%), rgb(170,126,61) !important`,
  },
  title: {
    fontWeight: "800 !important",
    fontSize: "16px !important",
    color: "#3b2c12 !important",
    textShadow: "1px 1px 2px #efe1ca !important",
  },
  content: {
    padding: "10px !important",
    maxWidth: "1260px !important",
    width: "100% !important",
    display: "flex !important",
    flexGrow: "1 !important",
    justifyContent: "space-between !important",
  },
  logoContainer: {
    width: "max-content !important",
    minWidth: "300px !important",
  },
  logo: {
    width: "70px !important",
    height: "70px !important",
  },
  logoLink: {
    textDecoration: "none !important",
    outline: "none !important",
  },
  headerBarMenuButton: {
    width: "160px !important",
    padding: "0 !important",
    marginTop: "-6px !important",
    fontWeight: "300 !important",
    fontSize: "1.25em !important",
    textTransform: "lowercase !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  headerBarMenuButtonEndIcon: {
    marginTop: "4px !important",
  },
  defaultMenuContainer: {
    maxWidth: "200px",
    marginLeft: "calc(2vw + 3px)",
  },
  defaultMenuButton: {
    fontSize: "0.91rem !important",
    wordWrap: "",
    color: "#5f3f09 !important",
    outline: "none !important",
    textDecoration: "none !important",
    textTransform: "uppercase !important",
    borderTop: "1px solid #caa36a !important",
    padding: "10px 20px !important",
    borderRadius: "0 !important",
    transition: "0.4s !important",
    "&:hover": {
      borderTop: "1px solid #252220 !important",
      color: "#252220 !important",
    },
  },
  exMenuWrapper: {
    height: 0,
  },
  exMenuContainer: {
    position: "absolute",
    top: parseInt(headerHeight),
    left: 0,
    paddingTop: "20px",
    backgroundColor: "#FFF",
    background: `linear-gradient(145deg, #f0f0f0 0%, #fbfbfb 50%, #f6f6f6 100%)`,
    borderBottom: `3px solid`,
    borderImage: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%) 1`,
  },
  exMenuFooterContainer: {
    height: "20px",
    background: `linear-gradient(45deg, rgba(220,220,220,.3) 0%, rgba(240,240,240,.3) 50%, rgba(220,220,220,.3) 80%), url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23AA7E3D' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
  },
  exMenuGroup: {
    padding: "10px !important",
  },
  exMenuTitle: {
    color: "#c3c3c3",
  },
  exMenuItem: {
    textDecoration: "none !important",
    color: theme.palette.secondary.light,
    padding: "0 2px !important",
    outline: "none !important",
    fontSize: "1rem",
  },
  exMenuItemText: {
    fontSize: "1.1em !important",
  },
  exMenuItemDescription: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.82em !important",
    },
    fontSize: "0.9em !important",
  },
}))

export default useStyles
