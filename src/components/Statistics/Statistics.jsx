import { Box } from '../Box/Box';
import { Title, List, ListItem, Label, Percentage } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ data, title }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      marginLeft="auto"
      marginRight="auto"
      alignItems="center"
      width="300px"
      boxShadow="0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%)"
      borderRadius="0px 0px 4px 4px"
      backgroundColor="#ffff"
      marginBottom="60px"
    >
      <Title>{title}</Title>
      <Box width="100%">
        <List>
          {data.map(({ id, label, percentage }) => (
            <ListItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
