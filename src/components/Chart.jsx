import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Chart = ({ chartType, data }) => {
  switch (chartType) {
    case 'bar':
      return <BarChart data={data} />;
    case 'line':
      return <LineChart data={data} />;
    case 'pie':
      return <PieChart data={data} />;
    default:
      return null;
  }
};

export default Chart;
