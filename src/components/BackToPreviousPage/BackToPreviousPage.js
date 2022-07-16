import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function BackToPreviousPage() {
  const navigate = useNavigate();
  return (
    <GoBack onClick={() => navigate(-1)}>
      <MdOutlineArrowBackIosNew data-testid="goback" />
    </GoBack>
  );
}

const GoBack = styled.div`
  font-size: 1.5rem;
  padding-top: 0.3rem;
`;
