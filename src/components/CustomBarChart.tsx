import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: {
    month: string;
    new_users: number;
    month_invoices: string;
    year: number;
  }[];
}

const formatCurrency = (value: string) => parseFloat(value.replace('$', ''));

const CustomBarChart: React.FC<BarChartProps> = ({ data }) => {
  const formattedData = data.map(item => ({
    ...item,
    month_invoices: formatCurrency(item.month_invoices),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={formattedData}  
        margin={{ top: 90, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Bar dataKey="new_users" fill="#8884d8" name="Nuevos usuarios" yAxisId="left" barSize={20} />
        <Bar dataKey="month_invoices" fill="#82ca9d" name="Ingresos mensuales" yAxisId="right" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
