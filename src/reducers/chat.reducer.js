import {UPDATEMESSAGES} from '../actions/actions.type';

const initialState = {
    messages : []
};

const chatReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATEMESSAGES : {

            return {
                ...state,
                messages: action.data.messages
            };
        }

        default:

            return state;
    }
};

export default chatReducer;
