import { ListItem, Status, Img, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar}></Img>
      <Name>{name}</Name>
    </ListItem>
  );
};
