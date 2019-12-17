// base
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import some functions
import { dynamicDate } from '../actions/general.actions';

// firebase
import firebase from 'firebase';

// images
import userIcon from '../assets/images/user.svg';

class ChatComponent extends Component {
    constructor (props) {
        super(props);

        const rootRef = firebase.database().ref();
        this.messagesRef = rootRef.child('messages');

        this.state = {
            messageWriting : "",
        };
    }

    componentDidMount() {
		// listener
		// every time database change, listener will send us
        this.messagesRef.on('value', snapshot => {
            let messages;

            // take all data in firebase via snapshot.val(), [index] = value
            messages = snapshot.val() ? Object.keys(snapshot.val()).map( key => {
                return snapshot.val()[key];
            }) :
            messages = [];

            // update messages with firebase response
            this.props.updateMessage(messages);
        });
    }

    // delete old writted message listener
    componentWillUnmount() {
        this.messagesRef.on('value').off();
    }

    sendNewMessage = (e) => {
        e.preventDefault();
        // check if message doesn't contain caracters
        if(/\S/.test(this.state.messageWriting)) {
            // create a key for each messages created
            const newMessageKey = this.messagesRef.push().key;

            // create arr
            let updates = {};
            let userChosenPic = this.props.pic ? this.props.pic : 'null';
            updates['/messages/' + newMessageKey] = {
                name : this.props.name,
                text : this.state.messageWriting,
                img: userChosenPic,
                date : Math.floor(Date.now())
            };

            // push arr to firebase db
            firebase.database().ref().update(updates);

            // reset state after pushing message
            this.setState({
                messageWriting : ""
            });
        } else {
            alert('Your message cannot be blank.');
        }
    }

    contentTakenFromDB() {
        return this.props.state.chat.messages.map((message, index) => {

            // date dynamic display
            let dateFormate = message.date ? dynamicDate(new Date().getTime(), message.date) : 'Long time ago';

            // verify if user have a picture
            let userChosenPic = (message.img !== 'null') ? message.img : userIcon;
            const UserChosePicStyle = {
                backgroundImage: "url(" + userChosenPic + ")"
            };

            return(
                <div className="message-wrapper" key={index}>
                    <div className="profile-container">
						<div>
							<div className="bg-cover" style={ UserChosePicStyle }></div>
							<h4>{message.name}</h4>
						</div>
                        <h6>{dateFormate}</h6>
                    </div>
                    <span className="separator"></span>
                    <h5>{message.text}</h5>
                </div>
            );
        }).reverse();
    }

    render() {
        return (
            <form>
                <h2>
                    Hello {this.props.name}!
                </h2>

                <div id="write-what-do-you-want">
                    <textarea
                        onChange={(e) => this.setState({messageWriting : e.target.value })}
                        className="input"
                        id="input"
                        placeholder="Write..."
                        value={this.state.messageWriting}
                    />
                    <button onClick={this.sendNewMessage} className="send" id="send">Send</button>
                </div>
                <div>
                    {this.contentTakenFromDB()}
                </div>
            </form>
        );
    }
}

ChatComponent.propTypes = {
    state: PropTypes.object,
    updateMessage: PropTypes.func,
    name: PropTypes.string,
    pic: PropTypes.string
};

export default ChatComponent;
