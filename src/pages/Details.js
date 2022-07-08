import {useParams} from 'react-router-dom';
import styled from 'styled-components';

export default function Details({menusdata}) {
  const params = useParams();
  const currentmenu = menusdata.find(menu => menu.id === params.id);
  return (
    <DetailPage>
      <Title>{currentmenu.name}</Title>
      <MainPic src={currentmenu.image} alt={currentmenu.name} />
      {currentmenu.category !== 'Drinks' && (
        <>
          <DesContainer>
            <Section>
              <h2>Taste: </h2>
              {currentmenu.taste}
            </Section>
            <Section>
              <h2>Spiciness:</h2>
              {currentmenu.spiciness} / 5
            </Section>
          </DesContainer>
          <Section>
            <h2>Ingredients:</h2>
            <div>{currentmenu.ingredients}</div>
          </Section>
          <Section>
            <h2>Review:</h2>
            {currentmenu.reviews.map(review => {
              return (
                <SingelReview key={review.id}>
                  {review.image && <ReviewImg src={review.image} alt={currentmenu.name} />}
                  <div>
                    {review.guest}: {review.text}
                  </div>
                </SingelReview>
              );
            })}
          </Section>
        </>
      )}
    </DetailPage>
  );
}

const DetailPage = styled.main`
  max-width: 600px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #dfdfe7;
  background-size: cover;
  color: #036;
  overflow-y: scroll;
`;
const Title = styled.h1`
  font-size: 1.8rem;
`;

const MainPic = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  align-self: center;
`;

const DesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-around;
`;

const Section = styled.section`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #efefef;
`;

const ReviewImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const SingelReview = styled.div`
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  margin-top: 1rem;
`;
