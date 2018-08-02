import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'C:/Users/wakad/Desktop/Project/portfolio/src/resources/logo1.png';
import {Link} from 'react-router-dom';
import {Mynavbar} from '../components/navig.jsx';
import {Section} from '../components/section.jsx';
import {Portfoot} from '../components/footer.jsx';
import {StyleSheet, css} from 'aphrodite';

export class myblog extends React.Component {
	render() {
		return (
            <div className = {css(styles.foots)}>
               
            <div className = {css(styles.gridclass)}>
                      <Mynavbar index = '4'/>
                <p className={css(styles.temp)}>  COMING SOON</p>
                </div>
           
                       <Portfoot/>
            </div>
        );
	}
}


const styles = StyleSheet.create({
    imgc: {
      height: '100%',  
      width: '100%'  
    },
       gridclass: {
        padding: '1.7rem',
        margin: '0'
    },
        foots: {
        padding: '0',
        margin: '0'
    },
    temp: {
        fontSize: '15rem',
        padding: '11rem'
    }
});