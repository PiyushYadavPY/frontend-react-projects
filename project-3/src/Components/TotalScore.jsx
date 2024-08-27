import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  p {
    font-size: 24px;
    font-weight: 600;
  }
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
`;
