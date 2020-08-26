import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';
import ProfileImg from '../../images/profile.jpg';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar source={ProfileImg} />
            <StreamUsername numberOfLines={1}>isaque_igor</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Playing Arma 3 with real Soldiers
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Gaming</StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Strategy</TagText>
          </TagView>
          <TagView>
            <TagText>Arma 3</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
