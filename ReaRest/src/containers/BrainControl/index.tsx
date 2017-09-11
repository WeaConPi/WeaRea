///<reference path="../../../node_modules/@types/react-redux/index.d.ts"/>
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { RootState } from "../../reducers";
import { IBrainControlReducer } from "./reducer";
import * as React from "react";
import { PredictionOverview } from "../../components/PredictionOverview/index";
import styled  from "styled-components";

interface IAppProps extends IBrainControlReducer {
  actions: actions.IActions;
}
const StyledBrainBody = styled.div`
display:flex
`

const mapStateToProps = ({brainControlReducer}: RootState) => ({
  ...brainControlReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions as any, dispatch),
});
class comp extends React.Component <IAppProps, any> {

  handleTalking = (field) => (evnt) => {
    this.props.actions.modifyField(field, evnt.target.value);
  };
  testBrain = () => {
    this.props.actions.testBrain(
      this.props.month,
      this.props.day,
      this.props.hour,
      this.props.temperature,
      this.props.houseTemp,
    )
  };

  render() {
    return (
      <div>
        <h2>Test my brain, see what i can do</h2>
        <br/>
        <br/>
        <StyledBrainBody>
          <div>
        <div className="pt-form-group">
          <label className="pt-label">
            Month
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input" placeholder="Fill month"
              type="text"
              dir="auto"
              onChange={this.handleTalking('month')}
              value={this.props.month}
            />
          </div>
        </div>
        <div className="pt-form-group">
          <label className="pt-label">
            Day
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input" placeholder="Fill day"
              type="text"
              dir="auto"
              onChange={this.handleTalking('day')}
              value={this.props.day}
            />
          </div>
        </div>
        <div className="pt-form-group">
          <label className="pt-label">
            Hour
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input" placeholder="Fill hour"
              type="text"
              dir="auto"
              onChange={this.handleTalking('hour')}
              value={this.props.hour}
            />
          </div>
        </div>
        <div className="pt-form-group">
          <label className="pt-label">
            Temperature outside
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input" placeholder="Fill temperature"
              type="text"
              dir="auto"
              onChange={this.handleTalking('temperature')}
              value={this.props.temperature}
            />
          </div>
        </div>
        <div className="pt-form-group">
          <label className="pt-label">
            House temperature
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input" placeholder="Fill house temperature"
              type="text"
              dir="auto"
              onChange={this.handleTalking('houseTemp')}
              value={this.props.houseTemp}
            />
          </div>
        </div>
        <button className={`pt-button ${this.props.loading && 'pt-skeleton'}`}
                onClick={this.testBrain}>Test it !
        </button>
          </div>
        {this.props.prediction.heat &&<div>
          <h4>Results</h4>
          <PredictionOverview loading={this.props.loading} prediction={this.props.prediction}/>
        </div>}
      </StyledBrainBody>
      </div>
    );
  }
}

export const BrainControl = connect(mapStateToProps, mapDispatchToProps)(comp as any);
