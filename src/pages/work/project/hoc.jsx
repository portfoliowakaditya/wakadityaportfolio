import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work/hoc/hoccover.jpg';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';
import {Worktile} from '../worktile.jsx';
import YouTube from 'react-youtube';
import Slides from 'react-slides';
import Iframe from 'react-iframe';



var sectionStyle = {
    backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000'
};


var image = {

};

           const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }}

export class Hoc extends React.Component {
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
                    <div className={css(styles.name)}> Redesigning the experience of learning how to code!  <br/> </div> 
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
                         Started during the Computer Science Education Week from December 9 to December 15, 2013, <a href="https://www.hourofcode.com/us" target="_blank">The Hour of Code</a> started as a one-hour introduction to computer science, designed to demystify "code", to show that anybody can learn the basics, and to broaden participation in the field of computer science. After participating as an instructor in Hour of Code Mumbai,  I decided to redesign the web application.
                        </p>
                        
                    </Col>
     </Row>
     
     
<Row className = {css(styles.row2)} bsClass = 'container'>
         
         
         <p className = {css(styles.titlestat)}> Stats & Motivation 
         
         <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>textttextextextexettxttxtextrtrtrtrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtextetxetrtrttxtt </font> <font className = {css(styles.block3)}>txtxxxtextexxxtx </font>
                            </Typist>
         
         </p>
         
                                    <Col xs={5} sm={5} md={5} lg={5} className = {css(styles.back)}>
                    <p className = {css(styles.number)}>
                        58%
                        </p>
                    <p className = {css(styles.numsub)}>
                      of new STEM jobs are in computing while only 8% STEM grads are in Computer Science.            
                    </p>
                        
                        
                    </Col>
         <Col xs={2} sm={2} md={2} lg={2} className = {css(styles.center)}></Col>
                    <Col xs={5} sm={5} md={5} lg={5} className = {css(styles.back)}>
                    
                     <p className = {css(styles.number)}>
                        90%
                        </p>
                    <p className = {css(styles.numsub)}>
                      of parents want their kids to learn Computer Science but only 40% school teach programming.     
                    </p>
                        
                        
                    </Col>
    </Row>
    
           <div  className={css(styles.toppad)}>                        
    <center>

                        <img src={require('../../../resources/work/hoc/hocpro.jpg')} className={css(styles.imagebe2)} align="middle"  />
        
                                                <figcaption className={css(styles.figcap1)}>
        I visited 5 underprivileged schools in December 2015, over a week and discussed with the students about how programming applications are changing the world and how they can a part of it. During my experience as an instructor I identified potential for improving the user experience.</figcaption>
        </center>
               </div>
     
   
     
     
              <p className = {css(styles.titlestat)}>   <br/><br/><br/> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> 
                  <span/><span/>Tools Used 
         

         
         </p>
         
     
               <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=adobe+photoshop" target="_blank"> <img src={require('../../../resources/work/hoc/adobe-photoshop.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       Photoshop for designing front end assets.           
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=adobe+xd" target="_blank"> <img src={require('../../../resources/work/hoc/xd.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       Adobe Xd for high fidelity prototyping.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=contextual+inquiry" target="_blank">  <img src={require('../../../resources/work/hoc/meeting.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       contextual inquiry for collecting qualitative data.        
               
                    </p>
                        
                        
                    </Col>
     
     </Row>
     

     
     
                 
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> System Analysis and Identification of Stakeholders </p>
                    
    
                    <p className={css(styles.projcont)}>
               An Hour of Code web application, is designed for visual programming, wherein instead of writing code, one can build it like Lego blocks, without having prior knowledge of syntax or algorithms. The aim is not to teach students as much as computer programming in that week, but is to develop a liking for coding in the minds of students so that they themselves look forward to learning more.  
                        
                           <center>
                            <img src={require('../../../resources/work/hoc/vpi.png')} className={css(styles.imagebe2)} align="middle"  />
                               <figcaption className={css(styles.figcap)}>The figure shows an example of Hour of Code visual programming interface.</figcaption>
                        </center>
                        <br/>
                        <br/>
      
                        
                        <center>
                            <img src={require('../../../resources/work/hoc/intervention.jpg')} className={css(styles.imagebe4)} align="middle"  />
                 <figcaption className={css(styles.figcap)}> High Level System Design how entities interact.</figcaption></center>
                        
                                        
                        <center>
                            <img src={require('../../../resources/work/hoc/stake.png')} className={css(styles.imagebe5)} align="middle"  />
                 <figcaption className={css(styles.figcap)}> Description of Stakeholders defining their role and level of involvement.</figcaption>
                                                    <img src={require('../../../resources/work/hoc/per.png')} className={css(styles.imagebe5)} align="middle"  />
                 <figcaption className={css(styles.figcap)}> Description of Stakeholders defining their role and level of involvement.</figcaption>
                        
                        </center>        
                    </p>
                   </Row>

     <Row className = {css(styles.rowstyle)}>
     
       
         
          <p className={css(styles.projtitle)}>   Contextual Inquiry and Qualitative Analysis </p>
         
              <p className={css(styles.projcont)}>
               In order to find out what components of the web application caused issues or received appreciation from the user, I wanted to witness users as they tried out the Hour of Code activity. Hence, I conducted three contextual inquiries, trying to replicate the Hour of Code environment as much as possible based on my past experience. This part of my project was the most time consuming and elaborating on every detail will be out of scope, for this to be a portfolio element. The complete project includes a lot of detailed analyses including identification of leverage points, design issues with the interface, rationale behind prototypes, usability testing etc. You can find the detailed description of the project <a href="https://www.dropbox.com/s/yx8qn42lpqmf56n/test.pptx?dl=0" target="_blank">here.</a> It would be great if you could actually take time and go through that documentation and provide feedback. However, if you want a quick overview of the process, checkout the following video.<br/><br/>
                  
                  <center>
                      <YouTube videoId="bliV30DJTAg" opts={opts} /> </center>
                  
                                          <center>
                  


                                              
                  </center>
                        
                 
                    </p>
         
         
     </Row>

     
    
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> Prototype: First Iteration </p>
                                    
    
                    <p className={css(styles.projcont)}>
              Designed using Adobe Xd, the first prototype presents the first two levels of the visual programming interface with a different storyline from the one the users tried during the contextual inquiry. The major redesigns to the interface include elimination of drag and drop interaction, addition of an exclusive code window, addition of an undo button and addition of an info button.
    
                        <center>
                            
    <img src={require('../../../resources/work/hoc/1.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> Redesigned interface: First Iteration. </figcaption>
                           
                     
                            
    <img src={require('../../../resources/work/hoc/2.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> The new code window dynamically updates as you build the blocks. </figcaption>
                            
    <img src={require('../../../resources/work/hoc/3.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> The info button describes the blocks at any moment, lifting the expectation from users memory. </figcaption>

                        </center>
                    <br/>
                    </p>
                    
                    
                    
                    
                    <p className={css(styles.projtitle)}> Quantitative Usability Testing </p>
                                    
    
                    <p className={css(styles.projcont)}>
Testing was performed on existing users from contextual inquiry, to employ a comparative method of analysis. However, some new users were selected for a fresh perspective towards the new interface, and were then asked to try the original old interface. The analysis was performed keeping in mind that the users may get more familiar with the game in first interface and might play on the second one more easily. Hence some users were given the new interface first to balance that out.
The metrics considered for evaluation include:

<center>
  <p className = {css(styles.list)}>
             <ul>
                 <br/>
              
              <li>
                Time taken to complete level 1 in original interface.

            </li>
            
                       
              <li>
                  Time taken to complete level 2 in original interface.
            </li>
            
                                     
              <li>
                 Time taken to complete similarly difficult level 1  in new interface.
            </li>
                             
                                     
              <li>
                Time taken to complete similarly difficult level 2  in new interface.
            </li>
                            <li>
              Which interface accounted for more number of resets?
            </li>
             </ul>
                 </p>
            
    
                       
                            
    <img src={require('../../../resources/work/hoc/usertest.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe2)}> The analysis revealed that most users completed both the new levels faster, all users found click interface better than drag and drop, less users needed to clear their window and they took slightly more time to understand the components of the new interface.
 </figcaption>
                           

                        </center>
                    
                    </p>                  
                    
                    
    
                   <p className={css(styles.projtitle)}> Qualitative Usability Testing </p>
                                    
    
                    <p className={css(styles.projcont)}>
I got a lot of qualitative feedback from different users. I decided that the criteria for rejecting and accepting conflicting feedback as majority or frequency of that feedback. If more people are providing a kind of feedback, its conflicting feedback will be rejected. Also, I clustered opinions of users into four parts that were flexible. I classfied the feedbacks as positive and strong (clear), positive vague, negative and strong (clear) and finally negative and vague. 
<center>
                       
                            
    <img src={require('../../../resources/work/hoc/qusertest.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe2)}> The analysis revealed that most users understood all elements of intervention, all users found the undo button useful, users could comprehend code better but expected an explanation for all new components.

 </figcaption>
                           

                        </center>
                    <br/><br/>
                    </p>                    
                    
                    
                    
                    
                    
                    
                            <p className={css(styles.projtitle)}> Prototype: Final Iteration </p>
                                    
    
                    <p className={css(styles.projcont)}>
              In the final iteration, based on user feedback, I incorporated a tutorial which helped the user to understand all the components of the game before starting, and also explained complicated elements like understanding which direction is the character in the game facing. It also accounts for improving presentation of information. All information required is kept in the box below the game screen and is presented in contrasting colors, fonts and spaces to improve legibility. You can find the demo of the redesigned application <a href="https://xd.adobe.com/view/65c64f94-0036-45c9-9023-065f92ad6fe4" target="_blank">here.</a>
    
                        <center>
                            
    <img src={require('../../../resources/work/hoc/tut.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> The Fig. shows us how the interface walks the user through the different components of the interface by employing a tutorial before the game. The prototype highlights and explains individual components. </figcaption>
                           
                     
                            
    <img src={require('../../../resources/work/hoc/win.png')} className={css(styles.imagebe4)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> The user has an option to skip the tutorial. </figcaption>
                            
                        </center>
                    
                    </p>            
                    
                    
                    
     </Row>
     
                  <Row className = {css(styles.row21)}>
                        
                           <div className = {css(styles.worktitle)}>
                            Check out my other projects
                            </div>
                            
                    </Row>
            <Row className = {css(styles.center)}>
                <p>
                    <center>
                    <Worktile/>
                    </center>
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
            paddingTop: '5rem',
      paddingBottom: '7rem',
        '@media only screen and (max-width: 1300px)': {
            paddingBottom: '5rem',
                    paddingTop: '10rem'
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
        paddingTop: "1rem",
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
        height: 'auto',
        width: '600px',
         '@media only screen and (max-width: 1300px)': {
             width: '550px',
             height: 'auto'
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
        height: '400px',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
             width: '550px',
             height: 'auto'
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
          boxShadow: '2px 4px 6px #000000',
         '@media only screen and (max-width: 1300px)': {
             width: '550px',
             height: 'auto'
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
            paddingTop: '0rem' }
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
        number: {
        paddingTop: '4rem',
        textAlign: 'center',
        fontSize: '5rem'
    },
    row2: {
        textAlign: 'center',
        align: 'middle',
        paddingTop: '5rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '0rem' }
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
    toppad: {
        marginTop: '6rem'
    },
    figcap:{
             padding: '2rem',
         paddingTop: '1rem',
         paddingLeft: '15rem',
         paddingRight: '15rem',
         textAlign: 'center',
         fontSize: '2rem',
              '@media only screen and (max-width: 1080px)':{
                  paddingTop: '4rem',
                    fontSize: '2rem',
        paddingLeft: '10rem',
         paddingRight: '10rem'
    }
    },
     figcap1: {
        padding: '2rem',
         paddingTop: '1rem',
         paddingLeft: '15rem',
         paddingRight: '15rem',
         textAlign: 'justify',
         fontSize: '2rem',
              '@media only screen and (max-width: 1080px)':{
                  paddingTop: '4rem',
                    fontSize: '3rem',
        paddingLeft: '10rem',
         paddingRight: '10rem'
    }},
         imagebe4: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '400px',
        width: 'auto',
              boxShadow: '2px 4px 6px #000000',
         '@media only screen and (max-width: 1300px)': {
             height: '400px',
             width: 'auto'
         }},
             imagebe5: {
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '450px',
                  boxShadow: '2px 4px 6px #000000',
        width: 'auto',
         '@media only screen and (max-width: 1300px)': {
             height: '600px',
             width: 'auto'
         }},
        list: {
        paddingLeft: '8rem',
    paddingRight: '8rem',
        fontSize:'2rem',
        textAlign: 'justify',
            '@media only screen and (max-width: 1080px)':{
                  paddingLeft: '4rem',
    paddingRight: '4rem'}
    },
        captionbe2: {
        paddingTop: '2rem',
        fontSize: '1.75rem',
            paddingLeft:'10rem',
            paddingRight: '10rem',
         '@media only screen and (max-width: 1300px)': {
             fontSize: '2rem',
         textAlign:'justify'}
    },
            row21: {
                textAlign: 'center',
        margin: '0',
        padding: '0',
        marginTop: '6rem',
        '@media only screen and (max-width:1080px)':{
            marginTop: '3rem',
            width: '100%'
        }
        
        
    },
            center: {
        textAlign: 'center',
        align: 'middle',
        paddingLeft: '10%',
           '@media only screen and (max-width: 1300px)': {
           paddingLeft: '8%'
           }
    }
});