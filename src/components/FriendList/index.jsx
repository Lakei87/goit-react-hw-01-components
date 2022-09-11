import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return FriendListItem({avatar, name, isOnline, id});
        })}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}

export default FriendList;