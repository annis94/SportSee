import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './SessionDuration.module.scss';

function SessionDuration({ data }) {
  // Données formatées avec les jours de la semaine
  const formattedData = [
    { day: 'L', sessionLength: data.sessions[0].sessionLength },
    { day: 'M', sessionLength: data.sessions[1].sessionLength },
    { day: 'M', sessionLength: data.sessions[2].sessionLength },
    { day: 'J', sessionLength: data.sessions[3].sessionLength },
    { day: 'V', sessionLength: data.sessions[4].sessionLength },
    { day: 'S', sessionLength: data.sessions[5].sessionLength },
    { day: 'D', sessionLength: data.sessions[6].sessionLength }
  ];

  return (
    <div className={styles.container}>
      <h2>Durée moyenne des sessions</h2>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={formattedData}
            margin={{ top: 40, right: 10, left: 10, bottom: 20 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              dy={10}
              padding={{ left: 5, right: 5 }}
            />
            <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: 'rgba(0, 0, 0, 0.1)',
                strokeWidth: 32,
                height: 200
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: 'white',
                strokeWidth: 8,
                stroke: 'rgba(255, 255, 255, 0.3)'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{payload[0].value} min</p>
      </div>
    );
  }
  return null;
}

export default SessionDuration;