import * as React from 'react';
import './App.css';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { StoreState } from '../store';
import { FocusStyleManager } from '@blueprintjs/core';
import { IActions } from './actions';
import { IAppReducer } from './reducer';
import styled from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import DayDetail from './DayDetail/index';
import { HelloWorld } from 'wea-rui';

const Container: any = styled.div`padding: 2em;`;
const Bodys: any = styled.div`
  background-color: ${(props: any) => (props.dark ? '#293742' : '')};
  height: 100%;
`;

const mapStateToProps = ({ appReducer }: StoreState) => ({
  customStyle: appReducer.customStyle,
  themeStyle: appReducer.themeStyle,
});
interface AppInterface extends IAppReducer, IActions {}
class comp extends React.Component<AppInterface, any> {
  handleToggleTheme = () => {
    // this.props.toggleTheme();
  };

  componentDidMount() {
    FocusStyleManager.onlyShowFocusOnTabs();
  }

  render() {
    return (
      <BrowserRouter>
        <Bodys>
          <nav className="pt-navbar ">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-navbar-heading">WeaConPi</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <Link to="./">
                <button className="pt-button pt-minimal pt-icon-home">
                  Home
                </button>
              </Link>
              <Link to="./weanen-test">
                <button className="pt-button pt-minimal pt-icon-predictive-analysis">
                  Brain test
                </button>
              </Link>
              <Link to="./hello">
                <button className="pt-button pt-minimal pt-icon-chat">
                  Hello
                </button>
              </Link>

              <span className="pt-navbar-divider" />
              <button
                onClick={this.handleToggleTheme}
                className="pt-button pt-minimal pt-icon-moon"
              />
            </div>
            <HelloWorld hello={'HELLOOOO'} who={'ReaGQL'}/>
          </nav>
          <Container className={this.props.themeStyle}>
            <Switch>
              <Route exact path="/" component={DayDetail as any} />
            </Switch>
          </Container>
        </Bodys>
      </BrowserRouter>
    );
  }
}

const connectedComp = connect(mapStateToProps, () => ({}))(comp as any);

export default graphql(gql`
  {
    days(buildingId: "58ed211899c6b9a3b02e8acd", page: 1, pageSize: 10) {
      page
      pageSize
      content {
        date
      }
    }
  }
`)(connectedComp as any);
