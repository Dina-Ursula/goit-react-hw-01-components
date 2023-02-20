import PropTypes from 'prop-types';
import {
  TransactionBox,
  Description,
  TypeName,
  TypeAmount,
  TypeCurrency,
  TBody,
  SectionTransaction,
  Type,
  Amount,
  Currency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionBox>
      <Description>
        <TypeName>Type</TypeName>
        <TypeAmount>Amount</TypeAmount>
        <TypeCurrency>Currency</TypeCurrency>
      </Description>
      <TBody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <SectionTransaction
              key={id}
              style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#ebeeef' }}
            >
              <Type>{type}</Type>
              <Amount>{amount}</Amount>
              <Currency>{currency}</Currency>
            </SectionTransaction>
          );
        })}
      </TBody>
    </TransactionBox>
  );
};
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
