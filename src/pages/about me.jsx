import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Mynavbar} from '../components/navig.jsx';
import {StyleSheet, css} from 'aphrodite';
import {Portfoot} from '../components/footer.jsx';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import {Descrip} from './about me/descrip.jsx';
import {Profile} from './about me/profile.jsx';
import {Upto} from './about me/upto.jsx';
import {Gal} from './about me/gallery.jsx';
import FadeIn from 'react-fade-in';

export class Aboutme extends React.Component {
     
	render() { 
		return ( 
            <div className = {css(styles.foots)}>
            <div className = {css(styles.gridclass)}>
                
                <Mynavbar index = '0'/>
                <FadeIn>
               <Grid bsClass = 'container-fluid' className={css(styles.containerfluid)} >
  <Row className = {css(styles.gridclasshead)}>
    <Col xs={12} sm = {12} md={12} lg={3} className={css(styles.colback)}>
        

<Profile/>
                     
          </Col> 
                     
      <Col xs={12} sm = {12} md={12} lg={9} className={css(styles.colfront)} >
          
        <Descrip/>
      
      </Col>
        
                   </Row>
                   
                   
                   
                   <Row className = {css(styles.gridclass1)}>
                       <p className = {css(styles.uptotitle)}> What am I upto these days? </p>  <br/>
                       <Upto/>
                   </Row>
                   
                <Row className = {css(styles.gridclass2)}>
                       <p className = {css(styles.galtitle)}> Creativity and Forward thinking are my biggest strengths. <br/>The most fun I have, is when I explore new spaces and work with passionate people, for transforming problems into opportunities.</p>
                       <Gal/>
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
    imgc: {
      height: '100%',  
      width: '100%'  
    },
    colback: {
        paddingBottom: "1%",
         paddingTop: "1%",
        paddingLeft: "0.25%",
        paddingRight: "0.25%",
        textAlign: "center",
       '@media only screen and (max-width: 1080px)': {
           paddingTop: '0',
           paddingBottom: '2%',
           ':hover' : {
               paddingBottom: '0'
           }
        },
        ':hover' : {
            paddingBottom: '3.3%'
        }
    },
    colfront: {
        paddingLeft: '4%',
        paddingRight: '5%',
        paddingTop: "1%",
        paddingBottom: '2%',
        margin: '0'
    },
    gridclass: {
        padding: '1.7rem',
        margin: '0'
    },
    gridclasshead: {
      paddingTop: '3rem',
        paddingBottom: '3rem'
        
    },
    gridclass1: {
        padding: '5rem',
        paddingTop: '9rem'
    },
    gridclass2: {
        paddingTop: '4rem',
        paddingBottom: '4rem'
    },
    containerfluid: {
        padding: '4em'
    },
    work: {
        paddingLeft: "3%",
        paddingRight: '3%',
        paddingTop: "1%",
        paddingBottom: '1%',
        backgroundColor: 'rgba(30, 210, 244, 0.5)'
        
    },
    play: {
        paddingLeft: "3%",
        paddingRight: '3%',
        paddingTop: "1%",
        paddingBottom: '1%',
        backgroundColor: 'rgba(234, 252, 64, 0.7)'
    },
    recent: {
        marginLeft: '2%',
        marginRight: '2%'
    },
    uptotitle: {
        fontSize: '5rem',
        '@media only screen and (max_width:1300px)':{
        fontSize: '7rem',
        },
        textAlign: 'center',
        paddingTop: '1.5rem',
        '@media only screen and (max_width:1080px)':{
        paddingTop: '1rem'
        },
        paddingBottom: '2rem'
                
    },
    galtitle: {
        fontSize: '2.5rem',
        textAlign: 'center',
        padding: '2rem'
                
    },
    foots: {
        padding: '0',
        margin: '0'
    }
});