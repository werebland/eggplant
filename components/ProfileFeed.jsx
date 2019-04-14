import React from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

import ProfileCard from './ProfileCard'

const profileFeedPose = {
  enter: {
    opacity: 1,
    staggerChildren: 300,
  },
  exit: {
    opacity: 0,
  }
}

const ProfileFeedWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ProfileFeed = ({ profiles, handleLike }) => (
  <ProfileFeedWrapper>
    {profiles.length > 0
      ?
      <div>
        {profiles.map((profile, i) =>
          <ProfileCard profile={profile} index={i} key={profile.id} handleLike={(id, i) => handleLike(id, i)} />
        )}
      </div>
      :
      <div>
        loading...
      </div>
    }
  </ProfileFeedWrapper>

);

export default ProfileFeed;
