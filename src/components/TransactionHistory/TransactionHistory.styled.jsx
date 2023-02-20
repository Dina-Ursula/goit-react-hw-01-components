import styled from '@emotion/styled';

export const TransactionBox = styled.table`
  width: 900px;
  margin: auto;
  padding-bottom: 60px;
`;
export const Description = styled.tr`
  background-color: #62d6f9;
  display: grid;
  grid-template-columns: auto auto auto;
  height: 60px;
  font-size: 20px;
  color: #fff;
  margin: 0px;
`;
export const TypeName = styled.th`
  border: 2px solid #fff;
  width: 300px;
  padding-top: 10px;
`;
export const TypeAmount = styled.th`
  border: 2px solid #fff;
  width: 300px;
  padding-top: 10px;
`;
export const TypeCurrency = styled.th`
  border: 2px solid #fff;
  width: 300px;
  padding-top: 10px;
`;
export const TBody = styled.tbody`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: rgb(239 239 239);
`;
export const SectionTransaction = styled.tr`
  display: grid;
  grid-template-columns: auto auto auto;
  color: #575c5e;
  height: 60px;
  background-color: #fff;
  text-align: center;
`;
export const Type = styled.td`
  border: 1px solid #c8cdd0;
  width: 300px;
  padding-top: 20px;
  margin: 0px;
`;
export const Amount = styled.td`
  width: 300px;
  padding-top: 20px;
  border: 1px solid #c8cdd0;
`;
export const Currency = styled.td`
  width: 300px;
  padding-top: 20px;
  border: 1px solid #c8cdd0;
`;
