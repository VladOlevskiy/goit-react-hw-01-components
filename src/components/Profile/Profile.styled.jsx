import styled from 'styled-components';

export const Img = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: #7b7e7d;
  font-size: 16px;
`;

export const Location = styled.p`
  margin-bottom: 30px;
  color: #7b7e7d;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  border-top: solid 1px;
  border-color: #7b7e7d;
`;

export const ListItem = styled.li`
  width: 33.33%;
  height: 60px;
  border-right: solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-color: #7b7e7d;
  &:last-child {
    border: none;
  }
`;

export const StatsName = styled.p`
  color: #7b7e7d;
  font-size: 16px;
  margin-bottom: 5px;
}
`;

export const Stats = styled.p`
  font-weight: 700;
`;
