import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

const profileCardPose = {
  enter: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 64,
  },
  preEnter: {
    opacity: 0,
    y: 32
  }
}

const ProfileCardContainer = styled.article`
  width: 100%;
  max-width: 375px;
  height: 274px;
  border-radius: 8px;
  border: 2px solid #fff;
  box-sizing: border-box;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 2px 16px -2px rgba(159,159,159,0.50);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
  margin-bottom: 16px;
  position: relative;
`;

const ProfileCardPhotoIndicators = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 4px 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 8;
`;

const ProfileCardPhotoIndicator = styled.div`
  height: 2px;
  display: flex;
  flex: 1;
  border-radius: 8px;
  background: #fff;
  opacity: ${props => props.active ? '1' : '.42'};
  margin-right: 6px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

const ProfileCardPhotoNavigator = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;

  & div {
    height: 100%;
    flex: 1;
  }
`;

const ProfileCardLower = styled.div`
  width: 100%;
  height: 92px;
  background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(47,47,47,0.42) 100%);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 8;
`;

const ProfileCardDetails = styled.div`
  flex-flow: column nowrap;
`;

const ProfileCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin: 0;

  & strong {
    font-weight: 700;
    margin-right: 4px;
  }
`;

const ProfileCardSubtitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  margin: 0;
`;

const ProfileCardButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    fill: #f94343;
    transform: scale(1.33)
  }
`;

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePhoto: 0,
      isLiking: false,
    }
  }


  render() {
    const {profile, handleLike, index} = this.props
    return (
        <ProfileCardContainer image={profile.photos[this.state.activePhoto]}>
          <ProfileCardPhotoIndicators>
            {profile.photos.map((photo, i) =>
              <ProfileCardPhotoIndicator key={i} active={this.state.activePhoto === i} onClick={() => this.setState({ activePhoto: i})} />
            )}
          </ProfileCardPhotoIndicators>
          <ProfileCardLower>
            <ProfileCardDetails>
              <ProfileCardTitle>
                <strong>
                  {profile.name}
                </strong>
                {profile.age}
              </ProfileCardTitle>
              <ProfileCardSubtitle>
                {_.round((profile.distance / 1000), 1)}km
              </ProfileCardSubtitle>
            </ProfileCardDetails>
            <ProfileCardButton onClick={() => handleLike(profile.id, index)}>
              {this.state.isLiking
                ?
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z"/>
                  <path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/>
                </svg>
              }
            </ProfileCardButton>
          </ProfileCardLower>
          <ProfileCardPhotoNavigator>
            <div onClick={() => this.state.activePhoto > 0 && this.setState({ activePhoto: this.state.activePhoto - 1 })}></div>
            <div onClick={() => this.state.activePhoto !== profile.photos.length - 1 && this.setState({ activePhoto: this.state.activePhoto + 1 })}></div>
          </ProfileCardPhotoNavigator>
        </ProfileCardContainer>

    );
  }

}

export default ProfileCard;
