import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
    id
}) => {
    const status = (isOnline) ? "isOnline" : "isOffline";
    return <li className={styles.item} key={id}>
                <span className={styles[status]}></span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
            </li>
    }
    

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}
    
export default FriendListItem;