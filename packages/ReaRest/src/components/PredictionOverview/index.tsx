import * as React from 'react';
import styled from 'styled-components';
import { IPrediction } from '../../models/Hour';

const StyledRow = styled.div`
display: flex;
`;
const StyledChip = styled.div`
margin: 0.5em;
`;

export const PredictionOverview = (
  props: {
    prediction: IPrediction,
    loading?: boolean,
  }
) => (
  <StyledRow>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Heat</h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.prediction.heat}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>WeaNeN</i>
    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Blinders </h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.prediction.blinders}
        {' '}
        -
        {' '}
        {props.prediction.blinders > 0 ? 'open' : 'closed'}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>WeaNeN</i>

    </StyledChip>
    <StyledChip className="pt-card pt-elevation-2">
      <h4 className={`${props.loading && 'pt-skeleton'}`}>Windows </h4>
      <h3 className={`${props.loading && 'pt-skeleton'}`}>
        {props.prediction.windows}
      </h3>
      <i className={`${props.loading && 'pt-skeleton'}`}>WeaNeN</i>
    </StyledChip>
  </StyledRow>
);
