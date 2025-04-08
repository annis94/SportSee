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

  const CustomCursor = ({ points }) => {
    if (!points || points.length < 2) return null;
    return (
      <rect
        x={points[0].x}
        y={0}
        width="100%"
        height="100%"
        fill="rgba(0, 0, 0, 0.1)"
        style={{ transform: `translateX(${points[0].x}px)` }}
      />
    );
  };

  return (
    <div className={styles.container}>
      <h2>Durée moyenne des sessions</h2>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              hide 
              domain={['dataMin-10', 'dataMax+10']}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={<CustomCursor />}
              position={{ y: 0 }}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#lineGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: 'white',
                strokeWidth: 8,
                stroke: 'rgba(255, 255, 255, 0.2)'
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