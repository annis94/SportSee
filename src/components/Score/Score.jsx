import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styles from './Score.module.scss';

function Score({ score }) {
  // Convertir le score en pourcentage
  const scorePercent = score * 100;
  
  // Données pour le graphique
  const data = [
    {
      value: scorePercent
    }
  ];
  
  return (
    <div className={styles.container}>
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          innerRadius="70%" 
          outerRadius="80%" 
          data={data} 
          startAngle={90} 
          endAngle={90 + (scorePercent * 3.6)} // 3.6 = 360/100 pour convertir le pourcentage en degrés
          barSize={10}
        >
          <RadialBar
            dataKey="value"
            fill="#FF0000"
            background
            clockWise
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className={styles.label}>
        <span className={styles.value}>{scorePercent}%</span>
        <span className={styles.text}>de votre objectif</span>
      </div>
    </div>
  );
}

export default Score;