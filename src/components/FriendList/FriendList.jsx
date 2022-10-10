import { List } from './FriendList.styled';
import { Box } from '../Box/Box';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
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
      paddingBottom="30px"
      paddingTop="30px"
    >
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </List>
    </Box>
  );
};
