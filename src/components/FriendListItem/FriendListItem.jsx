import PropTypes from 'prop-types';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (<li>
        {/* <span className="status" status={isOnline}></span> */}
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>)
}


FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
