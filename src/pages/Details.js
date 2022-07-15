import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import AddToCart from '../components/AddToCart/AddToCart';
import BackToPreviousPage from '../components/BackToPreviousPage/BackToPreviousPage';
import Navigation from '../components/Navigation/Navigation';
import ScrollTop from '../components/ScrollTop/ScrollTop.js';

export default function Details({menusdata}) {
  const params = useParams();
  const currentMenu = menusdata.find(menu => menu.id === params.id);
  return (
    <>
      <DetailPage>
        <BackAndTitle>
          <BackToPreviousPage />
          <Title>{currentMenu.name}</Title>
        </BackAndTitle>
        <MainPic src={currentMenu.image} alt={currentMenu.name} />
        <AddToCart currentMenu={currentMenu} />
        {currentMenu.category !== 'Drinks' && (
          <>
            <DesContainer>
              <Section>
                <h2>Taste: </h2>
                {currentMenu.taste}
              </Section>
              <Section>
                <h2>Spiciness:</h2>
                {currentMenu.spiciness} / 5
              </Section>
            </DesContainer>
            <Section>
              <h2>Ingredients:</h2>
              <div>{currentMenu.ingredients}</div>
            </Section>
            <Section>
              <h2>Review:</h2>
              {currentMenu.reviews.map(review => {
                return (
                  <SingelReview key={review.id}>
                    {review.image && <ReviewImg src={review.image} alt={currentMenu.name} />}
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
      <Navigation />
    </>
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
  background-color: #dfdfe7;
  color: #036;
  padding-bottom: 3rem;
`;
const Title = styled.h1`
  font-size: 1.8rem;
`;

const BackAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
`;
