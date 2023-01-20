import { getDatabase } from "firebase-admin/database";

export default (name, score, game) => {
  const db = getDatabase();
  const mineRef = db.ref(`${game}/scores`);

  const submittedRef = mineRef.push({
    name: name,
    score: +score,
    date: new Date().toISOString(),
  });

  return submittedRef.key;
};
