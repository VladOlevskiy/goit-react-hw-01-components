import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: 25px;
  padding-top: 25px;
`;
export const List = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 25%;
`;
export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  color: #000000;
`;
export const Percentage = styled.span`
  font-size: 18px;
  color: #000000;
`;

/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>; */
