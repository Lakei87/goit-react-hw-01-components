import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />;
        })}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}

export default FriendList;