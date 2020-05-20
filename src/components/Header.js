import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography,Avatar,Grid,Box} from "@material-ui/core";
import Typed from "react-typed"
import avatar from "../images/dew.png"

// css styles
const useStyles = makeStyles(theme=> ({
  avatar:{
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title:{
    color:"white"
  },
  subtitle:{
    color:"grey",
    marginBottom:"3rem"
  },
  typedContainer:{
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    width:"100vw",
    textAlign:"center",
    zIndex: 1
  }
}))


const Header = () => {
  const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
          <Grid container justify="center">
           <Avatar className={classes.avatar} src={avatar} />
          </Grid>
          <Typography className={classes.title} variant="h4">
            <Typed strings={["#2020TetepReceh"]} typeSpeed={20} />
          </Typography>
          <br/>
          <Typography className={classes.subtitle} variant="h5">
            <Typed strings={["Buah apa yang cocok untuk jomblo?","Buahahahaha :)",
            "Penyanyi luar negeri yang susah nelen ?","Ed sered :)",
            "Tentara apa yang paling kecil ?","Tentara sekutu :)",
            "Lemari apa yang bisa masuk kantong ?","Lema ribu :)",
            "Sayur apa yang ada pangkatnya ?","Sayur mayor :)",
            "Pemain bola apa yang beratnya 3 kg?","Bambang tabung gas :)",
            "#2020TetepReceh @dewaqintoro"
            ]} typeSpeed={40} backSpeed={60} loop/>
          </Typography>
        </Box>
    )
}

export default Header
