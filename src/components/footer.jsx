import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

export class Portfoot extends React.Component {
    render(){
                
        return (
            <footer className={css(styles.ftr)} bsClass = "container fluid">
        
                Designed and Developed <font color = "#eafc40">from scratch!</font> by Aditya Wakade<br/>
                Icon credits: Flaticon | Smashicons | Bogdan Rosu<br/>
                <a href="https://www.facebook.com/aditya.wakade.507"> <img className = {css(styles.footphoto)} src={require('../resources/footer/fb.png')} /> </a>
                <a href="https://www.linkedin.com/in/wakaditya/"> <img className = {css(styles.footphoto)} src={require('../resources/footer/lnd.png')} /> </a>
                <a href="https://github.com/wakaditya"> <img className = {css(styles.footphoto)} src={require('../resources/footer/github.png')} /> </a>
                
               
            </footer>
        );
    }
}

const styles = StyleSheet.create({
    ftr: {width:'100%',
          float: 'bottom',
          padding: '0',
          margin: '0',
          border: '0',
        backgroundColor: '#1c2329',
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingTop: '1%',
        paddingBottom: '1%',
        color: 'white',
        fontFamily: 'Raleway, sans-serif'
    },
    footphoto: {
        paddingTop: '0.5%',
        width: '2.5%',
        height: '2.5%'
    }
});