import React, { Component } from 'react';
import PhotoBlock from './components/PhotoBlock';
import './Gallery.css';
import NavBar from './components/NavBar.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import eesa_icon from './images/eesa-icon.png';
import TypoGraphy from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search.js';


class Gallery extends Component {
    blockClick(i){
        console.log(i);
    }
    render() {
        return(
            <div className="background">
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
                <PhotoBlock left={true} url="https://i.imgur.com/ZmOd7Yz.jpg" title="台大電機營" />
                <PhotoBlock left={false} url="https://i.imgur.com/uVkeFDt.png" title="電機之夜"/>
                <PhotoBlock left={true} url="https://i.imgur.com/iYlPuJN.png" title="MakeNTU"/>
                <PhotoBlock left={false} url="https://i.imgur.com/lzGMEDp.jpg" title="台大電機週"/>
            </div>
        )
    }
}

export default Gallery;
