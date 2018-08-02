import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work/f570/back.png';
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



export class Alz extends React.Component {
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
                    <div className={css(styles.name)}> Design Guidelines for better assistive technology.  <br/> </div> 
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
                         Technology, in general, is difficult to understand daily, even for completely healthy individuals. So, one can imagine how much of a struggle it is, for <a href = "https://www.google.com/search#q=Alzheimer+disease" target = "_blank">
                            Alzheimer’s </a> patients to embrace <a href = "https://www.alzheimers.org.uk/get-support/staying-independent/what-assistive-technology-available" target = "_blank">assistive technology</a> for support. I, along with my teammates, wanted to investigate the design issues with assistive technology, to find out how we can improve its usability and define guidelines for <a href = "https://cargocollective.com/ritamaldonadobranco" target="_blank">design</a>.
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
                        89%
                        </p>
                    <p className = {css(styles.numsub)}>
                       Increase in the deaths because of Alzheimer's between 2000 and 2014.             
                    </p>
                        
                        
                    </Col>
         <Col xs={2} sm={2} md={2} lg={2} className = {css(styles.center)}></Col>
                    <Col xs={5} sm={5} md={5} lg={5} className = {css(styles.back)}>
                    
                     <p className = {css(styles.number)}>
                        15M
                        </p>
                    <p className = {css(styles.numsub)}>
                       Americans are unprofessional caregivers for patients with Dementia.        
                    </p>
                        
                        
                    </Col>
     </Row>
                                    
                        <p className = {css(styles.subtitle)}>
                            <br/> <br/> 
                         <i>During the literature survey of the project, we discovered that conventional assistive technology is expensive and has very little scope for personalization. With the rise of new and cheap voice assistants, we felt that there is an opportunity to guide patients with a personal touch, which is essential for Alzheimer's, as it does not have a cure and needs immense emotional intelligence.</i>
                        </p>
     
     
              
         <p className = {css(styles.titlestat)}> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> <span/><span/>Tools Used 
         

         
         </p>
    
          <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         

         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=tableau" target="_blank"> <img src={require('../../../resources/work/tab.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       For visualizing statistical evidences.            
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=python" target="_blank"> <img src={require('../../../resources/work/python.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       For finding correlations within user data.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=affinity+diagrams" target="_blank">  <img src={require('../../../resources/work/affinity.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       Affinity diagrams for qualitative data .             
                    </p>
                        
                        
                    </Col>
     
     </Row>
     
     
     
     <Row>
     
         <p className = {css(styles.title2)} align="middle"> Data Collection and Research </p>
         <p className = {css(styles.subtitle1)}> 
            There is an overwhelming amount of research on Alzheimer's disease and resources for caregivers, so we decided to scope our project, geographically, within the United States of America and aimed to measure the awareness of caregivers towards professional aspects of caregiving like ethics of interaction and patient's perception of the world. Because of the variety of ways in which one can tackle this problem, we decided to select the following data sources:
             <p className = {css(styles.list)}>
             <ul>
                 <br/>
             <li>
            <b> 1. PEW Transcripts (PEW Research, 2013):</b>
&nbsp;The PEW transcripts provided data on 467 caregiver interviews. We used the transcripts to find recurring
themes across the interviews which would help formulate as well as strengthen our recommendations. 
            </li>
                 <br/>
              <li>
                  <b> 2. NACC (National Alzheimer's Coordinating Center, 2016) database:</b>
&nbsp;The NACC database provides demographic data of more than 35,000 Alzheimer’s patients. It gives subject
demographics in terms of age, gender, race, ethnicity, education versus the level of impairment amongst
other variables.
            </li>
            
                             <br/>
              <li>
                  <b> 3. Telephonic Interviews:</b>
&nbsp;To get an expert opinion on the existing ethics being followed while using assistive technology for
Alzheimer’s patients, we conducted 7 telephonic interviews to caregiving centers across the state of
Washington. These centers were selected through cluster sampling so as to get separate groups and not
concentrate on a particular area. 
            </li>
            
                                         <br/>
              <li>
                  <b> 4. Surveys:</b>
&nbsp;From our secondary research on caregiver.org (Family Caregiver Alliance, 2016), we found that 48% of
non-professional caregivers lie in the age bracket of 18-49 years. Hence, we conducted 31 surveys in and around the University of
Washington targeting people in this age bracket. 
            </li>
             </ul>
                 </p>
            
         </p>
         
 <p className = {css(styles.subtitle2)}> 
                    But does the technology truly address the problems it was designed to address?
             <p className = {css(styles.list)}>
             <ul>
                 <br/>
             <li>
           Does unethical use of assistive technology cause discomfort to the patient?
            </li>
              
              <li>
                 Why do patients resist the use of assistive technology and not accept it for their betterment?
            </li>
            
                       
              <li>
                  What are the ethical standards to be taken into consideration while using assistive technology?
            </li>
            
                                     
              <li>
                What are the misconceptions of non-professional caregivers regarding assistive technology?
            </li>
             </ul>
                 </p>
            
         </p>         
         

     </Row>
     
         <p className = {css(styles.title2)} align="middle"> Quantitative Analysis </p>
            
            
            
         <p className = {css(styles.subtitle1)}>
The level of understanding of ethics like consent, privacy, freedom and
non-maleficence shown by Alzheimer’s patients, highly depends on how deeply the disease affected them.
Patients at an earlier stage tend to understand situations when they want to give consent and when they do
not, but highly affected patients do not understand situations if the technology is harming or not. Assistive technology needs to be built differently for patients with different levels of impairment. Hence, we performed quantitative analysis in order to understand what characteristics of patients affects their level of impairment, using the NACC dataset.
             
             <p className={css(styles.list1)}>
          
        <b> 1. Age and Level of impairment: </b>
             &nbsp;We performed the chi-square hypothesis test on Age vs. Level of Impairment of the patient. The graph is showing the highest amount of impairment in the 70-79 age range for every level of impairment except 'mild impairment', for which it is higher in the 80-89 age range. This graph shows that as age increases, the number of people
suffering from a higher level of impairment over time also increases. </p>         
         </p>
         

     
             <img src={require('../../../resources/work/f570/race.png')} className={css(styles.image)} />
         
    
             <p className = {css(styles.subtitle1)}>
              <p className={css(styles.list1)}>
         
        <b> 1. Race and Level of impairment: </b>
             &nbsp;Different races have different metabolisms and hence different immunity and fitness levels. To ascertain
this statement, we carried out this chi-square hypothesis test to check if there is a relationship between
different races and level of impairment. The bars show the percentages of people from a particular race having a particular level of impairment.
                  As observed in the graph, there is a higher percentage of Native Hawaiian people suffering from moderate and mild impairment than the other races.  </p> </p>
     
             <img src={require('../../../resources/work/f570/age.png')} className={css(styles.image)} />
         
     
              <p className={css(styles.list2)}>
 Race and Age affect the level of impairment, which in turn affects the ethical considerations
to be taken care of while using assistive technology. For example, for a race like Native Hawaiian, the
disease affects mildly, and the consent and privacy of the patient should be taken care of as the patient is
sane enough to decide what is good or bad for him. However, for some other race like African, which
shows high level of impairment, the ethical considerations for consent, privacy etc. should not be as
serious and should be left to the perception of the caregiver as the patient is deeply affected by the disease, enough to hamper their reasoning for preferences. </p> 
     
     
        <p className = {css(styles.title2)} align="middle"> Qualitative Analysis </p>
     
     <p className = {css(styles.subtitle)}>
     
         To generate more comprehensive and better-quality insights about the behavior of patients, we decided to conduct telephonic interviews and surveys of people with previous experience of caregiving. We analyzed this data using thematic analysis tools, most significantly affinity diagrams. The organizations involved in the telephonic interviews process include:
                      
         <p className={css(styles.list2)}>
         <ul>
                 <br/>

              
              <li>
Mountain View Health Care and Rehabilitation Centre, Marysville, WA.
            </li>
            
                       
              <li>
American Healthcare Services, Seattle, WA.
            </li>
            
                                     
              <li>
The Hampton Alzheimer's Special Care Center, Turnwater, WA.
            </li>
                                                               
              <li>
Alzheimer’s Association, Spokane, WA.
            </li>
                                                                                         
              <li>
Alzheimer’s Research Center, UW.
            </li>
                                                                                                                   
              <li>
HarborView Medical Care, WA.
            </li>
                                        <li>
Fisher Center for Alzheimer’s Research Foundation, WA.
            </li>
             </ul>
         </p>
         <br/>  From our surveys, the most vital observation we had was that most people from a sample demographic of the age of caregivers do not possess a decent amount of knowledge of the disease, let alone of the emotional disbalance it causes and how to see the world from the perspective of a patient. There are very complex emotional constructs we came across during our telephonic interviews, such as, patients feel uncomfortable to receive certain kind of help, like assistance for personal hygiene, from younger members of their family, as it hurts their self respect. Requiring support from the children they raised, makes them feel like a burden on the family. There is immense lack of understanding in the general public about such issues, which is a concern because majority of the caregivers in the USA are unprofessional. Know can find questions in the survey and the rationale behind them <a href="https://www.dropbox.com/s/h2u7ssp0u6mnqd0/survey.pdf?dl=0" target="_blank">here.</a> 
         <br/>
         
         <p align="left">The following themes were the most significant in our analysis:</p>

         
     </p>
              <img src={require("../../../resources/work/f570/themes.png")} align="middle" className={css(styles.image1)} height= 'auto' width = "75%"/>
    
     
                   <img src={require("../../../resources/work/f570/know.png")} align="middle" className={css(styles.image1)} height= 'auto' width = "75%"/>
     
     
       <p className = {css(styles.subtitle1)}>
           <br/>
           One of the most unique and common theme we came across is that Alzheimer's patients do not comprehend to newer things in their life. Alzheimer's disease leads to memory loss and confusion about daily routines. This leads to most patients only clearly remembering concepts and technologies, only from the younger stages of their life. They do not comprehend very well to assistive technology as something helpful and misunderstand it to be something threatening.  In this circumstance, enforcing the use of such technology would be unethical, as one would be forcing the patient to use something that threatens the patient.
   
     
     
     <img src={require("../../../resources/work/f570/proof.png")} className={css(styles.image2)} width="85%" height="auto"/>  </p>
     
    <br/>
     
         <p className = {css(styles.titlestat)}> Recommendations
         
         <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>textttextextextexettxttxtextrtrtrtrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtextetxetrtrttxtt </font> <font className = {css(styles.block3)}>txtxxxtextexxxtx </font>
                            </Typist>
         
         </p>
     
     <p  className={css(styles.subtitlex)} align="middle">
         
        The following are the design guidelines we developed for designing more effective assistive technology:
         <p className={css(styles.list2)}>
              <ul>
                 <br/>

              
              <li>
Design technology that somehow replicates memories from their youth, e.g. some poem or some song from their culture and youth should be incorporated. Patients tend to completely forget their current state and so usage of current technology threatens them, which makes its usage unethical. 

            </li>
                    <br/>
                                
              <li>
Considering Age and Race as a factor.                                    Assistive technology should be configurable or should have inexpensive alternative for patients of different ages and races. We found that Ethics and Age / Race have a relation to the severity of the disease. Different versions of technology which ensure optimal level of empathy, reasoning, expectation and enforcement for the patients, will prove to be more effective.


            </li>
            
                    <br/>
                                
              <li>
Awareness about ethical use and assistive technology itself is really less. Hence, assistive technology should be distributed with either appropriate tutorials and cautionary measures along with the devices, or should be distributed to caregivers after they have attended some professional training for using them. It is essential for the caregivers to be aware of the biological causes, concerns and consequences of the Alzheimer's disease, and of ethical considerations, like privacy, beneficence, autonomy and non-maleficence to be kept in mind while dealing with patients.


            </li>
            
            
 
             </ul>
         </p></p>
     
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
        back: {
        padding: '2rem',
        color: '#1c2329',
        backgroundColor: '#1ed2f4',
        opacity: '0.8',
        boxShadow: '2px 4px 6px #000000'
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
    number: {
        paddingTop: '4rem',
        textAlign: 'center',
        fontSize: '5rem'
    },
    row2: {
        textAlign: 'center',
        align: 'middle',
        paddingTop: '10rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '0rem' }
    },
    row3: {
        backgroundColor: '#eafc40',
        textAlign: 'center',
        align: 'middle',
        padding: '4rem',
        margin: '0',
        border: '0',
        paddingBottom: '4rem',
        '@media only screen and (max-width: 1080px)':{
        paddingBottom: '5rem',
            paddingTop: '0rem' }
    },
    row1: {
        paddingBottom: '5rem'
    },
    numsub:{
        fontSize: '2.5rem',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '2rem'},
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'center'
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
        subtitle1: {
        padding: '3rem',
        textAlign: 'justify',
        fontSize: '2.5rem',
        paddingTop: '1rem',
        marginLeft: '6rem',
        marginRight: '6rem',
         marginTop:'0',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'}
    },
    list: {
        paddingLeft: '8rem',
    paddingRight: '8rem',
        fontSize:'2rem',
        textAlign: 'left',
            '@media only screen and (max-width: 1080px)':{
                  paddingLeft: '4rem',
    paddingRight: '4rem'}
    },
        list1: {
        paddingLeft: '8rem',
    paddingRight: '8rem',
        fontSize:'2rem',
            paddingTop: '2rem',
        textAlign: 'justify',
            '@media only screen and (max-width: 1080px)':{
                paddingTop: '2rem',
                  paddingLeft: '2rem',
    paddingRight: '2rem'}
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
    middletitle: {
        textAlign: 'center',
        fontSize: '3rem',
            '@media only screen and (max-width: 1080px)':{
            fontSize: '2rem'}
    },
            subtitle2: {
        padding: '3rem',
        textAlign: 'center',
        fontSize: '2.5rem',
        paddingTop: '1rem',
        marginLeft: '6rem',
        marginRight: '6rem',
         marginTop:'0',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'}
    },
    image: {
        align: 'middle',
        height: '65%',
        width: '65%',
        marginBottom:'3rem',
        paddingLeft:'20rem',
        textAlign: 'center',
                '@media only screen and (max-width: 1080px)':{
                height: '80%',
        width: '80%'}
    },
    image1: {
        marginTop: "2rem",
        paddingLeft: '20rem',
                        '@media only screen and (max-width: 1080px)':{
                            paddingLeft: '10rem',
                height: '90%',
        width: '90%'}
    },
        image2: {
        marginTop: "3rem",
        paddingLeft: '15rem',
                        '@media only screen and (max-width: 1080px)':{
                            paddingLeft: '3rem',
                height: '100%',
        width: '100%'}
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
        worktitle: {
        paddingBottom : '3rem',
        textAlign: 'center',
        paddingTop: '6rem',
        '@media only screen and (max-width: 1080px)':{
          paddingTop: '8rem',
            fontSize: '6rem'
        },
        fontSize: '4.5rem'
    },
        row21: {
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
    },
            number: {
        paddingTop: '4rem',
        textAlign: 'center',
        fontSize: '5rem'
    },
            numsub:{
        fontSize: '2.5rem',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '2rem'},
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'center'
    }
       
    
    
});