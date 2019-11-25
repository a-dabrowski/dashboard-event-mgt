import React from 'react';
import { Bar } from '@nivo/bar';
import BlockContainer from '../BlockContainer';
import { ComponentTitle } from '../Title/Title';

// TODO create live data
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 50, bottom: 60, left: 30 },
  padding: 0.2,
  labelSkipWidth: 10,
  labelSkipHeight: 10,
};
const theme = {
  textColor: '#fff',
  tooltip: {
    container: {
      color: '#000',
      background: '#888'
    }
  }
};
const divergingData = [
  {
    'gain': 100,
    'lost': -50,
    'time': 10
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 9
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 8
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 7
  },
  {
    'gain': 300,
    'lost': -150,
    'time': 6
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 5
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 4
  },
  {
    'gain': 100,
    'lost': -200,
    'time': 3
  },
  {
    'gain': 100,
    'lost': -50,
    'time': 2
  },
];

const divergingCommonProps = {
  ...commonProps,
  data: divergingData,
  indexBy: 'time',
  minValue: -500,
  maxValue: 500,
  enableGridX: false,
  enableGridY: false,
  label: d => Math.abs(d.value),
  labelTextColor: 'inherit:darker(1.2)',
  axisBottom: {
    legend: '',
    legendPosition: 'middle',
    legendOffset: 50,
    tickSize: 0,
    tickPadding: 2,
    format: v => `~${Math.abs(v)}min ago`,
  },
  axisLeft: null,
  axisRight: null,
  markers: [
    {
      axis: 'y',
      value: 0,
      lineStyle: { strokeOpacity: 0 },
      textStyle: { fill: '#fff' },
      legend: 'gain',
      legendPosition: 'top-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
    },
    {
      axis: 'y',
      value: 0,
      lineStyle: { stroke: '#f47560', strokeWidth: 0.2 },
      textStyle: { fill: '#e25c3b' },
      legend: 'lost',
      legendPosition: 'bottom-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
    },
  ],
};

const LiveChart = (props) => {
  return (
  <BlockContainer cornerSlot={'Updated 3 min ago'}>
    <ComponentTitle>
      Real-Time Activity
    </ComponentTitle>
    <Bar
      {...divergingCommonProps}
      keys={['gain', 'lost']}
      theme={theme}
      padding={0.9}
      colors={['#fff', '#7b3fed']}
      labelFormat={v => ''}
    />
  </BlockContainer>
  );
};

export default LiveChart;
