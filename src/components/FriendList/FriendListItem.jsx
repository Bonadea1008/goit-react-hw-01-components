import PropTypes from 'prop-types';
import css from '../FriendList/FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    const { id, isOnline, avatar, name } = friend;
    return (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
