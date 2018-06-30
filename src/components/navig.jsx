import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'C:/Users/wakad/Desktop/Project/portfolio/src/resources/logo1.png';
import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

var links = [{text: 'About Me', className: 'tednavlink', link: '/aboutme'},
             {text: 'Contact Me', className: 'tednavlink', link: '/contactme'},
             {text: 'Work', className: 'tednavlink', link: '/work'},
             {text: 'Blog', className: 'tednavlink', link: '/blog'}
            ];

export class Mynavbar extends React.Component {        
        
    render(){

        
        return (
            <nav className={css(styles.mynav)} >
                <span>
                    { 
                        links.map((item, index) => { 
                            if(index == this.props.index) {item.className += ' active'}
                            return <span className={item.className} key={item.text}><Link className={css(styles.tednavlinka)} to={item.link}>{item.text}</Link> </span> 
                        }) 
                    }
                </span>
            </nav>
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    mynav: {
        backgroundColor: '#1c2329',
        height: '4%',
        lineHeight: '50px',
        marginLeft: '30%',
        marginRight: '30%',
        align: 'center',
        '@media only screen and (max-width: 1080px)': {
         lineHeight: '70px',
         marginRight: '10%',
            marginLeft: '10%'
        },
        '@media only screen and (max-width: 1300px)': {
         lineHeight: '60px',
         marginRight: '20%',
            marginLeft: '20%'
        },
        textAlign: 'center',
        borderRadius: '20px'
        },
    tednavlinka: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        fontSize: '13px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginLeft: '1.3rem',
        marginRight: '1.3rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        width: '100%',
        transition: 'color 0.2s ease-out',
        textDecoration: 'None',
        '@media only screen and (max-width: 1300px)': {
            fontSize: '17px'
        },
        ':hover' : {
            background: '#ffffff',
            borderRadius: ' 5px',
            fontSize: '15px',
            transition: 'color 0.3s ease-out',
            textDecoration: 'None',
            '@media only screen and (max-width: 1300px)': {
            fontSize: '18px'
        }
        }
    }
});