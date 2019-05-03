import React, { Component } from 'react';
import './PhotoBlock.css';

class PhotoBlock extends Component {
    render(){
        let block;
        //const colors = ['pink', 'plum', 'antiquewhite', 'honeydew', 'aliceblue', 'aquamarine'];
        //const style = {'background-color': colors[Math.floor(Math.random() * 6)]};
        if(this.props.left){
            block = (
                <div className = "Container">
                    <img className = "block image" src={this.props.url} />
                    <div className = "block text"  >{this.props.title}</div>
                </div>
            )
        }
        //style={style}
        else{
            block = (
                <div className = "Container">
                    <div className = "block text" >{this.props.title}</div>
                    <img className = "block image" src={this.props.url} />
                </div>
            )
        }
        return(
            <div>
                {block}
            </div>
        );
    }
}

export default PhotoBlock;
