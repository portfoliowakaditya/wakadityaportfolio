import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, Button} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite'; 
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/input';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
    



export class Formcon extends React.Component {

   // {/* Setting initialization constructor for all values */}
    constructor() {
    super();
    this.state = {
      Fullname: '',
      Orgname: '',
        email: '',
        Des: ''
    }
        {/* Handling and submitting change of state for text and button */}
        this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

//{/* Defining handle change function*/}
    handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
    

//{/* Defining handle submit function*/}
    handleSubmit(e) {
  e.preventDefault();
if( String(this.state.Fullname) == '' || String(this.state.Orgname)=='' || String(this.state.email)=='' || String(this.state.Des)==''){
    alert('Sorry your message was not submitted. Check for blank entries or invalid email address.');
}
        else{
  const itemsRef = firebase.database().ref('items');
  const item = {
    Full_name: this.state.Fullname,
    email_id: this.state.Orgname,
    subject: this.state.email,
      Description: this.state.Des
  }
      alert('Your message is submitted! Thanks for your feedback and for visiting my portfolio :)');

  
  
  //{/* Pushing items into firebase */}
  itemsRef.push(item);
        
        
//{/* Resetting blank states of items*/}
  this.setState({
      Fullname: '',
      Orgname: '',
        email: '',
        Des: ''
  });}
}
	
        render() {
                
		return (
                
                   <div className={css(styles.app)}>
      
            <Form onSubmit={this.handleSubmit} className = {css(styles.fm)}>
                
<Input className = {css(styles.input1)} type="text" name="Fullname" placeholder="Name" onChange={this.handleChange} validations={[required]} value={this.state.Fullname} />                              
<Input className = {css(styles.input2)} type="text" name="Orgname" placeholder="Email"  onChange={this.handleChange} validations={[required, email]} value={this.state.Orgname} />
<Input className = {css(styles.input3)} type="text" name="email" placeholder="Subject" validations={[required]} onChange={this.handleChange} value={this.state.email} />
<Textarea className = {css(styles.input4)} type="text" name="Des" placeholder="Description" validations={[required]} onChange={this.handleChange} value={this.state.Des} />
                
                
              <button className = {css(styles.btnstl)}>Send Message</button>
                
            </Form>
  
      </div>
        );
	}
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({

    input1: {
        width: '100%',
        fontSize: '2rem',
        border: 'none',
        borderBottom: '1px solid #1c2329',
        paddingBottom: '2rem',
     '@media only screen and (max-width: 1300px)': {
         fontSize: '3.5rem'
        }
    },
    input2: {
        width: '100%',
        float: 'right',
        fontSize: '2rem',
        border: 'none',
        borderBottom: '1px solid #1c2329',
        paddingTop: '2rem',
        paddingBottom: '2rem',
    '@media only screen and (max-width: 1300px)': {
         fontSize: '3.5rem'
        }
    },
    input3: {
        paddingTop: '2rem',
        width: '100%',
        fontSize: '2rem',
         paddingBottom: '2rem',
       '@media only screen and (max-width: 1300px)': {
         fontSize: '3.5rem',
           paddingTop: '6.5rem'
        },
        border: 'none',
        borderBottom: '1px solid #1c2329'
    },
    input4: {
          paddingTop: '3rem',
        width: '100%',
        height: '12rem',
        fontSize: '2rem',
       '@media only screen and (max-width: 1300px)': {
         fontSize: '3.5rem',
            marginTop: '6.5rem'
        },
        border: 'none',
        borderBottom: '1px solid #1c2329'
    },
    app: {
        padding: '0.5rem',
        '@media only screen and (max-width: 1300px)': {
            padding: '4rem',
            paddingTop: '5rem'
        },
        paddingLeft: '0'
    },
    lab: {
        position: 'absolute'
    },
    btnstl: {
        marginTop: '2rem',
        '@media only screen and (max-width: 1300px)': {
            marginTop: '4rem',
            padding: '2rem',
            fontSize: '3rem'
        },
        border: 'none',
        backgroundColor: '#1c2329',
        padding: '1.2rem',
        fontSize: '1.7rem',
        color: '#FBF9FB'
    }
        
});
