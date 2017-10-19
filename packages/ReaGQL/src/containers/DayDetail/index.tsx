import * as React from 'react';
import { DayDetailInfo } from 'wea-rui';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { HourDetail } from 'wea-rui';
import * as moment from 'moment';
import { DayCharts } from 'wea-rui';
import { IHour } from '../../models/Hour';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { selectDay } from '../actions';
import { StoreState } from '../../store';
import { IAppReducer } from '../reducer';

const StyledBody = styled.div`display: flex;`;
class comp extends React.Component<any, any> {
  state = {
    selectedHour: 0,
  };
  handleChangeDate = newDate => this.props.selectDay(moment(newDate));

  handleHourChange = hour => () => this.setState({ selectedHour: hour });

  renderLine = (hours: Map<number, IHour>) => (
    <div className="pt-button-group ">
      {hours.toIndexedSeq().map((hour, key) => (
        <button
          key={key}
          className={`pt-button ${key === this.state.selectedHour
            ? 'pt-active'
            : ''}`}
          onClick={this.handleHourChange(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );

  render() {
    const { data } = this.props;

    let mappedHours = Map() as Map<number, IHour>;

    if (!data.error) {
      try {
        mappedHours = Map(
          data.day.hours.map(hour => [hour.number, hour]),
        ) as Map<number, IHour>;
      } catch (e) {}
    }
    return (
      <div>
        <DayDetailInfo
          day={data.day}
          handleDateChange={this.handleChangeDate}
          isLoading={data.loading}
        />
        {data.error ? (
          <div>Something went wrong select new date.</div>
        ) : (
          <StyledBody>
            <div>
              <br />
              {this.renderLine(mappedHours)}
              <HourDetail
                loading={data.loading}
                hour={mappedHours.get(this.state.selectedHour)}
              />
            </div>
            <div>
              <h2>Daily summary </h2>
              <DayCharts hours={mappedHours} />
            </div>
          </StyledBody>
        )}
      </div>
    );
  }
}

const withData = graphql(
  gql`
    query($activeDay: String) {
      day(buildingId: "58ed211899c6b9a3b02e8acd", date: $activeDay) {
        date
        hours {
          number
          sensors {
            type
            unit
            value
            sensor_name
            sensor_type
          }
          prediction {
            heat
            blinders
            windows
          }
          forecast {
            temperature
            pressure
            humidity
          }
        }
      }
    }
  `,
  {
    options: ({ activeDay }: IAppReducer) => {
      const actif = `${activeDay.format('YYYY-MM-DD')}T00:00:00.000Z`;
      return {
        variables: {
          activeDay: actif,
        },
      };
    },
  },
)(comp);

export default connect(
  (state: StoreState) => ({
    activeDay: state.appReducer.activeDay,
  }),
  { selectDay },
)(withData as any);
