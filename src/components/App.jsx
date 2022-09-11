import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

// import data for render
import user from '../DataForRender/user.json';
import data from '../DataForRender/data.json';
import friends from '../DataForRender/friends.json';
import transactions from '../DataForRender/transactions.json';


export const App = () => {
  return (
    <div
     style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',  
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
