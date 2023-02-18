import PropTypes from 'prop-types';
import {
  FriendsContainer,
  FriendDescr,
  Status,
  ImgAvatar,
  NameFriend,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendDescr key={id}>
            <Status
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></Status>
            <ImgAvatar src={avatar} alt="User avatar" width="48" />
            <NameFriend>{name}</NameFriend>
          </FriendDescr>
        );
      })}
      ;
    </FriendsContainer>
  );
};
