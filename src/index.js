import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Alz} from './pages/work/project/alz.jsx';
import {Uid} from './pages/work/project/uidesign.jsx';
import {Ds} from './pages/work/project/ds.jsx';
import {Hoc} from './pages/work/project/hoc.jsx';
import {Drg} from './pages/work/project/drg.jsx';
import {Ubr} from './pages/work/project/ubr.jsx';
import { Aboutme } from './pages/about me.jsx';
import { Contactme } from './pages/contact me.jsx';
import { myblog } from './pages/blog.jsx';
import { Project } from './pages/projects.jsx';
import { Work } from './pages/work.jsx';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAHr4mh0g_mkceXUJfuutKj-_r3WEEmDpU",
    authDomain: "portfolio-d7bcd.firebaseapp.com",
    databaseURL: "https://portfolio-d7bcd.firebaseio.com",
    projectId: "portfolio-d7bcd",
    storageBucket: "portfolio-d7bcd.appspot.com",
    messagingSenderId: "797848868906"
  };
  firebase.initializeApp(config);

<script src="//cdn.iframe.ly/embed.js" async></script>


class App extends React.Component {
    componentDidUpdate() {
  window.scrollTo(0,0);
}
	render() {
		return (
            
			<HashRouter onUpdate={() => window.scrollTo(0, 0)}>
				<Switch>
					
                    <Route path='/aboutme' component={ Aboutme }/>
                    <Route path='/contactme' component={Contactme}/>
                    <Route exact path='/' component={Work}/>
                    <Route path='/blog' component={myblog}/>
                 <Route path='/drg' component={Drg}/>
                    <Route path='/alz' component={Alz}  onUpdate={() => window.scrollTo(0, 0)} />
                    <Route path='/uidesign' component={Uid}  onUpdate={() => window.scrollTo(0, 0)} />
                    <Route path='/fomc' component={Ds}  onUpdate={() => window.scrollTo(0, 0)} />
                    <Route path='/hoc' component={Hoc}  onUpdate={() => window.scrollTo(0, 0)} />
              <Route path='/ubr' component={Ubr}  onUpdate={() => window.scrollTo(0, 0)} />
                    
                </Switch>
			</HashRouter>
            
        );
	}
}


ReactDOM.render(<App />, document.getElementById('app'));