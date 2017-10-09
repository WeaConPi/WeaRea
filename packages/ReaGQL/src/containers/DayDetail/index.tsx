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

const StyledBody = styled.div`display: flex;`;

class comp extends React.Component<any, any> {
  state = {
    selectedHour: 0,
  };
  handleChangeDate = newDate => console.log(moment(newDate));

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
    if (data.loading) {
      return <div>Loading..</div>;
    }
    console.log(this.props);
    let mappedHours = Map() as Map<number, IHour>;

    if (data.day.hours) {
      mappedHours = Map(data.day.hours.map(hour => [hour.number, hour])) as Map<
        number,
        IHour
      >;
    }

    return (
      <div>
        <DayDetailInfo
          day={data.day}
          handleDateChange={this.handleChangeDate}
        />
        <StyledBody>
          <div>
            <br />
            {this.renderLine(mappedHours)}
            <HourDetail
              loading={false}
              hour={mappedHours.get(this.state.selectedHour)}
            />
          </div>
          <div>
            <h2>Daily summary </h2>
            <DayCharts hours={mappedHours} />
          </div>
        </StyledBody>
      </div>
    );
  }
}

export default graphql(
  gql`
    {
      day(
        buildingId: "58ed211899c6b9a3b02e8acd"
        date: "2017-04-18T00:00:00.000Z"
      ) {
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
    options: props => {
      console.log(props);
      return {};
    },
  },
)(comp);
