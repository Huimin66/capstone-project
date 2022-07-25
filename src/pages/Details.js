import {FaPepperHot} from 'react-icons/fa';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import AddToCart from '../components/AddToCart/AddToCart';
import BackToPreviousPage from '../components/BackToPreviousPage/BackToPreviousPage';
import Header from '../components/Header/Header.js';
import Navigation from '../components/Navigation/Navigation';

export default function Details({menusdata}) {
  const params = useParams();

  const currentMenu = menusdata?.find(menu => String(menu.id) === params.id);

  function calculatePeppers(spicinessValue) {
    return [false, false, false, false, false].map((_, index) => spicinessValue > index);
  }

  return (
    <Page>
      <Header />
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
                <H2>Taste: </H2>
                {currentMenu.taste}
              </Section>
              <Section>
                <H2>Spiciness:</H2>

                <div spiciness={currentMenu.spiciness}>
                  {calculatePeppers(currentMenu.spiciness).map((active, index) => {
                    return <FaPepperHot key={index} style={active ? {color: 'red'} : {fill: 'grey'}} />;
                  })}
                </div>
              </Section>
            </DesContainer>
            <Section>
              <H2>Ingredients:</H2>
              <div>{currentMenu.ingredients}</div>
            </Section>
            <Section>
              <H2>Review:</H2>
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
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow-y: scroll;
`;

const DetailPage = styled.main`
  max-width: 600px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--third-color);
  padding: 3rem 0;
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
  background-color: var(--primary-light-color);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

const ReviewImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const SingelReview = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid #d3d3d3;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
`;
