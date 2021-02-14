import React from 'react'
import './Tweet.css'



class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.tinfo;
        this.handleClick = this.handleClick.bind(this);
        let rc='Translate';
    }


    handleClick() {
        let r = this.state.tval;
        this.setState({tval: this.state.valt,
                        valt: r
        })
    }

    render() {
        return (
        <div className='overider'>
        <div className='restricter'>
            <header>
                <div className="profile-name">
                    <h3>{this.state.user}</h3>
                    <h4>{this.state.uname}</h4>
                </div>
                <div className="follow-btn">
                    <button onClick={this.handleClick}>Translate</button>
                </div>
            </header>
            <div id="inner">
                <p>{this.state.tval}</p>
                <span class="date">1:32 PM - 12 Jan 2018</span>
                <hr />
            </div>
            <footer>
            <div class="stats">
                <div class="Retweets">
                <strong>{this.props.tinfo.r}</strong> Retweets
                </div>
                <div class="likes">
                <strong>{this.props.tinfo.l}</strong> Likes
                </div>
            </div>
            <div class="cta">
                <button class="share-btn">Share</button>
                <button class="retweet-btn">Retweet</button>
                <button class="like-btn">Like</button>
            </div>
            </footer>
        </div>
        </div>
        );
    }
}

export default Tweet;