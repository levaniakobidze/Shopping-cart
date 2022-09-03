import React from 'react';
import Card from '../Card/Card';
import Subscription from '../Subscribtion/Subscription';
import classes from './Footer.module.css'

const Footer = () => {


    return (<footer className={classes.footer}>
           <Subscription />


        <Card className={classes.footer_card}>

        </Card>
    </footer>
    )
}   



export default Footer