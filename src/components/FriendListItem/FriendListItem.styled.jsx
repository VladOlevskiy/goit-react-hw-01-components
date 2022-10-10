import styled from 'styled-components';

export const ListItem = styled.li`
  width: 150px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'blue';
      case false:
        return 'red';
    }
  }};
`;

export const Img = styled.img`
  width: 48px;
  margin-right: 5px;
  box-shadow: 0px 1px 3px rgb(23 20 26 / 60%), 2px 3px 5px rgb(0 0 0 / 75%),
    0px 0px 0px rgb(0 0 0 / 43%), 0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const Name = styled.p``;
