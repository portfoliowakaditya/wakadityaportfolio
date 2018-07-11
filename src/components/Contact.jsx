import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export class Contactline extends React.Component {
    render(){
                
        return (
            <div className = {css(styles.ftr)}>
                <p> 
                <img src = {this.props.ic} align = "center" className = {css(styles.imgc)}/> <br/>
                <a className = {css(styles.lnk)} href = {this.props.lnk}><font className = {css(styles.txc)}> &nbsp; {this.props.tx}</font></a></p>
            </div>
            
        );
    }
}

const styles = StyleSheet.create({
    ftr: {
        paddingTop:'1rem',
            paddingBottom: '1rem',
        textAlign: 'center',
    '@media only screen and (max-width: 1300px)': {
        paddingTop:'2rem',
            paddingBottom: '3rem'
        },

    },
    imgc:{
        opacity: '0.95',
        height: '40%',
        width: '40%',
        float:'center',
        paddingBottom: '1rem',
    '@media only screen and (max-width: 1300px)': {
          paddingBottom: '2rem',
        height: '35%',
        width: '35%',
        },
    },
    txc: {
        fontSize: '1.5rem',
        textAlign:'center',
         float:'center',
        '@media only screen and (max-width: 1300px)': {
            fontSize: '3rem'
        },
            fontFamily: 'Raleway, sans-serif'
        
    },
    lnk: {
        textDecoration: 'none'
    }
})