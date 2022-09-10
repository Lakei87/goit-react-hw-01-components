import PropTypes from 'prop-types';
import styles from './profile.module.css'

const Profile = ({
    username,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats }) => {
        return (
            <div className={styles.profile}>
                <div className={styles.description}>
                    <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                    />
                    <p className={styles.name}>{username}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li className={styles.item}>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}>{stats.followers}</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{stats.views}</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}

export default Profile;