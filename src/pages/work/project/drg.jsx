import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work//drg/cover.jpg';
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


export class Drg extends React.Component {
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
                    <div className={css(styles.name)}> Redesigning Introduction to Sewing Workshop.  <br/> </div> 
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
                         In attempts to explore a completely unknown design space, I participated in the directed research, which aimed to redesign the introduction to sewing workshop conducted at the CoMotion Makerspace, under the guidance of UW HCDE PhD student Kathryn Shroyer. I got the opportunity to experience unique methods for qualitative data collection, the creative environment of the MakerSpace and most importantly, learning the principles of <a href="https://medium.com/@thestratosgroup/co-design-a-powerful-force-for-creativity-and-collaboration-bed1e0f13d46">Co-Design!</a>
                        </p>
                        
                    </Col>
     </Row>
              <p className = {css(styles.titlestat)}> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> <span/><span/>Tools Used 
         

        
         </p>
         
     
               <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=audio+transcription" target="_blank"> <img src={require('../../../resources/work/drg/audio.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                      Audio recording and transcription for capturing detailed conversations.       
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=journey+mapping" target="_blank"> <img src={require('../../../resources/work/drg/excursion.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                                 Journey mapping for identifying the emotional experience.
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://blog.optimalworkshop.com/how-to-record-and-analyze-user-research-observations" target="_blank">  <img src={require('../../../resources/work/drg/contract.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                      Building a process for coding real time observations efficiently.          
               
                    </p>
                        
                        
                    </Col>
     
     </Row>
     
     
     
     
                 
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> 
                    
                 CoDesign Iteration 1: Exploring Introduction to Sewing from scratch!
                    </p>
                                    
    
                    <p className={css(styles.projcont)}>
                        The process of CoDesign was planned to be implemented in two iterations of the workshop. Our group of 8 students was divided into <b>4 makers</b> and <b>4 obvservers</b>. I participated as an observer in this iteration and the process can be described as:


                        <ul className={css(styles.list)}>
                            <br/>
                            <li>
                             The 4 makers would take up the workshop as it was originally, and the 4 observers collected qualitative data as it would proceed.
                            </li>
                            
                                                        <li>
                            The whole group then attempted to capture the information flow involved in the process and learnt how to access the data housed in artifacts and people.
                                                    
                            </li>
                        
                                                        
                                                        <li>
                           After performing qualitative analysis and identifying improvements in the methodology of collecting real time data itself, the 2nd iteration of the workshop was conducted with makers and observers switching roles.
                                                    
                            </li>
                        <br/>
                        </ul>
                    
            The primary aim of the workshop was to teach students how to stitch a fairly simple tote bag. Since a bag was useful for daily activities, it would motivate the students while ensuring the final deliverable was not too difficult to acheive.
                        <br/>
                        
            In the first workshop, the observers took a much active role which involved interacting with the makers, asking them questions about the process, getting dynamic feedback and critiques about the resources of the workshop like instruction sheet, fabric templates etc. The observers coded real time feedback and observations, mapping them to three major attributes, <ul>
                        <li> Phase of thhe workshop (Marking, Cutting, Pinning, Stitching, Ironing)</li>
                        <li>Location of the Maker</li>
                        <li>Timestamp of the action/ observation.</li>
                        </ul> 
            Emotions like confusion, frustration, motivation etc. It is much easier to analyze text coded data which is timestamped and classified based on attributes like tools used, location, phase etc.<br/><br/>
                        <center>
                            <img src={require('../../../resources/work/drg/coding.png')} className={css(styles.imagebe3)} align="middle"  />
                            <figcaption className={css(styles.figcaption)}> An example of real time coding in the frist workshop </figcaption>
                        
                        </center>
            
                        <br/><br/>
               The other source of qualitative data for the first workshop was audio recording and transcription. It provides us with traces of externalized sound (vocal utterances and noises from actions taking place in the workshop) over time.  We can document what was spoken, by whom, and at what time.  This allows us to look at verbal information exchange between people (instructor and participants) in the workshop. When transcribing it is often hard to distinguish voices.  As part of the workshop introductions.  Ask people to only use first names so they are less identifiable.  Names will allow us to get a sense of voice and trace through.
                        <br/><br/>
                                        <center>
                            <img src={require('../../../resources/work/drg/trans.png')} className={css(styles.imagebe3)} align="middle"  />
                                                             <figcaption className={css(styles.figcaption)}> 
                                            A sample of transcribed audio.
                                            </figcaption>
                      
                        </center>
                        </p>
              
                       
                    

                </Row>
                
     

     
    
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}>  Qualitative Analysis: Building a Vocabulary. </p>
                                    
    
                    <p className={css(styles.projcont)}>
              The process of the workshop or sewing in general involves a lot of tools & materials with detailed definitions and functions. In order to organize the information to gain better perspective about the volumne of information available about the environment, and to generate an efficient way to disseminate the most relevant information to the students, we decided to build a vocabulary for the tools, materials and the environment. We put together a document with photographs of materials and tools along with a description of their function and modes relevant to the workshop. 
                        <center>
                            
    <img src={require('../../../resources/work/drg/cap.png')} className={css(styles.imagebe1)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}> Vocabulary generation for materials.  </figcaption>
                           
                     
                        <img src={require('../../../resources/work/drg/cap1.png')} className={css(styles.imagebe1)} align="middle"  />
                                   <figcaption className = {css(styles.captionbe1)}> Vocabulary generation for tools. </figcaption>

                        </center>
                    
                    </p>
     </Row>
               
     
     
         
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}>  Qualitative Analysis: Journey Mapping. </p>
                                    
    
                    <p className={css(styles.projcont)}>
              After finishing the workshops, maker and observer pairs created user journey maps to capture the feelings, thoughts and emotions makers had during each step of the workshop. Creation of the user journey maps allowed us to refine what we wanted to hone in on when making our observations and helped with the standardization of terminology in terms of locations, steps, actions and tools. Since the design space involves a lot of varied phases along with expectations from the user to pick up a lot of new skills to deliver one final product, jouney mapping was a great way to analyze the emotions of the user at every phase.
                              <center>
    <img src={require('../../../resources/work/drg/jm.jpg')} className={css(styles.imagebe1)} align="middle" />
                                <figcaption className = {css(styles.captionbe2)}> The journey map describes the emotion experienced by the subject, along with the difficulty of a certain stage. A higher emotion represents happiness, motivation, enjoyment whereas a lower emotion represents doubt, fear, frustration etc. For instance, for the first sewing phase, I experienced the maximum difficulty and frustration. But by the time I had reached the final sewing stage at the end of the process, it felt less difficult since I had done it once before, and I also felt motivated to do the similar activity again.  </figcaption>
                           
            

                        </center>
                    
                    </p>
     </Row>
     
     
              
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}>     CoDesign Iteration 2: Plugging in the redesigned methodologies! </p>
                                    
    
                    <p className={css(styles.projcont)}>
              In the second iteration, I participated as a maker, and experienced the whole workshop, ultimately making my first hand made bag. However, there were some major changes in the environment and data collection processes of this iteration. Based on our brainstorming sessions and qualitative analysis, we redesigned some aspects of the workshop and of the methodologies we employed to collect data from the participants. Firstly, we had the maker space for sewing redesigned. The previous arrangement of sewing, cutting and ironing stations seemed somewhat congested, and we felt it could be optimzed. Depending on the chronology of the phases of the workshop and amount of material required to complete a phase, we rearranged the makerspace in the following manner.
                              <center>
                           
                      <img src={require('../../../resources/work/drg/ini.png')} className={css(styles.imagebe1)} align="middle"  />
                                                                     <figcaption className = {css(styles.captionbe1)}> This is a representation of the original arrangement of the makerspace. </figcaption>
                        <img src={require('../../../resources/work/drg/fin.svg')} className={css(styles.imagebe1)} align="middle"  />
                                   <figcaption className = {css(styles.captionbe1)}> The rearranged space for a better experience. </figcaption>

            

                        </center>
                    <br/>
                        Other important changes in the second iteration included a modified sheet for coding observations. This sheet applied less restrictions on the observer to enter details around the observations like location, tools, materials etc. The sheet instead was more flexible with a larger 'actions' region to describe a more detailed observation, which would account for the lost predefined details. Moreover, the observers this time around did not interact with the makers at all. There were no discussions or questions. The observers took a 'fly on the wall' approach, maintaining distance and making notes on digital platforms. Macros were made to delineate these procedures in a very detailed manner. These macros provided information to observers about what kind of information to look out for during the workshop. Besides this, other students in the group were involved heavily in data collection methods of video recording and feedback collection like post and pre workshop surveys.
                        
                                                      <center>
                           
                      <img src={require('../../../resources/work/drg/real.png')} className={css(styles.imagebe1)} align="middle"  />
                                                                     <figcaption className = {css(styles.captionbe1)}> Summary table from Real Time Observations Macro </figcaption>
                        <img src={require('../../../resources/work/drg/plan.jpg')} className={css(styles.imagebe1)} align="middle"  />
                                   <figcaption className = {css(styles.captionbe1)}> Planning the elements within macros.</figcaption>

            

                        </center>
                        <br/>
                        All these details were ultimately within one Tech Report for future reference and documentation to support groups who continue the research on the topic in future.
                    </p>
     </Row>
     
     
     
                  <Row className = {css(styles.row21)}>
                        
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
            paddingTop: '4rem',
      paddingBottom: '4rem',
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
        captionbe2: {
        paddingTop: '2rem',
        fontSize: '1.5rem',
            textAlign: 'justify',
         '@media only screen and (max-width: 1300px)': {
             fontSize: '1.5rem'}
    },
       imagebe2: {
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
     imagebe3: {
        marginTop: '1rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: '350px',
        width: 'auto',
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
            fontSize: '7rem'}}
    
});