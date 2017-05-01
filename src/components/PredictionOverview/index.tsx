import * as React from "react";
import styled from "styled-components";
import { IPrediction } from "../../models/Hour";

const StyledRow = styled.div`
display: flex;
`;
const StyledChip = styled.div`
margin: 0.5em;
`;

export const PredictionOverview = (props: {
  prediction: IPrediction,
}) =>
  <StyledRow>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Heat</h4>
      <h3>{props.prediction.heat}</h3>
      <i>WeaNeN</i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Blinders </h4>
      <h3>{props.prediction.blinders} - {props.prediction.blinders > 0 ? 'open' : 'closed'}</h3>
      <i>WeaNeN</i>

    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4>Windows </h4>
      <h3>{props.prediction.windows}</h3>
      <i>WeaNeN</i>
    </StyledChip>
  </StyledRow>;
