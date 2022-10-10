import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  border-spacing: 0px;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  font-size: 14px;
  height: 30px;
  background-color: #00a5a5;
  color: white;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  font-size: 13px;
  background-color: white;
  height: 25px;
`;

/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>; */
