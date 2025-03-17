import styles from './KeyData.module.scss';

function KeyData({ data }) {
  const items = [
    {
      icon: <img src="/images/icons/calories.svg" alt="Calories" />,
      value: data.calorieCount.toLocaleString(),
      unit: 'kCal',
      label: 'Calories',
      color: 'red'
    },
    {
      icon: <img src="/images/icons/proteines-new.svg" alt="Proteines" />,
      value: data.proteinCount,
      unit: 'g',
      label: 'Proteines',
      color: 'blue'
    },
    {
      icon: <img src="/images/icons/glucides-new.svg" alt="Glucides" />,
      value: data.carbohydrateCount,
      unit: 'g',
      label: 'Glucides',
      color: 'yellow'
    },
    {
      icon: <img src="/images/icons/lipides-new.svg" alt="Lipides" />,
      value: data.lipidCount,
      unit: 'g',
      label: 'Lipides',
      color: 'pink'
    }
  ];

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={`${styles.icon} ${styles[item.color]}`}>
            {item.icon}
          </div>
          <div className={styles.content}>
            <p className={styles.value}>{item.value}{item.unit}</p>
            <p className={styles.label}>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KeyData;