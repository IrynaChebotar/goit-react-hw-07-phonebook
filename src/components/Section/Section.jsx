import { MainSection, Container, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}

        {children}
      </Container>
    </MainSection>
  );
};
