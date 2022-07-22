import {IoIosArrowUp} from 'react-icons/io';
import styled from 'styled-components';

export default function ScrollTop() {
  return (
    <ScrollTopContainer className="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <IoIosArrowUp data-testid="scroll-up" />
    </ScrollTopContainer>
  );
}

const ScrollTopContainer = styled.div`
  width: 2rem;
  position: absolute;
  bottom: 4rem;
  left: 90%;
  padding: 0.2rem 0.25rem 0;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border-radius: 50%;
  background-color: #fff;
  display: ${props => (props.active ? 'block' : 'none')};
`;
