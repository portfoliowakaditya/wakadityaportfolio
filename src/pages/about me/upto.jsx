import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import {Uptotile} from '../../components/uptotile.jsx'



export class Upto extends React.Component {        
        
    render(){

        
        return (
           
            
            <Grid className = {css(styles.gridclass)} bsClass = "container-fluid">
                <Row>
                
                    <Col xs={4} sm = {4} md={4} lg={4} className = {css(styles.col1)}>  
                        <Uptotile ic = {require('../../resources/react.png')} tx = 'Mastering React.js for rapid prototyping' /> </Col>
                    <Col xs={4} sm = {4} md={4} lg={4} className = {css(styles.col2)}>  
                       <Uptotile ic = {require('../../resources/briefcase.png')} tx = 'Looking for Co-op opportunities: Fall 2018' />
                    </Col>
                    <Col xs={4} sm = {4} md={4} lg={4} className = {css(styles.col3)}>   
                    
                         <Uptotile ic = {require('../../resources/network.png')} tx = 'Exploring network visualization in Rstudio' />
                    
                    </Col>
                
                </Row>
                
              
                
                <Row>
   <Col xs={6} sm = {6} md={4} lg={4} className = {css(styles.col4)}>
                                             <Uptotile ic = {require('../../resources/monitor.png')} tx = 'Reading about: Fraud Detection using ML' />
                    </Col>
                    <Col xs={6} sm = {6} md={4} lg={4} className = {css(styles.col5)}>  
                    
                     <Uptotile ic = {require('../../resources/line-chart.png')} tx = 'Understanding options trading for beginners' />
                    </Col>
                    <Col xs={6} sm = {6} md={4} lg={4} className = {css(styles.col6)}>   
                <Uptotile ic = {require('../../resources/guitar.png')} tx = 'Learning how to play Take On Me by A-ha' />
                    </Col>
                </Row>
                
            </Grid>
            
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    title: {
        fontSize: '5rem'
    },
    gridclass: {
        paddingLeft: '13rem',
        paddingRight: '13rem',
        '@media only screen and (max-width: 1300px)':{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        }
    },
    highlight: {
      color: 'blue',
    fontSize: '2rem'
    },
    subtitle: {
        fontSize: '2.5rem'
        },
    col1: {
        backgroundColor: '#1ed2f4',
        color: '#f4f5f6',
        width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
        '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }
 
    },
        col2: {
        backgroundColor: '#eafc40',
        color: '#254558',
                    width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
                    '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }

    },
        col3: {
        backgroundColor: '#fd4445',
        color: '#ffffff',
        width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
                    '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }
    },
        col4: {
        backgroundColor: '#495388',
        color: '#6ec8cb',
                  width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
                    '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }
    },
        col5: {
                    backgroundColor: '#ffaf00',
        color: '#000000',
                  width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
                    '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }
    },
        col6: {
         backgroundColor: '#73c094',
        color: '#14032a',
                  width: '33.33%',
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
                    '@media only screen and (max-width: 1300px)':{
            fontSize: '6rem'
        }
    }
    
        
});

