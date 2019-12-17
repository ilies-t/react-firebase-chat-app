import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ChatContainer from '../containers/chat.container';
import GetUserInformations from '../components/get-user-name.component';

class HomeComponent extends Component {

    validate = (e) => {
        e.preventDefault();
        (/\S/.test(this.props.state.general.name) || this.props.state.general.name === '') ? this.props.validateName() : alert('your name cannot be blank');
    }
    render() {
        let chatContent = this.props.state.general.name && this.props.state.general.nameValidate ?
            <ChatContainer
                name={this.props.state.general.name}
                pic={this.props.state.general.pic}
            />
        :
        (
            <div>
                    <GetUserInformations
                        updateName={(e) => this.props.updateName(e.target.value)}
                        validate={(e) => this.validate(e)}
                        profilePic={(e) => this.props.profilePic(e)}
                        />
                </div>
        );

        return (
            <div id="main-home">
                {chatContent}
            </div>
        );
    }
}

HomeComponent.propTypes = {
    state: PropTypes.object,
    updateName: PropTypes.func,
    validateName: PropTypes.func,
    profilePic: PropTypes.func
};

export default HomeComponent;
