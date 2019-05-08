import styled from "styled-components";

const StyledDiv = styled.div`
  background: pink;
`;

const Home = () => (
  <div>
    <h1>Home</h1>
    <StyledDiv>Styled components test with server render</StyledDiv>
    <h2>Static file serving test</h2>
    <img src="/static/icons8-classroom-48.png" alt="icons8-classroom-48.png" />
  </div>
);

export default Home;
