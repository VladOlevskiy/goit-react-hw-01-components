import { ListItem, Status, Img, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem key={id}>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar}></Img>
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
