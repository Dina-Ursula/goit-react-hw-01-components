import PropTypes from 'prop-types';
import {
  FriendDescr,
  Status,
  ImgAvatar,
  NameFriend,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendDescr key={id}>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
      <ImgAvatar src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </FriendDescr>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
