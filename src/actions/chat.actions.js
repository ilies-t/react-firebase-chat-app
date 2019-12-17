import {UPDATEMESSAGES} from './actions.type';

export function updateMessage(messages) {

    return {
        type: UPDATEMESSAGES,
        data: {
            messages
        }
    };
}
