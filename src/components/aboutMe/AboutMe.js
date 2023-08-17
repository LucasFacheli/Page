import React from "react";
import { Grid } from '@mui/material';
import './AboutMe.css';
import my from '../../images/my.jpg';

export default function AboutMe(){
    return(
        <Grid >
            <Grid item className={'Title'} >
                About Me
            </Grid>
            <Grid container>
                <Grid item >
                    <img src={my} alt="Lucas Nicolas Facheli" className='Image'/>
                </Grid>
                <Grid item className={'AboutMe'} xs={9}>
                    <Grid item className={'SubTitle'} xs={12}>
                        Where am I from?
                    </Grid>
                    <Grid item xs={12} className="Text">
                        Hi, my name is Lucas Nicolas Facheli. I am 27 years old and live in Buenos Aires, Argentina.
                    </Grid>
                    <Grid item xs={12} className={'SubTitle'}>
                        Studies
                    </Grid>
                    <Grid item xs={12} className="Text">
                        I am also studying Computer Engineering at the National University of Avellaneda.
                    </Grid>
                    <Grid item xs={12} className={'SubTitle'}>
                        Work
                    </Grid>
                    <Grid item xs={12} className="Text">
                        I have one and a half years of experience with junior software developer.
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}