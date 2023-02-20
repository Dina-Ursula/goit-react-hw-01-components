import styled from '@emotion/styled';

export const FriendsContainer = styled.ul`
  width: 220px;
  margin: auto;
  padding-bottom: 60px;
  padding-top: 60px;
`;
export const FriendDescr = styled.li`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  /* margin: auto; */
  padding: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: rgb(239 239 239);
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
`;
export const ImgAvatar = styled.img`
  margin-right: 8px;
  width: 59px;
  height: 59px;
`;
export const NameFriend = styled.p`
  font-size: 30px;
`;
