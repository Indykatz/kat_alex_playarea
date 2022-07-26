import { ContentFlexBox, ContentItemBox } from "../styles/about.styles";

const ContentItem = () => {
  const theGang = [
    "Kat",
    "Dom",
    "Wren",
    "Alex B",
    "Gaz",
    "Karl",
    "John",
    "James",
    "Abdelbar",
  ];
  return (
    <ContentFlexBox>
      {theGang.map((gang, i) => {
        return <ContentItemBox key={i}>{gang}</ContentItemBox>;
      })}
    </ContentFlexBox>
  );
};

export default ContentItem;
