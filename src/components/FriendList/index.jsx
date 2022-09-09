import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        {console.log(friends)}
        {friends.map(({ avatar, name, isOnline, id }) => {
            const status = (isOnline) ? "isOnline" : "isOffline";

            return <li className="item" key={id}>
                <span className={status}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        })}
    </ul>
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
}