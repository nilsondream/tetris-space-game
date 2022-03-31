import styled from 'styled-components';
// BG Image

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 768px){

  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 100vh;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 300px;
    display: block;
    padding: 0 20px;

    h1{
      text-transform: uppercase;
      font-size: 50px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px){
    flex-direction: column;
  }
`;
