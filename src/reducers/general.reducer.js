import {UPDATENAME, VALIDATENAME, PROFILEPIC} from '../actions/actions.type';

const initialState = {
    name : null,
    nameValidate: false,
    pic: null
};

const generalReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATENAME : {
            return {
                ...state,
                name: action.data.name
            };
        }
        case VALIDATENAME : {
            return {
                ...state,
                nameValidate: true
            };
        }
        case PROFILEPIC : {
            return {
                ...state,
                pic: action.data.pic
            }
        }
        default:
            return state;
    }
};

export default generalReducer;
