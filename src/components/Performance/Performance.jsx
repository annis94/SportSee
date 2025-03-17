import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './Performance.module.scss';

const kinds = {
  1: 'Intensité',
  2: 'Vitesse',
  3: 'Force',
  4: 'Endurance',
  5: 'Energie',
  6: 'Cardio'
};

function Performance({ data }) {
  const formattedData = data.data.map(item => ({
    value: item.value,
    kind: kinds[item.kind]
  }));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formattedData} outerRadius={90}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis 
            dataKey="kind" 
            tick={{ fill: 'white', fontSize: 12 }}
          />
          <Radar 
            dataKey="value" 
            fill="#FF0101" 
            fillOpacity={0.7} 
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;