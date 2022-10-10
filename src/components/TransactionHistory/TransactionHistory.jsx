import { Box } from 'components/Box/Box';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableData,
  TableHeader,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ data }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>TYPE</TableHeader>
            <TableHeader>AMOUNT</TableHeader>
            <TableHeader>CURRENCY</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, type, amount, currency, index }) => (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
