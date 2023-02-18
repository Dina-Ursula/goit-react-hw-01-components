import PropTypes from 'prop-types';
import {
  ProfileContainer,
  UserInfo,
  Img,
  Name,
  Tag,
  Location,
  StatsList,
  Item,
  Popularity,
  Quantity,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <Img src={avatar} alt={avatar} width="200" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserInfo>

      <StatsList>
        <Item>
          <Popularity>Followers</Popularity>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Popularity>Views</Popularity>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Popularity>Likes</Popularity>
          <Quantity>{likes}</Quantity>
        </Item>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

// App -
// Profile - text:strins;
//ItemsList - items: array;
// Items - name: string, quantity: number;
