import * as React from "react";
import { IDay } from "../../models/Day";
import { DateInput } from "@blueprintjs/datetime";
import styled from "styled-components";
import  moment from "moment";

const StyledDay = styled.div`
padding: 0.5em;
display: flex;
justify-content : space-around;
`;

export const DayDetailInfo = (props: {
  day: IDay,
  handleDateChange: (newDate: any) => void
}) =>
  <StyledDay>
    <DateInput onChange={props.handleDateChange}/>
    <div>{props.day.note ?
      `Note for ${moment(props.day.date).format('YYYY-MM-DD')} is ${props.day.note}`
      : `There is no note for ${moment(props.day.date).format('YYYY-MM-DD')}`}
    </div>
  </StyledDay>;
