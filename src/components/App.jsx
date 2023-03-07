import { Profile } from 'components/Profile/Profile';
import user from '../json/user';
import { Statistics } from './Statistics/Statistics';
import data from '../json/data';
import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions';

export const App = () => {
  return (
    <div
      style={{
        margin: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
