// base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// firebase
import storage from "../firebase/index";

// images
import userIcon from '../assets/images/user.svg';
import loaderIcon from '../assets/images/loader.png';

class GetUserInformations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: undefined,
            progress: 0,
            onload: false
        };
    }

    handleUpload = (e) => {
        // verify if file is image w/ regex & than 700kb
        const image = e.target.files[0];
        let regexAccepted = /jpg|jpeg|svg|png|webp/;
        if( (image.size <= 720404) && (regexAccepted.test(image.type)) ) {
            // let's go
            this.setState({ onload: true });
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    // progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    this.setState({ progress });
                }, error => { console.log(error); },
                () => {
                // complete function
                storage.ref("images").child(image.name).getDownloadURL().then(url => {
                        this.setState({ url });
                        this.props.profilePic(this.state.url)
                        this.setState({ onload: false });
                    });
                }
            );
        } else {
            alert('must be a image and have less than 700kb')
        }
    };
    render = () => {
        let bgLink = this.state.url ? this.state.url : userIcon,
            onloading = this.state.onload ? 'active' : '';
        const UserChosePicStyle = {
            backgroundImage: `url(${bgLink})`
        };

        return (
            <div>
                <h2>username :</h2>
                <div className="input-block main-get-infos">
                    <input
                        onChange={this.props.updateName}
                        className="input"
                        id="input"
                        placeholder="name..."
                    />
                </div>
                <h2>profile picture :</h2>
                <div className="input-block main-get-infos">
                    <div
                        className="bg-cover"
                        id="user-chose-picture"
                        style={ UserChosePicStyle }
                        alt="Uploaded"
                    >
                        <input
                            type="file"
                            onChange={(e) => this.handleUpload(e)}
                        />
                    </div>
                    <img src={loaderIcon} alt="loader" className={`loader ${onloading}`}/>
                    <button onClick={this.props.validate} id="send-username">Sign up</button>
                </div>
            </div>
        );
    };
}

GetUserInformations.propTypes = {
    updateName : PropTypes.func,
    validate : PropTypes.func,
    profilePic: PropTypes.func
};

export default GetUserInformations;
