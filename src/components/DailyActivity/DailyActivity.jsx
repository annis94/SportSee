import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './DailyActivity.module.scss';

function DailyActivity({ data }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Activité quotidienne</h2>
        <div className={styles.legend}>
          <span>Poids (kg)</span>
          <span>Calories brûlées (kCal)</span>
        </div>
      </header>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data.sessions} barGap={8} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            tick={{fontSize: 14}}
          />
          <YAxis yAxisId="kg" orientation="right" tickLine={false} axisLine={false} tick={{fontSize: 14}} />
          <YAxis yAxisId="cal" orientation="left" hide={true} />
          <Tooltip 
            content={CustomTooltip} 
            wrapperStyle={{ outline: 'none' }}
            offset={0}
            allowEscapeViewBox={{ x: false, y: true }}
          />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <div>{`${payload[0].value}kg`}</div>
        <div>{`${payload[1].value}Kcal`}</div>
      </div>
    );
  }
  return null;
}

export default DailyActivity;