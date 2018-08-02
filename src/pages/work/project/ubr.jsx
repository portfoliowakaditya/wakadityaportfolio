import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work/ubr.png';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';
import {Worktile} from '../worktile.jsx';




var sectionStyle = {
    backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000'
};


var image = {

};


export class Ubr extends React.Component {
        componentDidUpdate() {
  window.scrollTo(0,0);
}
    componentDidMount() {
        
          window.scrollTo(0,0);
    }
    
	render() {
		return (
            <div className = {css(styles.foots)}>
             <div className = {css(styles.gridclass)}>
                 
                <Mynavbar/>
                 
                 <FadeIn delay={50}>
 <Grid bsClass = 'container-fluid' className = {css(styles.padder)}>
     <Row className = {css(styles.row1)}>
                        <Col xs={12} sm={12} md={12} lg={5} className = {css(styles.leftcol)}>
                
                
                            
                <div style={ sectionStyle } className = {css(styles.sectionstyle)} bsClass = "container-fluid">
                    <FadeIn delay={110}>
                    <div className={css(styles.name)}> Summer Internship 2018: Risk Analysis and Fraud Management.  <br/> </div> 
                </FadeIn>
                    
                        </div>
                            
                            </Col>
     
                    <Col xs={12} sm={12} md={12} lg={7} className = {css(styles.titleblock)}>
                    
                          <div className = {css(styles.title)} align = "middle"> 
                        The Challenge
                                                  <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>textttextextextexettxttxtextrtrtrtrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtextetxetrtrttxtt </font> <font className = {css(styles.block3)}>txtxxxtextexxxtx </font>
                            </Typist>
                            </div>
                        
                        <p className = {css(styles.subtitle)}>
                     As a part of my summer internship in my master's course, I got the amazing opportunity to intern at Uber Technologies at Palo Alto California. I am working as a Risk Analyst Intern for detecting and mitigating payment fraud in Uber Credits. As I complete my journey at Uber, I learn more about operations in a large organization, payment services, business intelligence, data visualization and most importantly solving problems in real time.
                        </p>
                        
                    </Col>
     </Row>
              <p className = {css(styles.titlestat)}> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> <span/><span/>Tools Used 
         

         
         </p>
         
     
               <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=hiveQL" target="_blank"> <img src={require('../../../resources/work/hive.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                     Big Data Querying and Analytics using Hive.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=BI+dashboards" target="_blank"> <img src={require('../../../resources/work/home.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                    Dashboards to monitor fraud trends and losses.      
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=python" target="_blank">  <img src={require('../../../resources/work/py.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                         Data Manipulation at Scale with Python.        
               
                    </p>
                        
                        
                    </Col>
     
     </Row>
     
     
     
     
          
     
     
     
                  <Row className = {css(styles.row21)}>
                      <p className={css(styles.temp)}>
                        This project is still in progress and I shall update it shortly. Until then...</p>
                           <div className = {css(styles.worktitle)}>
                            Check out my other projects
                            </div>
                            
                    </Row>
            <Row className = {css(styles.center)}>
                <p>
                    <Worktile/>
                </p>
            
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
 foots: {
        padding: '0',
        margin: '0'
    },
        gridclass: {
        padding: '0',
        paddingTop: '1.7rem',
        margin: '0'
    },
    contain: {
        padding: '0',
        margin: '0'
    },
    header: {
        paddingTop: '6rem',
        fontSize: '7rem',
        paddingLeft: '3rem',
        color: '1c2329'
    },
        padder: {
        margin: '0',
        padding: '0',
        paddingTop:'8rem',
        overflowX: 'hidden',
        '@media only screen and (max-width: 1300px)': {
             float: 'center'
        }
       
    },
       row1: {
        margin: '0',
        padding: '0',
        marginTop: '6rem',
        '@media only screen and (max-width:1080px)':{
            marginTop: '3rem',
            padding: '0',
            width: '100%'
        }
    },
    sectionstyle: {

        paddingTop:'35%',
    paddingRight: '40%',
    paddingBottom: '30%'       
        
    },
        leftcol:{
        margin: '0',
        padding: '0'
    },
        name: {float:'left',
               paddingLeft: '2rem',
            padding: '1rem',
        fontSize: '3rem',
        backgroundColor: '#1c2329',
        color: '#ffffff',
        opacity: '0.85',
        textAlign: 'center',
        paddingBottom: '0.3rem',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '5rem'
        }
    },
        title: {
            lineHeight: '3rem',
            paddingBottom: '3rem',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '5rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '6rem',
            paddingBottom: '4rem',
            fontSize: '7rem'}
    },
        title2: {
            lineHeight: '3rem',
            paddingBottom: '3rem',
            paddingTop: '8rem',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '4rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '10rem',
            paddingBottom: '4rem',
            fontSize: '6rem'}
    },
            titlestat: {
                textAlign:'center',
            lineHeight: '3rem',
        paddingTop: '2rem',
            paddingBottom: '5rem',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '5rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '4rem',
            paddingBottom: '4rem',
            fontSize: '7rem'}},
    subtitle: {
        padding: '3rem',
        textAlign: 'justify',
        fontSize: '2.5rem',
        paddingTop: '1rem',
         marginTop:'0',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'}
    },
    row1: {
        paddingBottom: '5rem'
    },
    back: {
        padding: '2rem',
        color: '#1c2329',
        backgroundColor: '#1ed2f4',
        opacity: '0.8',
        boxShadow: '2px 4px 6px #000000'
    },
    center: {
        padding: '0',
        margin: '0'
    },
        block1: {
     backgroundColor: '#1ed2f4',
     color: '#1ed2f4',
    margin: '0',
     fontSize: '0.5rem',
        '@media only screen and (max-width: 1300px)': {
            paddingLeft: '5rem'
        },
        lineHeight: '0'
    },
    block2: {
     backgroundColor: '#eafc40',
    color: '#eafc40',
        margin: '0',
    fontSize: '0.5rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '3rem'
        },
          lineHeight: '0'
    },
    block3: {
     backgroundColor: '#fd4445',
    color: '#fd4445',
        margin: '0',
    fontSize: '0.5rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '2rem'
        },
          lineHeight: '0'
    },
        rowstyle: {
            paddingTop: '7rem',
      paddingBottom: '7rem',
        '@media only screen and (max-width: 1300px)': {
            paddingBottom: '5rem',
                    paddingTop: '5rem'
        }
    },
            rowstyle1: {
            paddingTop: '2rem',
      paddingBottom: '2rem',
        '@media only screen and (max-width: 1300px)': {
            paddingBottom: '5rem',
                    paddingTop: '5rem'
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
    projtitle:{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '4rem',
        textAlign: 'center',
        paddingBottom: '2rem'
    },
    titlex: {

        fontSize: '2.5rem',
        '@media only screen and (max-width: 1300px)': {
          fontSize: '4rem',
            textAlign: 'justify'
        },
        textAlign: 'justify'
    },
    projcont: {
        textAlign: 'justify',
        padding: '3rem',
        fontSize: '2rem',
        paddingLeft: '6rem',
        '@media only screen and (max-width: 1300px)': {
            textAlign: 'justify',
            padding: '3rem',
            fontSize: '2.5rem',
            paddingLeft: '6rem',
              paddingRight: '6rem'
          },
        paddingRight: '6rem'
    },
    list: {
        fontSize: '2rem',
        '@media only screen and (max-width: 1300px)': {
        fontSize: '2.5rem'}
    },
    image: {
        marginTop: '2rem',
        marginLeft:'2rem',
        marginRight:'2rem',
        height: '600px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
             width: '550px',
             height: 'auto'
         },
    boxShadow: '2px 4px 6px #000000',
        textAlign: 'center',
        justifyContent: 'center',
    align: 'middle',
alignItems: 'center'
    },
   imagebe1: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '500px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
        height: '500px',
        width: 'auto',
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
    captionbe1: {
        paddingTop: '2rem',
        fontSize: '1.5rem',
         '@media only screen and (max-width: 1300px)': {
             fontSize: '1.5rem'}
    },
       imagebe2: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '300px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
          height: '300px',
        width: 'auto',
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
     imagebe3: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: 'auto',
        width: '800px',
         '@media only screen and (max-width: 1300px)': {
             width: '550px',
             height: 'auto'
         },
                imagebe4: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '40px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
          height: '10px',
        width: 'auto'
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
        center: {
        textAlign: 'center',
        align: 'middle',
        paddingLeft: '10%',
           '@media only screen and (max-width: 1300px)': {
           paddingLeft: '8%'
           }
    },
       
            worktitle: {
        paddingBottom : '3rem',
        textAlign: 'center',
        paddingTop: '3rem',
        '@media only screen and (max-width: 1080px)':{
          paddingTop: '8rem',
            fontSize: '6rem'
        },
        fontSize: '4.5rem'
    },
        row21: {
        margin: '0',
        padding: '0',
        marginTop: '1rem',
        '@media only screen and (max-width:1080px)':{
            marginTop: '3rem',
            width: '100%'
        }
        
        
    },
        numsub:{
        fontSize: '2.5rem',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '2rem'},
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'center'
    },
        row3: {
        backgroundColor: '#eafc40',
        textAlign: 'center',
        align: 'middle',
        padding: '4rem',
        margin: '0',
        border: '0',
        paddingTop: '5rem',
        '@media only screen and (max-width: 1080px)':{
        paddingBottom: '5rem',
            paddingTop: '5rem' }
    },
                titlestat: {
                textAlign:'center',
            lineHeight: '3rem',
        paddingTop: '5rem',
            paddingBottom: '5rem',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '5rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '4rem',
            paddingBottom: '4rem',
            fontSize: '7rem'}},
    figcap: {
        paddingTop: '1rem'
    },
           imageds1: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '450px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
          height: '300px',
        width: 'auto',
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
        captionds1: {
        paddingTop: '2rem',
        fontSize: '2rem',
        paddingLeft: '8rem',
            paddingRight: "8rem",
         '@media only screen and (max-width: 1300px)': {
             fontSize: '2rem'}
    },
           imageds2: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '250px',
        width: '250px',
         '@media only screen and (max-width: 1300px)': {
          height: '300px',
        width: '300px',
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
               imageds3: {
        marginTop: '2rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: 'auto',
        width: '300px',
         '@media only screen and (max-width: 1300px)': {
          height: 'auto',
        width: '300px',
         },
    boxShadow: '2px 4px 6px #000000',
    align: 'middle'
    },
                list2: {
        paddingLeft: '8rem',
    paddingRight: '8rem',
        fontSize:'2rem',
            paddingTop: '2rem',
        textAlign: 'justify',
            '@media only screen and (max-width: 1080px)':{
                paddingTop: '2rem',
                  paddingLeft: '4rem',
    paddingRight: '4rem'}
    },
            subtitlex: {
        padding: '3rem',
        textAlign: 'center',
        fontSize: '2.5rem',
        paddingTop: '0rem',
         marginTop:'0',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'}
    },
                titlestat: {
                textAlign:'center',
            lineHeight: '3rem',
        paddingTop: '2rem',
            paddingBottom: '5rem',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '5rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '4rem',
            paddingBottom: '4rem',
            fontSize: '7rem'}},
        block1: {
     backgroundColor: '#1ed2f4',
     color: '#1ed2f4',
    margin: '0',
     fontSize: '0.5rem',
        '@media only screen and (max-width: 1300px)': {
            paddingLeft: '5rem'
        },
        lineHeight: '0'
    },
    block2: {
     backgroundColor: '#eafc40',
    color: '#eafc40',
        margin: '0',
    fontSize: '0.5rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '3rem'
        },
          lineHeight: '0'
    },
    block3: {
     backgroundColor: '#fd4445',
    color: '#fd4445',
        margin: '0',
    fontSize: '0.5rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '2rem'
        },
          lineHeight: '0'
    },
    temp:{
        textAlign: 'center',
        fontSize:'3rem',
        paddingBottom: '5rem'
    }
});