import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TypoGraphy from '@material-ui/core/Typography';

class NavItem extends Component {
    render() {
        return(
            <ListItem button="true">
                <TypoGraphy variant="title" style={{fontSize: '1em', textAlign: 'center'}}>
                    {this.props.value}
                </TypoGraphy>
            </ListItem>
        );
    }
}
class NavBar extends Component {
    render() {
        return(
            <List component="nav" style={{display:'flex', marginLeft: 'auto'}}>
                <NavItem value="Contact"/>
                <NavItem value="About"/>
                <NavItem value="Schedule"/>
                <NavItem value="Divisions"/>
                <NavItem value="Clubs"/>
                <NavItem value="Photos"/>
            </List>
        );
    }
}

export default NavBar;