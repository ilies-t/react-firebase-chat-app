import {connect} from 'react-redux';

import {updateName, validateName, profilePic} from '../actions/general.actions';

import HomeComponent from '../components/home.component';

const mapStateToProps = (state) => {
    return {
        state: {
            general : state.general,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => dispatch(updateName(name)),
        validateName: () => dispatch(validateName()),
        profilePic: (pic) => dispatch(profilePic(pic)),
    };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(HomeComponent);

export default HomeContainer;
