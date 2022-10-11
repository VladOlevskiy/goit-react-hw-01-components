import PropTypes from 'prop-types';
import {
  Img,
  Title,
  Tag,
  Location,
  List,
  ListItem,
  StatsName,
  Stats,
} from './Profile.styled';
import { Box } from '../Box/Box';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <Box>
        <Img src={avatar}></Img>
        <Title>{username}</Title>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Box>
      <Box width="100%" backgroundColor="#edf2f7">
        <List>
          <ListItem>
            <StatsName>Followers</StatsName>
            <Stats>{followers}</Stats>
          </ListItem>
          <ListItem>
            <StatsName>Views</StatsName>
            <Stats>{views}</Stats>
          </ListItem>
          <ListItem>
            <StatsName>Likes</StatsName>
            <Stats>{likes}</Stats>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
