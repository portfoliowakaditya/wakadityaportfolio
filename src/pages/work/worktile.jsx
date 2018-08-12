import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col} from 'react-bootstrap';
import hoc from  '../../resources/work/hoc.png';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';
import fomc from '../../resources/work/fomc.png';
import beproj from '../../resources/work/beproj.jpg';
import f570 from '../../resources/work/570.jpg';
import qdc from '../../resources/work/qdc.jpg';
import huddle from '../../resources/work/huddle.png';
import baki from '../../resources/work/baki.png';
import uber from '../../resources/work/uber.png';

var hocback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    marginBottom: '6%',
    height: '320px',
    width: '320px',
    backgroundSize: 'cover',
  backgroundImage: `url(${hoc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};

var beprojback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
      marginBottom: '6%',
    backgroundSize: 'cover',
  backgroundImage: `url(${beproj})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};



var fomcback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
    marginBottom: '6%',
    backgroundSize: 'cover',
  backgroundImage: `url(${fomc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var f570back = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
      marginBottom: '6%',
    backgroundSize: 'cover',
  backgroundImage: `url(${f570})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var qdcback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
    backgroundSize: 'cover',
  backgroundImage: `url(${qdc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var qdcback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
    marginBottom: '6%',
    backgroundSize: 'cover',
  backgroundImage: `url(${qdc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var hudback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
    backgroundSize: 'cover',
  backgroundImage: `url(${huddle})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};

var bakiback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
    backgroundSize: 'cover',
  backgroundImage: `url(${baki})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};

var uberback = {
    float: 'center',
    margin: '1%',
    padding: '0',
    height: '320px',
    width: '320px',
      marginBottom: '6%',
    backgroundSize: 'cover',
  backgroundImage: `url(${uber})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};








export class Worktile extends React.Component {     
        state = { 
    hocstate: css(styles.hochide),
    fomcstate: css(styles.hochide),
    bestate: css(styles.hochide),
    fstate: css(styles.hochide),
    qdcstate: css(styles.hochide),
    hudstate: css(styles.hochide),
    bakistate: css(styles.hochide),
    uberstate: css(styles.hochide),
    tf: css(styles.titlefoot)
  }
        
    render(){

        
        return (

           <Grid className = {css(styles.contain)} >
                
                
                
                                
                     <Col xs={6} sm={6} md={6} lg={4} style = {uberback} onMouseOut={() => {this.setState({ uberstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({uberstate: css(styles.uber) })}}>
                    
                    
                    <div className = {this.state.uberstate} onMouseEnter={() => {this.setState({uberstate: css(styles.uber) })}} onMouseOut={() => {this.setState({ uberstate: css(styles.uber) })}}> 
                          <Link to = '/ubr' className = {css(styles.text)}> 
                        <p onMouseEnter={() => {this.setState({uberstate: css(styles.uber) })}} onMouseOut={() => {this.setState({ uberstate: css(styles.uber) })}}> Risk Analytics </p> 
                                                </Link>
                            
                               <Link to = '/ubr' className = {css(styles.text)}>  
                        
                        <p className = {this.state.tf} onMouseEnter={() => {this.setState({uberstate: css(styles.uber) })}} onMouseOut={() => {this.setState({ uberstate: css(styles.uber) })}}> Working with the Risk Team at Uber Inc. to mitigate Payment Fraud. </p>
                                 </Link>   
                                   </div>
                         
                     <p className = {css(styles.leftsub)}> Summer 2018 | <font className = {css(styles.rightsub)}> Experential Learning: Internship  </font> </p> 
                    
                    
                </Col>
                
                
                                <Col xs={6} sm={6} md={6} lg={4} style = {qdcback} onMouseOut={() => {this.setState({ qdcstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}}>
                    
                    
                    <div className = {this.state.qdcstate} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> 
                         <Link to = '/drg' className = {css(styles.text)}> 
                        <p onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> UX Research </p>
                        </Link>
                            
                               <Link to = '/drg' className = {css(styles.text)}>  
                        <p className = {this.state.tf} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> Exploring a unique design space at the UW Co-motion MakerSpace, using CoDesign.  </p> 
                                       </Link>
                                   </div>
                      <p className = {css(styles.leftsub)}>Spring 2018 | <font className = {css(styles.rightsub)}> Directed Research: Intro to Sewing Workshop </font> </p> 
                    
                    
                </Col>
           
                
             
                <Col xs={6} sm={6} md={6} lg={4} style = {hocback} onMouseOut={() => {this.setState({ hocstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}}>
                    
                    
                    <div className = {this.state.hocstate} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}> 
                    <Link to = '/hoc' className = {css(styles.text)}>      <p onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}> UX Design </p> </Link>  <Link to = '/hoc' className = {css(styles.text)}>  <p className = {this.state.tf} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}> Applying design methods to the Hour of Code initiative, for improving the way kids learn to code!  </p></Link>  </div>
                    
                    <p className = {css(styles.leftsub)}>Winter 2018 | <font className = {css(styles.rightsub)}>Redesigning a Visual Programming Interface</font> </p> 
                    
                    
                </Col>
             
                                  

                <Col xs={6} sm={6} md={6} lg={4} style = {fomcback} onMouseOut={() => {this.setState({ fomcstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}}>
                    
                    
                    <div className = {this.state.fomcstate} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}>
                         <Link to = '/fomc' className = {css(styles.text)}> <p onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}> Data Science </p> </Link>  <Link to = '/fomc' className = {css(styles.text)}>  <p className = {this.state.tf} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}> Developing strategies to improve sales, by analyzing the transaction logs data of customer orders. </p> </Link>  </div>
                         <p className = {css(styles.leftsub)}>Winter 2018 | <font className = {css(styles.rightsub)}> Sales Analytics in Ecommerce </font> </p> 
                     
                </Col>
                
                

               
                    <Col xs={6} sm={6} md={6} lg={4} style = {f570back} onMouseOut={() => {this.setState({ fstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}}>
                    
                   
                    <div className = {this.state.fstate} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}> 
                        <Link to = '/alz' className = {css(styles.text)}>
                        <p onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}>  User Research   </p> </Link>
                            
                               <Link to = '/alz' className = {css(styles.text)}>                       
                             <p className = {this.state.tf} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}> 
                                 
                       Understanding the ethical and usability concerns of assistive technology for caregivers & patients.  
                            </p>  </Link>
                                                            
                            
                             </div>
                         
                     <p className = {css(styles.leftsub)}> Fall 2017 | <font className = {css(styles.rightsub)}> Exploring Assistive Technology for Alzheimer's Patients.  </font> </p>
                       
                     
                    
                </Col>
                
                
                <Col xs={6} sm={6} md={6} lg={4} style = {beprojback} onMouseOut={() => {this.setState({ bestate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}}>
                    
                    
                    <div className = {this.state.bestate} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}>
                        <Link to = '/uidesign' className = {css(styles.text)}>
                        <p onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}> UI Design </p> </Link>
                        
                          <Link to = '/uidesign' className = {css(styles.text)}>
                        <p className = {this.state.tf} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}> Translating user requirements, content organizations and backend analytics into seamless interfaces. </p> </Link>  </div>
                     <p className = {css(styles.leftsub)}> Summer 2017 | <font className = {css(styles.rightsub)}> User Interface design and development </font> </p> 
                    
                    
                </Col>
                
                    
                
            </Grid>

            
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    
    
    contain: {
        align:'middle',
        textAlign: 'center',
       display: 'block',
        paddingTop: '4rem',
        paddingBottom: '10rem',
        paddingLeft: '0',
        paddingRight: '0',
        '@media only screen and (max-width: 1080px)': {
            textAlign: 'center',
            align: 'center',
            verticalAlign: 'center'
        }
    },
    hoc: {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    hochide: {
        margin: '0',
    padding: '3rem',
    height: '100%',
    width: '100%',
        fontSize: '0',
        opacity: '0',
    boxSizing: 'inherit'
    },
    fomc: {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    beproj: {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    f570 : {
        textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    qdc : {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    huddle : {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    baki : {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    uber : {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    titlefoot: {
        paddingTop: '10%',
        borderTop: '1px solid',
        fontSize: '2.5rem',
        boxSizing: 'inherit'
        
    },
    leftsub: {
        paddingTop: '1rem',
        '@media only screen and (max-width: 1300px)': {
            paddingTop: '0rem',
            padding: '0',
            fontSize: '2rem'
        },
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1c2329',
        fontSize: '2rem'
    },
    rightsub: {
        color: '#1c2329',
        fontWeight: 'lighter'
    },
    padder: {
        paddingBottom: '4rem'
    },
    text: {
        textDecoration: 'None',
        color: '#ffffff'
    }
});