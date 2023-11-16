// CustomBarChart Component
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  invoices: {
    month: string;
    new_users: number;
    month_invoices: number; // Update the type to number
    year: number;
  }[];
}

const CustomBarChart: React.FC<BarChartProps> = ({ invoices }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={invoices}
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
