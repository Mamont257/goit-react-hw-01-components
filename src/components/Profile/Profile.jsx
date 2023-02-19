import PropTypes from 'prop-types';
import {
  Container,
  UserCard,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatList,
  StatListItem,
  StatType,
  StatValue
} from './Profile.styled'

// console.log(PropTypes);

export function Profile({ user: { username, tag, location, avatar, stats } }) { 
  return (
  <Container>
    <UserCard>
      <Avatar
        src={avatar}
        alt={username}
        width="240px"
      />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserCard>

    <StatList>
      <StatListItem>
        <StatType>Followers</StatType>
        <StatValue>{stats.followers}</StatValue>
      </StatListItem>
      <StatListItem>
        <StatType>Views</StatType>
        <StatValue>{stats.views}</StatValue>
      </StatListItem>
    <StatListItem>
        <StatType>Likes</StatType>
        <StatValue>{stats.likes}</StatValue>
      </StatListItem>
    </StatList>
  </Container>)
}


Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};