import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { RootState } from "../../reducers";
import { IAppReducer } from "./reducer";
import * as React from "react";
import { FocusStyleManager } from "@blueprintjs/core";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Hello } from "../Hello/index";
import styled from "styled-components";
import { DayDetail } from "../DayDetail/index";
import { BrainControl } from "../BrainControl/index";
import {HelloWorld} from 'wea-rui';
interface IAppProps extends IAppReducer {
  actions: actions.IActions;
  children?: Element;
}
const Bodys: any = styled.div`
  background-color:${(props: any) => props.dark ? "#293742" : '' };
  height:100%;
`;
const Container: any = styled.div`
  padding:2em;
`;

class comp extends React.Component <IAppProps, any> {

  handleToggleTheme = () => {
    this.props.actions.toggleTheme()
  };

  componentDidMount() {
    FocusStyleManager.onlyShowFocusOnTabs();
  }

  render() {
    return (
      <BrowserRouter>
        <Bodys className={this.props.themeStyle} dark={this.props.themeStyle}>
          <nav className="pt-navbar ">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-navbar-heading">WeaConPi</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <Link to="/">
                <button className="pt-button pt-minimal pt-icon-home">Home</button>
              </Link>
              <Link to="/weanen-test">
                <button className="pt-button pt-minimal pt-icon-predictive-analysis">Brain test</button>
              </Link>
              <Link to="/hello">
                <button className="pt-button pt-minimal pt-icon-chat">Hello</button>
              </Link>

              <span className="pt-navbar-divider"/>
              <button onClick={this.handleToggleTheme} className="pt-button pt-minimal pt-icon-moon"/>
            </div>
          </nav>
          <HelloWorld hello={'HELLO'} who={'REAREST'}/>
          <Container className={this.props.themeStyle}>
            <Switch>
              <Route exact path="/hello" component={Hello as any}/>
              <Route exact path="/" component={DayDetail as any}/>
              <Route exact path="/weanen-test" component={BrainControl as any}/>
            </Switch>
          </Container>
        </Bodys>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({appReducer}: RootState) => ({
  themeStyle: appReducer.themeStyle,
  customStyle: appReducer.customStyle,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions as any, dispatch),
});
export const App = connect(mapStateToProps, mapDispatchToProps)(comp as any);
