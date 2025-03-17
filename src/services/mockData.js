export const mockUserData = {
  id: 12,
  userInfos: {
    firstName: "Thomas",
    lastName: "Durand",
    age: 31
  },
  score: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50
  }
};

export const mockActivity = {
  userId: 12,
  sessions: [
    { day: "2024-03-01", kilogram: 69, calories: 240 },
    { day: "2024-03-02", kilogram: 69, calories: 220 },
    { day: "2024-03-03", kilogram: 70, calories: 280 },
    { day: "2024-03-04", kilogram: 70, calories: 500 },
    { day: "2024-03-05", kilogram: 69, calories: 160 },
    { day: "2024-03-06", kilogram: 69, calories: 162 },
    { day: "2024-03-07", kilogram: 69, calories: 390 }
  ]
};

export const mockAverageSessions = {
  userId: 12,
  sessions: [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 23 },
    { day: 3, sessionLength: 45 },
    { day: 4, sessionLength: 50 },
    { day: 5, sessionLength: 0 },
    { day: 6, sessionLength: 45 },
    { day: 7, sessionLength: 60 }
  ]
};

export const mockPerformance = {
  userId: 12,
  kind: {
    1: "cardio",
    2: "energie",
    3: "endurance",
    4: "force",
    5: "vitesse",
    6: "intensité"
  },
  data: [
    { value: 80, kind: 1 },
    { value: 120, kind: 2 },
    { value: 140, kind: 3 },
    { value: 50, kind: 4 },
    { value: 200, kind: 5 },
    { value: 90, kind: 6 }
  ]
};