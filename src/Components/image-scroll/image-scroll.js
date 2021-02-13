import React from 'react';
import './image-scroll.css';
import TestImage from '../../images/01.jpeg'


let c = '00';
let f=0;

f=Math.floor(Math.random()*10);
c= '0' + f;
console.log(c);


class ShowImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cc:'00',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        f=Math.floor(Math.random()*10);
        c = '0'+f;
        this.setState({cc: c});
    }

    render() {
        let tr= TestImage
        return(
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + `/img/${this.state.cc}.jpeg`} className='imager'/>
                </div>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default ShowImage;