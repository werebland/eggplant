import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose'
import { distanceTo } from 'geolocation-utils'
import _ from 'lodash'
import firebase from 'firebase'
import 'firebase/auth'
import base from '../rebase'

import AppBar from '../components/AppBar'

const AppWrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
`;

var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday')
provider.addScope('default')
provider.addScope('user_gender')

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      user: {},
      isAuthed: true,
    }
  }

  componentDidMount() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        this.processProfiles(position.coords.latitude, position.coords.longitude);
      }.bind(this))
    } else {
      alert('location disabled')
    }
  }

  processProfiles(lat, lng) {
    const userLocation = {
      lat,
      lng
    }
    const data = [
      {
        id: '23sdfa4qgsfd',
        name: 'Emma',
        age: 22,
        lat: 44.703664811708066,
        lng: -63.5526466369629,
        photos: [
          "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        ]
      },
      {
        id: '243tregdfgwsd',
        name: 'Fiona',
        age: 20,
        lat: 44.689323988750424,
        lng: -63.56305193156005,
        photos: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        ]
      },
      {
        id: '46756edhgfgh4',
        name: 'Kelly',
        age: 26,
        lat: 44.689323988750424,
        lng: -63.56305193156005,
        photos: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        ]
      },
    ]
    let profiles = []
    _.forEach(data, function(value) {
      const location = {
        lat: value.lat,
        lng: value.lng
      }
      console.log(location);
      const profile = {
        id: value.id,
        name: value.name,
        age: value.age,
        photos: value.photos,
        distance: distanceTo(userLocation, location)
      }
      profiles.push(profile)
    })
    if (profiles.length === data.length) {
      this.setState({
        profiles
      })
    }
  }

  handleLike(id, index) {
    let {profiles} = this.state
    profiles.splice(index, 1)
    console.log(profiles);
    this.setState({
      profiles
    })
  }

  handleAuth() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    return (
      <AppWrapper>
        <span onClick={() => this.handleAuth()}>Log in with Facebook</span>
      </AppWrapper>
    );
  }

}

export default Index;
