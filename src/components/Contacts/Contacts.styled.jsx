import styled from 'styled-components';

export const ContactsList = styled.div`
  background-color: rgba(68, 33, 83, 0.5);
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  max-width: 700px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const ContactsText = styled.p`
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;

  span.number {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
`;
export const ItemStyle = styled.li`
  margin-bottom: 12px;
  color: #3119cd;
  display: flex;
  justify-content: space-between;
  color: #3119cd;
`;
export const DeleteBtn = styled.button`
  max-width: 200px;
  margin-bottom: 10px;
  padding: 4px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #a656dc;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a656dc;
    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
  }
  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);
`;
