import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContaner>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContaner>
  );
}

export default Rules;

const RulesContaner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
    /* font-weight: bold; */
  }
  .text {
    margin-top: 24px;
    font-weight: 600;
  }
`;
