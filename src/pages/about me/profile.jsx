import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite'; 



export class Profile extends React.Component {     
    state = { 
    img: require('../../resources/about_photo.jpg')
  }
        
    render(){

        
        return (
           
             <div>
                <img align = "center" className="morph pic" bsClass = "img-responsive" src = {this.state.img} 
                    onMouseEnter={() => {this.setState({img: require('../../resources/work/waldo.png') })}}
                    onMouseOut={() => {this.setState({ img: require('../../resources/about_photo.jpg') })}} />
            </div>
        
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({

    title: {
        fontSize: '2rem'
    },
    subtitle: {
        fontSize: '1.5rem'
    }
        
});

