import React from 'react';
import ReactDOM from 'react-dom';
import {Formcon} from './contact me/form.jsx'
import {Mynavbar} from '../components/navig.jsx';
import {Portfoot} from '../components/footer.jsx';
import {FormGroup, Button, Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite'; 
import {Contactline} from '../components/Contact.jsx';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';

export class Contactme extends React.Component {
 
        render() {
                
		return (
            <div>
            <div style={{padding: '1.7rem'}}>
                
                <Mynavbar index='1'/>
                
                <FadeIn>
                <Grid className = {css(styles.gridclass)} bsClass = "container-fluid">
                    <Row className = {css(styles.rowcontitle)}>
                    <p className = {css(styles.contitle)}>Let's Talk.</p>
                    </Row>
                    <Row className = {css(styles.rowcontitle)}>
                        <Typist avgTypingDelay = {2} stdTypingDelay = {6} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>texttextedxtextttxexttt </font> <font className = {css(styles.block2)}>ttettttyytxtextt </font> <font className = {css(styles.block3)}>txtxxtttttx </font>
                            </Typist>
                    </Row>
                
                    
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} className = {css(styles.filler)}>
                    <p className = {css(styles.subtitle)}> I would love to hear feedback, suggestions or collaboration opportunities from you. <br/> Together we can build something beautiful!   The best ways to contact me are:</p>
                            
                                                     
                            <Contactline ic={require('../resources/contact/gmail.png')} tx='wkaditya@uw.edu' lnk="mailto:wkaditya@uw.eu" txt = 'You can mail me at'/>
                            
                            <Contactline ic={require('../resources/contact/phone-receiver.png')} tx='(360) 813-8770' lnk="#/contactme" txt='You can Call me at'/>

                            
                             <Contactline ic={require('../resources/contact/placeholder (1).png')} tx='Seattle, WA' lnk="https://goo.gl/maps/agcFSP7e24Q2" txt='I am currently living in'/>
                            
                            <p className = {css(styles.subtitle)}>To know more about my work, professional and personal interests, find the links to my <font color='#333'>Github</font>, <font color='#00a0dc'>LinkedIn</font> and <font color='#3b5998'>Facebook</font> Profiles in the footer.</p>


                        
                        </Col>
                    
                    <Col xs={12} sm={12} md={12} lg={6} className = {css(styles.right)}>
                        <p className = {css(styles.subtitle)}> Get in touch! Drop a message to me through the form below. </p>
                           <Formcon/>
                        </Col>
                    
                        
                    </Row>
                    
                    
                </Grid>
                
               
                
               
                    </FadeIn>
            </div>
             <Portfoot/>
            </div>
                
        );
	}
}


const styles = StyleSheet.create({
    gridclass: {
        padding: '5rem',
        paddingTop: '5rem',
        margin: '0',
        '@media only screen and (max-width: 1300px)': {
         paddingTop: '12rem'
        }
    },
    contitle: {
        fontSize: '5rem',
     '@media only screen and (max-width: 1300px)': {
         fontSize: '7rem',
         lineHeight: '5rem',
         paddingTop: '2rem',
         paddingBottom: '2rem'
        },
          lineHeight: '3rem'
    },
    rowcontitle: {
        padding: '0',
        margin: '0'
    },
    subtitle: {
     paddingTop: '2rem',
        fontSize: '2.5rem',
     '@media only screen and (max-width: 1300px)': {
         fontSize: '4rem',
         paddingTop: '5rem',
         paddingBottom: '3'
        },
        paddingBottom: '1.5rem'
    },
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
    right: {
        float: 'right'
    },
    filler: {
    '@media only screen and (max-width: 1300px)': {        
        paddingBottom: '3rem'
    }}
});