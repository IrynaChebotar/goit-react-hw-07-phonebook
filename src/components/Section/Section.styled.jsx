import { styled } from 'styled-components';

export const MainSection = styled.section`
  padding-top: 40px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
`;

export const SectionTitle = styled.h1`
  margin-bottom: 30px;
  color: #242430;
  font-weight: 700;
  color: rgb(28, 28, 41);
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;
