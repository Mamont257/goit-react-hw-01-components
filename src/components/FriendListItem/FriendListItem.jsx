import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <Friend>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>)
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
