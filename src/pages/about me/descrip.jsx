import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import Typist from 'react-typist';



export class Descrip extends React.Component {        
        
    render(){

        
        return (
           
         <Jumbotron bsClass = "fluid" >
                <p className = {css(styles.title)}> (^_^)_/ Hello. </p>
      <p align = "justify" className = {css(styles.subtitle)}> I develop designs, visualizations and analyses for converting data into insights. I love learning about new businesses and technologies.  When I'm not working, I'm playing/ listening to music, following standup comedy, attending meetups or watching documentaries. Feel free to contact me. I would love to discuss anything about my work or interests with you. </p>
    
        <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
    <font className = {css(styles.block1)}>textttxttxtextrtrtrttexttexttextrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtrtrttextxtextxtt </font> <font className = {css(styles.block3)}>txtxxexextx </font>
            </Typist>

          </Jumbotron>
        
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
        block1: {
     backgroundColor: '#1ed2f4',
     color: '#1ed2f4',
    margin: '0',
     fontSize: '1rem',
        '@media only screen and (max-width: 1300px)': {
            paddingLeft: '5rem'
        },
        lineHeight: '0'
    },
    block2: {
     backgroundColor: '#eafc40',
    color: '#eafc40',
        margin: '0',
        fontSize: '1rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '3rem'
        },
          lineHeight: '0'
    },
    block3: {
     backgroundColor: '#fd4445',
    color: '#fd4445',
        margin: '0',
        fontSize: '1rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '2rem'
        },
          lineHeight: '0'
    },
    title: {
        paddingBottom: '1.5rem',
        fontSize: '6rem',
         '@media only screen and (max-width: 1300px)':
        {  
            paddingTop: '3rem',
            fontSize: '8rem',
            textAlign: 'center'
        }
    },
    highlight: {
      color: 'blue',
    fontSize: '2rem'
    },
    subtitle: {
        fontSize: '2.1rem',
        '@media only screen and (max-width: 1300px)':
        {
            fontSize: '4.5rem'
        }
        }
        
});

