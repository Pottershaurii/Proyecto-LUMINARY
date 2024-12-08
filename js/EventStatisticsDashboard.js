import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const EventStatisticsDashboard = () => {
  const attendanceData = [
    { name: 'Cumbre Tecnológica 2023', asistentes: 1500 },
    { name: 'Expo de Marketing', asistentes: 1200 },
    { name: 'Conferencia de Energía Verde', asistentes: 800 },
    { name: 'Simposio de IA', asistentes: 1000 },
    { name: 'Día de Presentación de Startups', asistentes: 500 },
  ];

  const satisfactionData = [
    { name: 'Muy satisfecho', valor: 68 },
    { name: 'Satisfecho', valor: 25 },
    { name: 'Neutral', valor: 5 },
    { name: 'Insatisfecho', valor: 2 },
  ];

  const revenueData = [
    { año: '2019', ingresos: 500000 },
    { año: '2020', ingresos: 300000 },
    { año: '2021', ingresos: 450000 },
    { año: '2022', ingresos: 700000 },
    { año: '2023', ingresos: 900000 },
  ];

  const eventTypeData = [
    { name: 'Conferencias', valor: 35 },
    { name: 'Seminarios', valor: 25 },
    { name: 'Talleres', valor: 20 },
    { name: 'Ferias', valor: 15 },
    { name: 'Lanzamientos', valor: 5 },
  ];

  const ROIData = [
    { name: 'Cumbre Tecnológica 2023', roi: 250 },
    { name: 'Expo de Marketing', roi: 180 },
    { name: 'Conferencia de Energía Verde', roi: 200 },
    { name: 'Simposio de IA', roi: 220 },
    { name: 'Día de Presentación de Startups', roi: 150 },
  ];

  const engagementData = [
    { mes: 'Ene', engagement: 75 },
    { mes: 'Feb', engagement: 80 },
    { mes: 'Mar', engagement: 85 },
    { mes: 'Abr', engagement: 90 },
    { mes: 'May', engagement: 88 },
    { mes: 'Jun', engagement: 92 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center text-center">
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Asistencia por Evento</h3>
        <p className="text-sm mb-4 text-gray-600">Cantidad de asistentes en los principales eventos del año.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="asistentes" fill="#8884d8" name="Asistentes" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Satisfacción del Cliente</h3>
        <p className="text-sm mb-4 text-gray-600">Nivel de satisfacción entre los asistentes.</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie dataKey="valor" data={satisfactionData} label>
              {satisfactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Ingresos Anuales</h3>
        <p className="text-sm mb-4 text-gray-600">Evolución de los ingresos anuales.</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="año" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ingresos" stroke="#8884d8" name="Ingresos" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Tipos de Eventos</h3>
        <p className="text-sm mb-4 text-gray-600">Distribución de los diferentes tipos de eventos organizados.</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie dataKey="valor" data={eventTypeData} label>
              {eventTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">ROI por Evento</h3>
        <p className="text-sm mb-4 text-gray-600">Retorno de inversión (ROI) de cada evento.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ROIData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="roi" fill="#82ca9d" name="ROI (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Engagement en Redes Sociales</h3>
        <p className="text-sm mb-4 text-gray-600">Participación mensual en redes sociales.</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#ff7300" name="Engagement" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EventStatisticsDashboard;
