import Quote from "../components/quote";
import UserEvents from "../components/userEvents";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

const Profile = () => {
  return (
    <AppStyles>
      <Quote />
      <ContentStyled>
        <Header1Styled>Profile Page</Header1Styled>
        <UserEvents />
      </ContentStyled>
    </AppStyles>
  );
};

export default Profile;
