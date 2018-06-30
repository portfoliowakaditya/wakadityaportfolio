import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export class Contactline extends React.Component {
    render(){
                
        return (
            <div className = {css(styles.ftr)}>
                <p className={css(styles.txc1)}> {this.props.txt}: &nbsp; &nbsp;&nbsp;&nbsp;
                <img src = {this.props.ic} align = "center" className = {css(styles.imgc)}/>
                <a className = {css(styles.lnk)} href = {this.props.lnk}><font className = {css(styles.txc)}> &nbsp; {this.props.tx}</font></a></p>
            </div>
            
        );
    }
}

const styles = StyleSheet.create({
    ftr: {
            paddingBottom: '1rem',
        textAlign: 'left',
    '@media only screen and (max-width: 1300px)': {
            paddingBottom: '3rem'
        },

    },
    imgc:{
        height: '4.5%',
        width: '4.5%',
        float:'center',
    '@media only screen and (max-width: 1300px)': {
        height: '6%',
        width: '6%',
        },
    },
    txc: {
        fontSize: '2rem',
        textAlign:'right',
         float:'center',
        '@media only screen and (max-width: 1300px)': {
            fontSize: '4rem'
        },
            fontFamily: 'Raleway, sans-serif'
        
    },
        txc1: {
        fontSize: '2rem',
        '@media only screen and (max-width: 1300px)': {
            fontSize: '4rem'
        },
            fontFamily: 'Raleway, sans-serif'
        
    },
    lnk: {
        textDecoration: 'none'
    }
})