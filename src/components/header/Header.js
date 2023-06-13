import React from 'react';
import './Header.css';
import { Grid } from '@mui/material';

export default function Header() {

  return (
    <Grid className='Header'>
      <Grid className='Options'>
        <div>Inicio</div>
        <Grid>Proyectos</Grid>
        <Grid>Contacto</Grid>
      </Grid>
      <Grid className='LanguageGrid'>
        <Grid>
          <p>ES</p>
        </Grid>
        <Grid>
          <p>EN</p>
        </Grid>
      </Grid>
      {/*<div>Inicio</div>
      <div>Mis Proyectos</div>
  <div>Contacto</div>*/}
    </Grid>
  )
}