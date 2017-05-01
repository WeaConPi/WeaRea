import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { RootState } from "../../reducers";
import { IDayDetailReducer as ReducerInterface } from "./reducer";
import * as React from "react";
import { HourDetail } from "../../components/HourDetail/index";
import { DayDetailInfo } from "../../components/DayDetailInfo/index";
import moment = require("moment");

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
    this.props.actions.fetchDay(moment(newDate));

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
        <br/>
        {this.renderLine()}
        <HourDetail hour={this.props.hours.get(this.props.selectedHour)}/>
      </div>
    );
  }
}

export const DayDetail = connect(mapStateToProps, mapDispatchToProps)(comp as any);
