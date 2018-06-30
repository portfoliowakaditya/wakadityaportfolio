import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'C:/Users/wakad/Desktop/Project/portfolio/src/resources/logo1.png';
import {Link} from 'react-router-dom';
import {Mynavbar} from '../components/navig.jsx';
import {Section} from '../components/section.jsx';

export class myblog extends React.Component {
	render() {
		return (
            <div>
                <Mynavbar index = '4'/>
                <Section title = 'test'/>
                
            </div>
        );
	}
}