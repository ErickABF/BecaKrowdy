import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ArrowBack from '@mui/icons-material/ArrowBack'
import WebCam from './WebCam';7
import '../styles/Dialog.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({nropregunta, pregunta, recupera, cambio }) {
  const [open, setOpen] = React.useState(false);
  const [link, setlink] = React.useState('hola');
  const [existevideo, setexistevideo] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function recuperar(link){
    setlink(link);
  }

  function existe(valor){
    setexistevideo(valor);
  }

  React.useEffect(function(){
  }, [existevideo, link])
  return (
      <div> 
      <Button
      variant="outlined" onClick={handleClickOpen}>
        Responder Pregunta
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBack/> <u>Atras</u>
            </IconButton>
            <Button autoFocus color="inherit" disabled={nropregunta === 1 ? true : false}>
            <b>boton anterior no programado</b>
            </Button>
            <Button autoFocus color="inherit">
            <b>boton siguiente no programado</b>
            </Button>
            <Button autoFocus color="inherit" disabled={existevideo} onClick={() =>{
              recupera(link, nropregunta);
              handleClose();
            }}>
              guardar respuesta
            </Button>
          </Toolbar>
        </AppBar>
        <div className='contenedor-respuesta'>
          <h2>Pregunta {nropregunta} : {pregunta} </h2>
          <div className='contenedor-grabacion'>
            <WebCam nropregunta={nropregunta}
            recupera = {recuperar}
            existe = {existe}/>
          </div>
        </div>

      </Dialog>
    </div>
  );
}
