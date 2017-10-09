import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { RootState } from "../../reducers";
import { IDayDetailReducer as ReducerInterface } from "./reducer";
import * as React from "react";
import { HourDetail } from "../../components/HourDetail/index";
import { DayDetailInfo } from "wea-rui";
import * as moment from "moment";
import { DayCharts } from "../../components/DayCharts/index";
import styled from "styled-components";

const StyledBody= styled.div`
display:flex;
`

interface IAppProps extends ReducerInterface {
  actions: actions.IActions;
}

const mapStateToProps = ({dayDetailReducer}: RootState) => ({
  day: dayDetailReducer.day,
  date: dayDetailReducer.date,
  hours: dayDetailReducer.hours,
  selectedHour: dayDetailReducer.selectedHour
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions as any, dispatch),
});
class comp extends React.Component <IAppProps, any> {


  componentDidMount() {
    this.props.actions.fetchDay(moment())
  };

  handleChangeDate = (newDate) =>
    this.props.actions.fetchDay(moment(newDate))

  handleHourChange = (hour) => () =>
    this.props.actions.selectHour(hour)

  renderLine = () =>
    <div className="pt-button-group ">
      {this.props.hours.toIndexedSeq().map((hour, key) =>
        <button key={key} className={`pt-button ${key === this.props.selectedHour ? 'pt-active' : ''}`}
                onClick={this.handleHourChange(key)}>{key}</button>
      )}
    </div>;

  render() {
    return (
      <div>
        <DayDetailInfo day={this.props.day} handleDateChange={this.handleChangeDate}/>
        <StyledBody>
        <div>
        <br/>
        {this.renderLine()}
        <HourDetail loading={this.props.loading} hour={this.props.hours.get(this.props.selectedHour)}/>
        </div>
        <div>
          <h2>Daily summary </h2>
        <DayCharts  hours={this.props.hours}/>
        </div>
      </StyledBody>
     </div>
    );
  }
}

export const DayDetail = connect(mapStateToProps, mapDispatchToProps)(comp as any);
