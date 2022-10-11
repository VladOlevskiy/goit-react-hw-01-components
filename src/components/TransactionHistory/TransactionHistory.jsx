import { Box } from 'components/Box/Box';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableData,
  TableHeader,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

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
          {data.map(({ id, type, amount, currency }) => (
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

TransactionHistory.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
