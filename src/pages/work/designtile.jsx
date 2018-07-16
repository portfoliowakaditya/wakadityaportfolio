import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col} from 'react-bootstrap';

    export class Designtile extends React.Component { 
    render(){

        
        return (
            
            <Grid>
                
                <Row className = {css(styles.rowstyle)}>
                    
                                    
                <Col xs={12} sm={12} md={3} lg={3} className={css(styles.portcol)}>
                
                    <img src = {require('../../resources/work/portfolio.png')} align= "middle" className = {css(styles.portfolio)}/>
                
                </Col>
                
                <Col  xs={12} sm={12} md={9} lg={9} className = {css(styles.title)}>
                    <font>
                My design process heavily relies on Qualitative & Quantitative Data collection and analysis. I like to develop high fidelity prototypes and incorporate front end engineering, as early as possible, in the process. I love to translate the mental models of the user has in a design space, into creative visual components. This portfolio is a product of my design process, which consists of the following phases.
                </font>
                        </Col>
                
                    

                </Row>
                
                
            <Row className = {css(styles.invert)}>
                
                <Col xs={12} sm={12} md={3} lg={3} className = {css(styles.ftr1)} >
                
                    <img src = {require('../../resources/work/design/search.png')} className = {css(styles.imgc)} />
                    <font className = {css(styles.txc)}> Research & Analysis</font>
                
                </Col>
                
                <Col  xs={12} sm={12} md={9} lg={9} >
                    <p className = {css(styles.phasetitle)}>Phase 1</p>
                    <p className = {css(styles.phasecontent)}> <ul> 
                        <li>Literature survey of existing work towards the problem statement.</li>
                        <li> Collecting qualitative data through personal interviews & contextual inquiry of Stakeholders. </li>
                        <li> Applying Ethnographic, Narrative and Thematic Analyses to study user behavior. </li>
                        </ul></p>
                </Col>
                
                </Row>
                
                                
                
            <Row className = {css(styles.invert)}>
                
                <Col xs={12} sm={12} md={3} lg={3} className = {css(styles.ftr2)} >
                
                    <img src = {require('../../resources/work/design/notepad.png')} className = {css(styles.imgc1)} />
                    <font className = {css(styles.txc)}> Building an Information System </font>
                
                </Col>
                
                <Col  xs={12} sm={12} md={9} lg={9} className = {css(styles.sidepad1)}>
                    <p className = {css(styles.phasetitle)}>Phase 2</p>
                    <p className = {css(styles.phasecontent)}> <ul> 
                         <li>   Designing the elements, relationships and information flow of the solution system.  </li>
                        <li> Defining a clear intervention in the system which addressses the problem statement. </li>
                   
                        <li> Validating for loopholes, redundancies and faults. </li>
                        </ul></p>
                </Col>
                
                </Row>
    
                
                                
            <Row className = {css(styles.invert)}>
                
                <Col xs={12} sm={12} md={3} lg={3} className = {css(styles.ftr3)} >
                
                    <img src = {require('../../resources/work/design/product.png')} className = {css(styles.imgc)} />
                    <font className = {css(styles.txc)}> Designing a Prototype </font>
                
                </Col>
                
                <Col  xs={12} sm={12} md={9} lg={9} >
                    <p className = {css(styles.phasetitle)}>Phase 3</p>
                    <p className = {css(styles.phasecontent)}> <ul> 
                        <li> Brainstorming the components and fidelity level to present the system as an interface. </li>
                        <li> Planning the media and graphics resources required to produce the prototype. </li>
                        <li> Developing a prototype with optimal level of fidelity and engineering.</li>
                        </ul></p>
                </Col>
                
                </Row>
                
                                
                
            <Row className = {css(styles.invert)}>
                
                <Col xs={12} sm={12} md={3} lg={3} className = {css(styles.ftr4)} >
                
                    <img src = {require('../../resources/work/design/test.png')} className = {css(styles.imgc2)} />
                    <font className = {css(styles.txc)}> Usability Testing </font>
                
                </Col>
                
                <Col  xs={12} sm={12} md={9} lg={9} className = {css(styles.sidepad1)}>
                    <p className = {css(styles.phasetitle)}>Phase 4</p>
                    <p className = {css(styles.phasecontent)}> <ul> 
                         <li>  Deciding on tangible performance metrics which highlight the impact on UX.  </li>
                        <li> Designing instruments & activities to get feedback from a wide range of users. </li>
                   
                        <li> Reasoning the cause of feedback and mapping it back to changes in the prototype. </li>
                        </ul></p>
                </Col>
                
                </Row>
                
                
                
            </Grid>
                     
        );
    }}


// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    rowstyle: {
      paddingBottom: '15rem',
        '@media only screen and (max-width: 1300px)': {
            paddingBottom: '5rem'
        }
    },
    portcol: {
      textAlign: 'center',
    '@media only screen and (max-width: 1300px)': {
    paddingBottom: '2rem'
    }
    },
    portfolio: {
        height: '100%',
        width: '100%',
        '@media only screen and (max-width: 1300px)': {
            height: '50%',
            width: '50%'
        }
        
    },
    title: {

        fontSize: '2.5rem',
        '@media only screen and (max-width: 1300px)': {
          fontSize: '4rem',
            textAlign: 'justify'
        },
        textAlign: 'justify'
    },
    ftr1: {
        float: 'right',
        padding:'4rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        textAlign: 'center',
        backgroundColor: '#1ed2f4',
        marginTop: '4rem',
        '@media only screen and (max-width: 1300px)': {
            float: 'left',
                     paddingLeft: '0',
            paddingRight: '0',
                    paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
            marginBottom: '1rem'
        
        },
        color: '#f4f5f6'

    },
        ftr2: {

        padding:'6rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        textAlign: 'center',
        backgroundColor: '#eafc40',
        color: '#254558',
        marginTop: '4rem',
        '@media only screen and (max-width: 1300px)': {
            float: 'left',
            paddingLeft: '0',
            paddingRight: '0',
                    paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
            marginBottom: '1rem'
        
        }
     

    },
            ftr3: {
                 float: 'right',
        padding:'4rem',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        textAlign: 'center',
         backgroundColor: '#fd4445',
        color: '#ffffff',
        marginTop: '4rem',
        '@media only screen and (max-width: 1300px)': {
            float: 'left',
            paddingLeft: '0',
            paddingRight: '0',
                    paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
            marginBottom: '1rem'
        
        }
     

    },
                ftr4: {
        padding:'6rem',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        textAlign: 'center',
         backgroundColor: '#73c094',
        color: '#14032a',
        marginTop: '4rem',
        '@media only screen and (max-width: 1300px)': {
            float: 'left',
            paddingLeft: '0',
            paddingRight: '0',
                    paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
            marginBottom: '1rem'
        
        }
     

    },
    imgc:{
        paddingBottom:'2rem',
        height: '40%',
        width: '40%',
        align: 'center',
        '@media only screen and (max-width: 1300px)': {
            height: '5%',
            width: '5%'
        }
    },
        imgc1:{
        paddingBottom:'2rem',
        height: '50%',
        width: '50%',
        align: 'center',
        '@media only screen and (max-width: 1300px)': {
            height: '5%',
            width: '5%'
        }
    },
            imgc2:{
        paddingBottom:'2rem',
        height: '60%',
        width: '60%',
        align: 'center',
        '@media only screen and (max-width: 1300px)': {
            height: '5%',
            width: '5%'
        }
    },
        txc: {
        fontSize: '3rem',
         '@media only screen and (max-width: 1080px)': {
         fontSize: '2.5rem'}
        
        
    },
    phasetitle: {
        fontSize: '4rem',
        fontWeight: 'bold'
    },
    phasecontent: {
        fontSize: '2.5rem',
        marginRight: '2.5rem',
        '@media only screen and (max-width: 1300px)': {
            fontSize: '3rem'
        },
        fontWeight: 'normal',
        textAlign: 'justify'
    },
    sidepad: {
        paddingLeft: '4rem',
        paddingTop: '2rem',
                    '@media only screen and (max-width: 1300px)': {
                    paddingLeft: '0',
                paddingRight: '0',
                float: 'left',
        paddingTop: '2rem'
        }
    },
        sidepad1: {
        paddingLeft: '8rem',
            paddingTop: '2rem',
            '@media only screen and (max-width: 1300px)': {
                    paddingLeft: '2rem',
                paddingRight: '0',
                float: 'left',
        paddingTop: '2rem'
        }
    },
    invert: {
        paddingTop: '3rem',
        paddingBottom: '4rem'
    }
    });
            