import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 400px;
  background-color: #fff;
  border: 1px solid #575c5e;
  margin: auto;
  height: 450px;
  border-radius: 5px;
  margin-bottom: 60px;
`;

export const UserInfo = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
  margin: auto;
  height: 300px;
  width: 150px;
`;
export const Img = styled.img`
  width: 150px;
`;
export const Name = styled.p`
  width: 117px;
  margin: auto;
  padding-top: 20px;
  font-size: 17px;
  font-weight: bold;
`;
export const Tag = styled.p`
  width: 60px;
  margin: auto;
  padding-top: 20px;
  color: #575c5e;
`;
export const Location = styled.p`
  width: 135px;
  margin: auto;
  color: #575c5e;
  padding-top: 20px;
`;
export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  height: 90px;
  margin: 0px;
  width: 100%;

  padding-left: 0px;
  background-color: #ebeeef;
`;
export const Item = styled.li`
  width: 150px;
  border: 1px solid #575c5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 5px; */
`;
export const Popularity = styled.span`
  color: #575c5e;
  padding-bottom: 5px;
`;
export const Quantity = styled.span`
  font-size: 17px;
  font-weight: bold;
`;
