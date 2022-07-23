import styled from 'styled-components';

export default function Message({info}) {
  return (
    <>
      <Div>{info}</Div>
    </>
  );
}

const Div = styled.div`
  width: 60%;
  height: 2rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
