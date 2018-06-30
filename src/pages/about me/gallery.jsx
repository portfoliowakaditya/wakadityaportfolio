import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite'; 
import {Row, Col, Grid} from 'react-bootstrap';



export class Gal extends React.Component {   
    render(){

        
        return (
           <Grid bsClass = "container-fluid" className = {css(styles.pads)}>
            
                <Row>
                    
                <Col xs = {4} sm = {4} md = {4} lg = {4}>
                    <img src = {require('../../resources/photogal/4.jpg')} className = {css(styles.imgc)} />
                </Col>
                <Col xs = {4} sm = {4} md = {4} lg = {4}>
                    <img src = {require('../../resources/photogal/1.png')} className = {css(styles.imgc)} />
                    <img src = {require('../../resources/photogal/3.jpg')} className = {css(styles.imgc)} />
                </Col>
                <Col xs = {4} sm = {4} md = {4} lg = {4}>
                    <img src = {require('../../resources/photogal/5.jpg')}  className = {css(styles.imgc)} />
                    <img src = {require('../../resources/photogal/10.png')} className = {css(styles.imgc)} />
                </Col>
                </Row>
                
                <Row>
                    
                <Col xs = {3} sm = {3} md = {3} lg = {3}>
                    <img src = {require('../../resources/photogal/10.jpg')} className = {css(styles.imgc)} />
                </Col>     
               <Col xs = {3} sm = {3} md = {3} lg = {3}>
                    <img src = {require('../../resources/photogal/ADI.png')} className = {css(styles.imgc)} />
                </Col> 
                <Col xs = {6} sm = {6} md = {6} lg = {6}>
                    <Row>
                        <Col xs = {6} sm = {6} md = {6} lg = {6}>
                    <img src = {require('../../resources/photogal/6.jpg')} className = {css(styles.imgc)} />
                            </Col>
                  <Col xs = {6} sm = {6} md = {6} lg = {6}>
                    <img src = {require('../../resources/photogal/e14.jpg')} className = {css(styles.imgc)} />
                        </Col>
                        </Row>
                    
                    <Row>
                  <img src = {require('../../resources/photogal/7.png')} className = {css(styles.imgc)} />

                    </Row>
                </Col> 
                    
                </Row>
                
            </Grid>
           
        
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({

    imgc: {
        height: '100%',
        width: '100%',
        paddingTop: '3rem'
    },
    pads: {
        paddingLeft: '10rem',
        paddingRight: '10rem',
        '@media only screen and (max-width: 1080px)': {
        paddingLeft: '5rem',
        paddingRight: '5rem'
        }
    }
        
});
