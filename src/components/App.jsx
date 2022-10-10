import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userDate from '../user.json';
import StatDates from '../data.json';
import friendsData from '../friends.json';
import transactionData from '../transactions.json';

// const imageUrl = user.avatar;

export const App = () => {
  return (
    <Box backgroundColor="#e5e5e5" paddingBottom="30px" paddingTop="30px">
      <Box
        display="flex"
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
        alignItems="center"
        width="300px"
        boxShadow="0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)"
        borderRadius="0px 0px 4px 4px"
        backgroundColor="#ffff"
        marginBottom="80px"
      >
        <Profile data={userDate}></Profile>
      </Box>
      <Statistics data={StatDates} title="Upload stats"></Statistics>
      <FriendList friends={friendsData}></FriendList>
      <TransactionHistory data={transactionData}></TransactionHistory>
    </Box>
  );
};
