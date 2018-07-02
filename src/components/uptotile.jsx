import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export class Uptotile extends React.Component {
    render(){
                
        return (
            <div className = {css(styles.ftr)}>
                <img src = {this.props.ic} align = "center" className = {css(styles.imgc)}/>
                <p className = {css(styles.txc)}><br/>{this.props.tx}</p>
            </div>
            
        );
    }
}

const styles = StyleSheet.create({
    ftr: {
            
        textAlign: 'center'

    },
    imgc:{
        height: '40%',
        width: '40%'
    },
    txc: {
        fontSize: '2rem',
         '@media only screen and (max-width: 1080px)': {
         fontSize: '2.5rem'}
        
    }
});