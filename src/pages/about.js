import ContentItem from "../components/contentItem";
import Quote from "../components/quote";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

const About = () => {
  return (
    <AppStyles>
      <Quote />
      <ContentStyled>
        <Header1Styled>About</Header1Styled>
        <ContentItem />
      </ContentStyled>
    </AppStyles>
  );
};

export default About;
