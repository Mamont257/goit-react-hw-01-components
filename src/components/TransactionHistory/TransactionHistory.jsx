import PropTypes from 'prop-types';
import {
    Table,
    TableHead,
    HeadTableData,
    TableRow,
    TableData
} from './TransactionHistory.styled';

export function TransactionHistory({items}) {
    return (
        <Table>
            <TableHead>
                <tr>
                    <HeadTableData>Type</HeadTableData>
                    <HeadTableData>Amount</HeadTableData>
                    <HeadTableData>Currency</HeadTableData>
                </tr>
            </TableHead>
            <tbody>
                {items.map(({ id, type, amount, currency }) =>
                    <TableRow key={id}>
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>
                )}  
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};