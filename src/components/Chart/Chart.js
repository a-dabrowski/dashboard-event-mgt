import React from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';
import BlockContainer from '../BlockContainer';
import { ComponentTitle } from '../Title/Title';

import data from './data';

const Tooltip = styled.div`
  background-color: #7b3fed;
  color: #fff;
  padding: 10px 20px;
  position: relative;
  border-radius: 4px;
`;
const theme = {
  textColor: '#fff',
  axis: {
    ticks:{
      line: {
        stroke: '#7b3fed'
      }
    },
  },
  grid: {
    line: {
      stroke: '#7b3fed',
    },
  },
  markers: {
    lineColor: '#000000',
    lineStrokeWidth: 1,
    text: {}
  },
};

const ChartWrap = styled.div`
  height: 250px;
  width: 100%;
`;
const EngagementChart = (props) => {

  return (
    <BlockContainer size="100%">
      <ComponentTitle>
        Engagement Chart
      </ComponentTitle>
      <ChartWrap>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        tooltip={(slice) => (<Tooltip>{slice.point.data.y}</Tooltip>)}
        theme={theme}
        pointSize={10}
        colors='#7b3fed'
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
      />  
    </ChartWrap>
  </BlockContainer>
  );
};
export default EngagementChart;
