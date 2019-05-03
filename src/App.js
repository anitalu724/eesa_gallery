import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NavBar from './components/NavBar.js';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import eesa_icon from './images/eesa-icon.png';
import Search from '@material-ui/icons/Search.js';

class App extends Component {
	render() {
		return (
			<div style={{height:'100%', width: '100%'}}>
				<AppBar id="appBar" position="static">
					<Toolbar style={{display:'flex'}}>
						<Avatar src={eesa_icon} id="avatar"></Avatar>
						<TypoGraphy variant="title" id="appBarTitle">
							NTU EESA
           				</TypoGraphy>
						<NavBar/>
						<TypoGraphy>
							<Search id="searchIcon"/>
						</TypoGraphy>
					</Toolbar>
				</AppBar>
				<Paper id="paperContainer">
					<div id="backgroundImageContainer"></div>
					<div id="outerContainer">
						<TypoGraphy variant="title" id="entryTitle">
							國立台灣大學電機工程學系學會
						</TypoGraphy>
						<div id="innerContainer">
							<Button id="button1">聯絡我們</Button>
							<Button id="button2">台大電機系官網</Button>
						</div>
					</div>
				</Paper>
			</div>
		);
	}
}

export default App;
