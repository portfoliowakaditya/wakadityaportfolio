import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Mynavbar} from '../../../components/navig.jsx';
import {Portfoot} from '../../../components/footer.jsx';
import Background from '../../../resources/work/ds/chart.jpg';
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


export class Ds extends React.Component {
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
                    <div className={css(styles.name)}> Developing data insights for an Ecommerce business.  <br/> </div> 
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
                            <a href = "https://www.flavorsofmycity.com/" target="_blank"> Flavors of My City </a> is an Indian online retail business focusing primarily on delivering the region-specific delicacies to other parts of India. Me along with my teammates, decided to analyze the transaction logs of their users, as a part of our Foundations of Data Science class. We wanted to try and develop sales and logistics strategies for this company, to help them provide a better customer experience.
                        </p>
                        
                    </Col>
     </Row>
              <p className = {css(styles.titlestat)}> <img src = {require('../../../resources/work/tools.png')} height = '5%' width='5%'/> <span/><span/>Tools Used 
         

         
         </p>
         
     
               <Row className = {css(styles.row3)} bsClass = 'container-fluid'>
         
                                    <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=rstudio" target="_blank"> <img src={require('../../../resources/work/r.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       For statistical analysis and data modeling.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=microsoft+excel" target="_blank"> <img src={require('../../../resources/work/ds/excel.png')} height = '150vu' width='150vu' /> </a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       For organizing and cleaning datasets.          
                    </p>
                        
                        
                    </Col>
                                                  <Col xs={4} sm={4} md={4} lg={4}>
                    <p className = {css(styles.number)}>
                        <a href = "https://www.google.com/search#q=python" target="_blank">  <img src={require('../../../resources/work/py.png')} height = '150vu' width='150vu' /></a>
                        </p>
                    <p className = {css(styles.numsub)}>
                       For building association rules between products.          
               
                    </p>
                        
                        
                    </Col>
     
     </Row>
     
     
     
     
                 
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> Data Cleaning and Organization. </p>
                                    
    
                    <p className={css(styles.projcont)}>
               We received two datasets from the company. One was the user transactions which included the quantity, product name, date and geographical location. The other was the the product catalog, which was the products offered by the company including their price and description. A large amount of time was spent on cleaning and organizing the data. Before we got started with the analysis, we wanted to ensure that the data in divided into classes, depending on the following research questions we wanted to answer:
                        <ul className={css(styles.list)}>
                            <br/>
                            <li>
                             We wanted to find out if there are any patterns between the sale of different categories of products. When people place orders, do their orders consist of certain combinations of products depending on their portion and taste? Hence, depending on the product descriptions, we categorized the products as juices, sweets, dry fruits, organic, snacks, bread, dairy etc.
                            </li>
                            
                                                        <li>
                            India is a diverse country with different staple foods and eating habits in different parts of the country. Considering that the company focused on delivering authentic food items, we felt that geographical location would be of utmost importance while researching user buying patterns. Hence, we categorized location of every user ased on City, State and Region (North, South, East, West).  </li>
                        
                                                        
                                                        <li>
                            Being a country with a lot of religions, it is traditional to send gifts to family and friends throughout the year on the account of festivals. We wanted to find out what are the buying patterns of users through the year, and do the patterns change with seasons and festivals? If yes, how should we measure the change or predict the sales for the next cycle?
                            </li>
                        <br/>
                        </ul>
                        
                        <center>
                            <img src={require('../../../resources/work/ds/chart1.jpg')} className={css(styles.imagebe1)} align="middle"  />
                            <figcaption className={css(styles.figcap)}> Lifecycle of the planned analysis. </figcaption>
                        <img src={require('../../../resources/work/ds/vars.jpg')} className={css(styles.imagebe2)} align="middle"  />
                            <figcaption className={css(styles.figcap)}> Data features created and used. </figcaption>
                        </center>
                        
                        </p>
              
                       
                    

                </Row>
                
     
     
                      
                <Row className = {css(styles.rowstyle)}>
                    <p className={css(styles.projtitle)}> Inferences from Exploratory Analysis </p>
                                    
    
                    <p className={css(styles.projcont)}>
               An early exploratory analysis of the data provided very fundamental insights about the user trends. These include, average bill amount in every region, most frequently bought products, range of quantities of products which are most popular etc. Although these insights provide a broad idea about the business, only the following inferences are supported with statistically significant evidence.
                        <ul className={css(styles.list)}>
                            <br/>
                            <li>
                             After exploring the monthly sales for every year since 2014, we get significant evidence of seasonal trends in the sales of the company. We can see that in the months of March, July, September and December, the sales consistently hike every year.
                                      
                            </li>
                    <center>
                    <img src={require('../../../resources/work/ds/season.jpg')} className={css(styles.imageds1)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                         We feel the anomalous hike in 2018 February was because of the festival of Holi being early that year (March 1st).
                                                         </figcaption>
                            </center>
                              <br/>
                                                        <li>
                                                          
                          One of the interesting inferences we could make confidently from the exploratory analysis was that there are no large differences between the buying preferences of users from metropolitan and non-metropolitan cities. People in the metropolitan cities of India are culturally different from people in non metropolitan cities, and hence we expected some differences in their preferences, but on the contrary, the users proved to be highly similar.  </li>
                        
                                                          <center>
                    <img src={require('../../../resources/work/ds/metro.jpg')} className={css(styles.imageds1)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                         Average of percentage sales over the years. (Except for organic foods, we found correlation between categories and similarity between products of a category as well)
                                                         </figcaption>
                            </center><br/> <br/><br/>
                                                        <li>
                            We used Python's canned Apriori algorithm library and fed the list of product ID's of every user's every order ID as the input patterns. For optimal support and confidence values, we could derive 4 association rules between most popular products amoung the users:
                                                            
                            </li>
                       
                            
            
    

                                                           <center>
                                                      <br/>         
                    <img src={require('../../../resources/work/ds/shev.jpg')} className={css(styles.imageds2)} />
                                                               
                <img src={require('../../../resources/work/ds/gulabjamun.jpg')} className={css(styles.imageds2)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       RULE 1: Considering the data of all the regions, people tend to buy Khirmohan (Indian Sweet) along with Shev (Spicy Snacks).
                                                         </figcaption>
                            </center><br/>
                            
                                                          <center>
                                                              <br/>
                                                               
                    <img src={require('../../../resources/work/ds/rasgulla.jpg')} className={css(styles.imageds2)} />
                                                               
                <img src={require('../../../resources/work/ds/paneer.jpg')} className={css(styles.imageds2)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       RULE 2: Considering the data of the NORTH region, people tend to buy Rasgulla (Indian Sweet) along with Tandoori Paste Masala (Ready to Cook).
                                                         </figcaption>
                            </center><br/>
    
                                                          <center>
                                                              <br/>
                                                               
                    <img src={require('../../../resources/work/ds/chakli.jpg')} className={css(styles.imageds2)} />
                                                               
                <img src={require('../../../resources/work/ds/kalakhatta.jpg')} className={css(styles.imageds2)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       RULE 3: Considering the data of the WEST region, people tend to buy Chakli (Indian Snacks) along with Kala Khatta (Cold Beverage).
                                                         </figcaption>
                            </center><br/>
                
    
                                                          <center>
                                                              <br/>
                                                               
                    <img src={require('../../../resources/work/ds/fish.jpg')} className={css(styles.imageds2)} />
                                                               
                <img src={require('../../../resources/work/ds/rasgulla.jpg')} className={css(styles.imageds2)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       RULE 4: Considering the data of the EAST region, people tend to buy Fish Curry Masala (Indian Delicacy) along with Rasgulla (Indian Sweet).
                                                         </figcaption>
                            </center><br/>
                            
                            
    <br/><br/>
    
                            
                        </ul>
        This analysis had strong enough confidence and support values to craft sales strategies only around the products of these 4 rules. However, we had an interesting observation, that people tend to order sweet products with spicy snacks or Ready to Cook lunches.
                        
                        </p>
                    
                       
                    

                </Row>       
     
    

                <Row className = {css(styles.rowstyle1)}>
                    <p className={css(styles.projtitle)}> Inferences from Predictive Analysis. </p>
                                    
    
                    <p className={css(styles.projcont)}>  In order to maximize the profits on orders, we wanted to find out which of the categories of products account for larger Bill Amounts. Our aim was to find out the items which contributed the most and least to large size orders, and then develop sales strategies for maximizing the chances of a larger Bill Amount. Let's take a look at the nature of the dataset we had.  </p>
                    <center>
                            <img src={require('../../../resources/work/ds/cats.jpg')} className={css(styles.imageds3)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       We can see that all the features in our dataset are classifications.
                                                         </figcaption>
                            </center><br/>
       
                    <p className={css(styles.projcont)}>  Since our dataset had classifications of values, and or target feature, Bill Amount, was a continuous numerical datatype, we decided to pick a threshold of Bill Amount and classify Bill Amount as greater than and less than that threshold. This way, we were able to apply  <a href = "https://gluon.mxnet.io/chapter02_supervised-learning/logistic-regression-gluon.html" target="_blank"> logistical regression</a> for classifying an order as high or low. By analyzing the distributions of all the features and applying the canned general linear model in RStudio, we were able to narrow down a class of products/orders that would have a very high chance of taking the Bill Amount over the threshold. Logistic Regression provides us with the odds (log odds) of a classification resulting into a positive target variable. The following are the odds of every category contributing or not contributing to a higher Bill Amount.  </p>                 
                            <center>
                            <img src={require('../../../resources/work/ds/oddslow.jpg')} className={css(styles.imageds3)} />
    
                            <img src={require('../../../resources/work/ds/oddshigh.jpg')} className={css(styles.imageds3)} />
                                          <figcaption className = {css(styles.captionds1)}> 
                                                       Categories to the left reduce the odds of a higher Bill Amount. Categories to the right increase the odds of a higher Bill Amount.
                                                         </figcaption>
                            </center><br/>
   
                    
                    
                         <p className={css(styles.projcont)}> 
                    Most significant predictions of the model would be the Juices and Spices accounting for large Bill Amounts along with regions South and West contributing towards the same. Similarly, Organic Foods and Dry Fruits result in dramatically low Bill Amounts. Another important inference from this analysis was that the Quantities 8 and 9 accounted for larger Bills and mid ranged cost of products accounted for a very large share of higher Bills. There were a lot of other significant results but they had large amount of standard errors associated.
                    
                    </p>                 
                    
                         <p className={css(styles.projcont)}> 
                    NOTE: The threshold amount in this analysis was Rs. 1000. This is because, the threshold provided fairly accurate predictions and Rs.1000 is a good number to design sales strategies around it.
                    </p>
                    
     </Row>
     <br/><br/>
              <p className = {css(styles.titlestat)}> Recommendations
         
         <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>textttextextextexettxttxtextrtrtrtrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtextetxetrtrttxtt </font> <font className = {css(styles.block3)}>txtxxxtextexxxtx </font>
                            </Typist>
         
         </p>
     
     
          <p  className={css(styles.subtitlex)} align="middle">
         
        The following are the recommendations we provided to the company for improving their sales
         <p className={css(styles.list2)}>
              <ul>
                 <br/>

              
              <li>
There is an obvious seasonal pattern to the way the company sells throughout the year. I am sure this was obvious beforehand, but now we can predict the sales of the upcoming months as the year goes on, because of the highly proportional increase in sales in the past years. Moreover, we now know that snacks and sweets account for the largest sales during festivals and hence the company should stock up its inventory with snacks and sweets, right before the festiv season. We also know the range of quantities and cost of products that account for a higher Bill Amount so designing offers on snacks and sweets within those ranges in the festiv season should account for increase in sales.

            </li>
                    <br/>
                                
              <li>

Developing a sales strategy which specifically targets the customers who regularly buy the group of products correlated based on association rules. Employing the sweet and spicy combination to target these users and experiment with other product combos to see if the preference can be extrapolated to other sweets or snacks.
            </li>
            
                    <br/>
                                
              <li>
Dry fruits and Juices, individually account for very few percentage of orders but account heavily for larger Bill Amounts, which means these categories are ordered in bulk. The company should target the buyers of these products, especially in the South and the West, and couple these products along with others to employ a Bulk Buy strategy, as these customers already have a high expenditure mindset.

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
    }
});