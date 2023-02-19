import user from '../user.json';
import data from '../data.json';
import friends from '../friends'
import transactions from '../transactions'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';

// console.dir(data);

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title={"Upload stats"} stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
