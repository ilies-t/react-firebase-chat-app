import {connect} from 'react-redux';
import {updateMessage} from '../actions/chat.actions';

import ChatComponent from '../components/chat.component';

const mapStateToProps = (state) => {
    return {
        state: {
            chat : state.chat,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (messages) => dispatch(updateMessage(messages))
    };
};

const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(ChatComponent);

export default ChatContainer;
