import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col} from 'react-bootstrap';
import hoc from  '../../resources/work/hoc.png';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';
import fomc from '../../resources/work/fomc.png';
import beproj from '../../resources/work/beproj.png';
import f570 from '../../resources/work/570.jpg';
import qdc from '../../resources/work/qdc.png';
import huddle from '../../resources/work/huddle.png';


var hocback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${hoc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};

var beprojback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${beproj})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};



var fomcback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${fomc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var f570back = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${f570})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var qdcback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${qdc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var qdcback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${qdc})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000',
     boxSizing: 'inherit'
};


var hudback = {
    float: 'center',
    margin: '2%',
    padding: '0',
    height: '280px',
    width: '280px',
    backgroundSize: 'cover',
  backgroundImage: `url(${huddle})`,
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
    tf: css(styles.titlefoot)
  }
        
    render(){

        
        return (

           <Grid className = {css(styles.contain)} bsClass = 'responsive'>
                
                <Col xs={4} sm={4} md={4} lg={4} style = {hocback} onMouseOut={() => {this.setState({ hocstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}}>
                    
                    
                    <div className = {this.state.hocstate} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}> <p onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}>Redesigning Hour of Code</p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({hocstate: css(styles.hoc) })}} onMouseOut={() => {this.setState({ hocstate: css(styles.hoc) })}}> UX Research | Interface Design | Usability Studies </p> </div>
                    
                    
                </Col>
                
                                                
                <Col xs={4} sm={4} md={4} lg={4} style = {qdcback} onMouseOut={() => {this.setState({ qdcstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}}>
                    
                    
                    <div className = {this.state.qdcstate} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> <p onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> Research in Human Centered Design </p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({qdcstate: css(styles.qdc) })}} onMouseOut={() => {this.setState({ qdcstate: css(styles.qdc) })}}> Qualitative Data Collection | UX Design </p> </div>
                    
                    
                </Col>
                
                                
                <Col xs={4} sm={4} md={4} lg={4} style = {fomcback} onMouseOut={() => {this.setState({ fomcstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}}>
                    
                    
                    <div className = {this.state.fomcstate} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}> <p onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}> Optimizing Sales in Ecommerce </p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({fomcstate: css(styles.fomc) })}} onMouseOut={() => {this.setState({ fomcstate: css(styles.fomc) })}}> Data Science | Business Analytics </p> </div>
                    
                    
                </Col>
                

                
                    <Col xs={4} sm={4} md={4} lg={4} style = {f570back} onMouseOut={() => {this.setState({ fstate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}}>
                    
                    
                    <div className = {this.state.fstate} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}> <p onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}> Assistive Tech for Alzheimer's </p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({fstate: css(styles.f570) })}} onMouseOut={() => {this.setState({ fstate: css(styles.f570) })}}> User Research | Qualitative Analysis | Exploratory Analysis </p> </div>
                    
                    
                </Col>

                
                <Col xs={4} sm={4} md={4} lg={4} style = {beprojback} onMouseOut={() => {this.setState({ bestate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}}>
                    
                    
                    <div className = {this.state.bestate} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}> <p onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}> Chatbot for Movie Reviews </p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({bestate: css(styles.beproj) })}} onMouseOut={() => {this.setState({ bestate: css(styles.beproj) })}}> Sentiment Analysis | Interface Design | Systems Integration </p> </div>
                    
                    
                </Col>
                
                
                <Col xs={4} sm={4} md={4} lg={4} style = {hudback} onMouseOut={() => {this.setState({ bestate: css(styles.hochide) })}} onMouseEnter={() => {this.setState({hudstate: css(styles.huddle) })}}>
                    
                    
                    <div className = {this.state.hudstate} onMouseEnter={() => {this.setState({hudstate: css(styles.huddle) })}} onMouseOut={() => {this.setState({ hudstate: css(styles.hochide) })}}> <p onMouseEnter={() => {this.setState({hudstate: css(styles.huddle) })}} onMouseOut={() => {this.setState({ hudstate: css(styles.huddle) })}}> Design for Crowdfunding </p> <p className = {this.state.tf} onMouseEnter={() => {this.setState({hudstate: css(styles.huddle) })}} onMouseOut={() => {this.setState({ hudstate: css(styles.huddle) })}}> Systems Design Interface Design </p> </div>
                    
                    
                </Col>
                
                
            </Grid>

            
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    
    
    contain: {
        paddingTop: '4rem',
        paddingBottom: '10rem',
        paddingLeft: '15%',
        '@media only screen and (max-width: 1080px)': {
            textAlign: 'center',
            align: 'center',
            verticalAlign: 'center',
            paddingLeft: '19%'
        }
    },
    hoc: {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
      fontSize: '2.3rem',
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
        opacity: '0',
    boxSizing: 'inherit'
    },
    fomc: {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
       fontSize: '2.3rem',
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
     fontSize: '2.3rem',
    color: '#ffffff',
    backgroundColor: '#1c2329',
    height: '100%',
    width: '100%',
    opacity: '0.93',
    boxSizing: 'inherit'
    },
    f570 : {
    display: 'block',
    textAlign: 'center',
    margin: '0',
    padding: '3rem',
    fontSize: '2.3rem',
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
    fontSize: '2.3rem',
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
    fontSize: '2.3rem',
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
        fontSize: '2rem',
        boxSizing: 'inherit'
        
    }
});

