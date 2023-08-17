import React from 'react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import './Header.css';

export default function Header() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/lucasfacheli/", "_blank", "noopener");
  };

  const openGithub = () => {
    window.open("https://github.com/LucasFacheli?tab=repositories", "_blank", "noopener");
  };

  return (
    <Grid container className='Header'>
      <Grid item className='Options' xs={6}>
        <Grid item className='Option' xs={3}>Home</Grid>
        <Grid item className='Option' xs={3}>Skills</Grid>
        <Grid item className='Option' xs={3}>Proyects</Grid>
        <Grid item className='Option' xs={3}>Contact</Grid>
      </Grid>
      <Grid item className='IconGrid' xs={6}>
        <FontAwesomeIcon icon={faLinkedinIn}  className='TypeIcon' onClick={openLinkedIn}/>
        <FontAwesomeIcon icon={faGithub} className='TypeIcon' onClick={openGithub}/>
      </Grid>
    </Grid>
  )
}