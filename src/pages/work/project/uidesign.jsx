import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work/uid1.png';
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


export class Uid extends React.Component {
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
                    <div className={css(styles.name)}> Building User Interfaces for Information Systems.  <br/> </div> 
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
                         I started developing web pages at the age of 15, and have since built a variety of interfaces. Every project brought a different experience to the table and helped me develop a wider perspective towards understanding requirements of stakeholders, configuring visual components for perfect usability and adding simplicity to my desings. The following three projects have been the most unique and challenging.
                        </p>
                        
                    </Col>
     </Row>
              <p className = {css(styles.titlestat)}> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> <span/><span/>Tools Used 
         

         
         </p>
         
     
               <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=css" target="_blank"> <img src={require('../../../resources/work/css.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       CSS for stylizing visual components.            
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=javascript" target="_blank"> <img src={require('../../../resources/work/javascript.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       Javascript for developing interactions with users.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=python" target="_blank">  <img src={require('../../../resources/work/py.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       Python for backend processing and data analysis.          
               
                    </p>
                        
                        
                    </Col>
     
     </Row>
     
     
     
     
                 
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> 1. The Baki Project: UI for a content management system. </p>
                                    
    
                    <p className={css(styles.projcont)}>
               In the Fall of 2017, I worked as a Student Developer for the University of Washington, Near Eastern Languages and Civilizations Department, with <a href = "https://sarahketchley.com/" target="_blank">Prof. Sarah Ketchley</a> , to develop a web interface which allows academia professionals to access manuscripts and research on the works of the Turkish poet 'Baki'. The digital manuscripts of a given topic were preserved and maintained in a standard content management system called 'Omeka'. Omeka is an open-source web publishing platform, for sharing digital collections and creating media-rich online exhibits. The aim of the final deliverable was:
                        <ul className={css(styles.list)}>
                            <br/>
                            <li>
                            1. It should be convenient for academia professionals, having no background of web development, to maintain the web interface. It should allow easy addition of pages, editing of content, publishing of media and events etc. 
                            </li>
                            
                                                        <li>
                            2. It should seamlessly integrate with Omeka, and should allow access to Omeka exhibits from the web interface, without making the user feel that the user is entering into some completely different platform.
                                                    
                            </li>
                        
                                                        
                                                        <li>
                            3. It should allow scholars from all over the world to collaborate and develop methodologies for organizing, managing, and implementing a large scale collaborative manuscript editing project with many participants.
                                                    
                            </li>
                        <br/>
                        </ul>
                        
            An optimal choice which allowed academia professionals to freely make changes to the website, while allowing a one time customization for integration with <b>Omeka</b>, was <b>WordPress</b>. WordPress being an open source content management system with large number of plugins, online community and templates to structure a website, fit as a good choice to build the interface on.<br/><br/>
                        <center>
                            <img src={require('../../../resources/work/bakiproject/baki_1.png')} className={css(styles.image)} align="middle"  />
                        <img src={require('../../../resources/work/bakiproject/baki_4.png')} className={css(styles.image)} align="middle"  />
                        </center>
                        
                        <br/><br/>
                To make it accessible to scholars worldwide for collaborating, and integrating it with the Omeka interface, I used heavy CSS customization, which enabled me to edit the Omeka interface, to look exactly like the wordpress interface. Using the embed codes for transcript exhibits, I desinged an interface which provides the user with an combined experience without having the knowledge of how Omeka works. Moreover, I integrated NELC's Turkish Translation tool, which allows researchers to translate manuscripts from images.
                        <br/><br/>
                                        <center>
                            <img src={require('../../../resources/work/bakiproject/baki_2.png')} className={css(styles.image)} align="middle"  />
                        <img src={require('../../../resources/work/bakiproject/baki_3.png')} className={css(styles.image)} align="middle"  />
                        </center>
                        </p>
              
                       
                    

                </Row>
                
     

     
    
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}>  2. Sentiment Analysis of Movie Reviews: UI for Predictive Analytics </p>
                                    
    
                    <p className={css(styles.projcont)}>
              As my senior year engineering capstone project, I worked towards building a Facebook Messenger Chatbot for looking up movie review, along with teammates <a href="https://github.com/OrthoDex?tab=repositories" blank="_target">Ishaan Malhi</a> and <a href="https://www.linkedin.com/in/kinjal-chavda-b79a5661/" target="_blank">Kinjal Chavda</a>. I designed a sentiment analysis system which delivers a label, denoting negative or positive classification and sentiment score, denoting the strength of the sentiment. Using Baysian Classification and Word2Vec algorithm (python's gensim library), we were able to classify aspects of a review into positive/ negative and find out how strong the sentiment of the review is.
    
                        <center>
                            
    <img src={require('../../../resources/work/beproj/be1.jpg')} className={css(styles.imagebe1)} align="middle" />
                                <figcaption className = {css(styles.captionbe1)}>High Level diagram of the whole system.</figcaption>
                           
                     
                        <img src={require('../../../resources/work/beproj/be2.jpg')} className={css(styles.imagebe1)} align="middle"  />
                                   <figcaption className = {css(styles.captionbe1)}> System design of sentiment analysis module. </figcaption>

                         <img src={require('../../../resources/work/beproj/be3.png')} className={css(styles.imagebe1)} align="middle"  />
                              <figcaption className = {css(styles.captionbe1)}> Words from a test movie review visualized by the system. <br/>Similar words are closely embedded in the space.</figcaption>
                        </center>
                    
                    </p>
            <p className={css(styles.projcont)}>
            Explaining the system in detail, as a portfolio element, would be out of scope. You can find a detailed description of the project <a href="https://www.dropbox.com/s/xvx59x7skname7u/Black%20Book%20%281%29.docx?dl=0" target="_blank"> here.</a> The design challenge was to develop an interface, which communicates the results of sentiment analysis to lay users. After studying the inital feedback of users about the process of checking movie reviews, we made the following decisions with respect to the UI. 
            <ul className={css(styles.list)}>
                            <br/>
                            <li>
                            Users visit popular movie review websites like NYTimes and IMDB, despite having to follow the tedious process of opening a browser and visiting specific site for a verbose review. Users also don't prefer to download a mobile application specifically for this niche purpose of finding movie reviews. Hence, we decided to build a chatbot which enabled users to find reviews faster and more conveniently. Self explanatory commands like 'Discover' or 'Get Ratings' helped users get movie listings and the summaries of their reviews and users would not have to install extra apps as the Bot would be available in Facebook's Messenger App.
                            </li>
                            <br/>
                            
                                                        <li>
                            When a user is trying to understand reivews of movies, the user is not concerned about the accuracy of the sentiment score with upto 2 decimal values, as provided by the backend analytics. The user just wants to understand what different aspects of the movie are good or bad. Hence, we presented the summary of a review as a list of aspects of a movie review like direction, storyline, actors etc. and converted the sentiment score of each aspect into smileys using a fuzzy system. A negative sentiment would show a number of sad smileys depending on how bad the sentiment and likewise, a positive sentiment would show happy smiley.
                                                    
                            </li>
                        
                        <br/>
                        </ul>

                            <center>
                            <img src={require('../../../resources/work/ssbe1.png')} className={css(styles.imagebe1)} align="middle" />
                                                        <figcaption className = {css(styles.captionbe1)}> Requesting movie releases near you on the chatbot. </figcaption>
                                                   
                                             
                                                <img src={require('../../../resources/work/ssbe2.png')} className={css(styles.imagebe1)} align="middle"  />
                                                           <figcaption className = {css(styles.captionbe1)}> Exploring movie titles. </figcaption>
                        
                                                 <img src={require('../../../resources/work/ssbe3.png')} className={css(styles.imagebe1)} align="middle"  />
                                                      <figcaption className = {css(styles.captionbe1)}> Requesting movie review summary from the chatbot. <br/>Similar words are closely embedded in the space.</figcaption>
                                            
                                                      </center>
                
                    </p>
     </Row>
                     
     
                     <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}>  3. Huddle: Online Crowdfunded Event Management System </p>
                          <p className={css(styles.projcont)}>
                        In my junior year computer engineering, I brainstormed and developed a concept of people being able to crowdsource events and niche experiences, along with teammates <a href="https://github.com/OrthoDex?tab=repositories" blank="_target">Ishaan Malhi</a> and <a href="https://www.linkedin.com/in/kinjal-chavda-b79a5661/" target="_blank">Kinjal Chavda</a>. The project was a website which acted as a platform to link people, artists/ speakers and event management organizations. We wanted to have an interface which allowed people to create or upvote their favourite events, and crowdsource them. Designing the system heavily involved identifying stakeholders and defining their role in the system. This was followed by developing a solid information flow, and translating that into components of database and website.
                         
                         
                                                     <center>
                            <img src={require('../../../resources/work/use case CAD.png')} className={css(styles.imagebe2)} align="middle" />
                                                        <figcaption className = {css(styles.captionbe1)}> Identifying stakeholder roles. </figcaption>
                                                   
                                             
                                                <img src={require('../../../resources/work/Class Diagram.png')} className={css(styles.imagebe2)} align="middle"  />
                                                           <figcaption className = {css(styles.captionbe1)}> Developing information flow between classes in the website.</figcaption>
                        
                                                 <img src={require('../../../resources/work/Sequence Diagram.png')} className={css(styles.imagebe2)} align="middle"  />
                                                      <figcaption className = {css(styles.captionbe1)}> 
                                                          Designing the sequence of activities in a session.
                                                         </figcaption>
                                            
                                                      </center>
                              <br/>
                        Based on our system design and analysis, we developed an interface that allows users to login, signup,create an event, upvote other events and seamlessly participate in crowdfunding.
                              
                              
                                                 
                                                     <center>
                            <img src={require('../../../resources/work/huddle/huddle_2.png')} className={css(styles.imagebe3)} align="middle" />
                                                        <figcaption className = {css(styles.captionbe1)}> Creating a new event.</figcaption>
                                                   
                                             
                                                <img src={require('../../../resources//work/huddle/huddle_4.png')} className={css(styles.imagebe3)} align="middle"  />
                                                           <figcaption className = {css(styles.captionbe1)}> Finding about other events.</figcaption>
                        
                                                 <img src={require('../../../resources/work/huddle/huddle_3.png')} className={css(styles.imagebe3)} align="middle"  />
                                                      <figcaption className = {css(styles.captionbe1)}> 
                                                          Comparing stats of events.
                                                         </figcaption>
                                                         
                                                         
                                                 <img src={require('../../../resources/work/huddle/huddle_1.png')} className={css(styles.imagebe3)} align="middle"  />
                                                      <figcaption className = {css(styles.captionbe1)}> 
                                                        Contact and Support Page.
                                                         </figcaption>
                                            
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
        marginTop: '6rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        height: 'auto',
        width: '800px',
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
            fontSize: '7rem'}}
    
});