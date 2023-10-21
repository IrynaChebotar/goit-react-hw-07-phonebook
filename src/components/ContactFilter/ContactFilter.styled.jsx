import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Description = styled.input`
  width: 250px;
  border-radius: 6px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
`;

export const FilterTitile = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const ContactFilter = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const Lable = styled.label`
  position: absolute;
  top: -8px;
  left: 50px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 15px;
  font-size: 16px;
  color: #464350;
  text-align: center;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
`;
