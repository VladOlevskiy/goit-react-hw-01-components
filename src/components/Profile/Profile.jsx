// import PropTypes from 'prop-types';
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
import { Fragment } from 'react';
import { Box } from '../Box/Box';

export const Profile = ({ data }) => {
  return (
    <>
      <Box>
        <Img src={data.avatar}></Img>
        <Title>{data.username}</Title>
        <Tag>{data.tag}</Tag>
        <Location>{data.location}</Location>
      </Box>
      <Box width="100%" backgroundColor="#edf2f7">
        <List>
          <ListItem>
            <StatsName>Followers</StatsName>
            <Stats>{data.stats.followers}</Stats>
          </ListItem>
          <ListItem>
            <StatsName>Views</StatsName>
            <Stats>{data.stats.views}</Stats>
          </ListItem>
          <ListItem>
            <StatsName>Likes</StatsName>
            <Stats>{data.stats.likes}</Stats>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
