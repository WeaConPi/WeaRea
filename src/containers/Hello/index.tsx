///<reference path="../../../node_modules/@types/react-redux/index.d.ts"/>
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { RootState } from "../../reducers";
import { IHelloReducer } from "./reducer";
import * as React from "react";

interface IAppProps extends IHelloReducer {
  actions: actions.IActions;
}

const mapStateToProps = ({helloReducer}: RootState) => ({
  count: helloReducer.count,
  text: helloReducer.text
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions as any, dispatch),
});
class comp extends React.Component <IAppProps, any> {

  handleTalking = (text) => {
    this.props.actions.sayHello(text.target.value)
  };

  componentDidMount() {
    this.props.actions.sayHello("OLA")
  };

  render() {
    return (
      <div>
        Say something :
        {
          this.props.text
        }
        {
          this.props.count
        }
        <input
          type="text"
          onChange={this.handleTalking}
        />
      </div>
    );
  }
}

export const Hello = connect(mapStateToProps, mapDispatchToProps)(comp as any);
