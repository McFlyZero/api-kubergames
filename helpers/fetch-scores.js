import { getDatabase } from "firebase-admin/database";

export default async (game) => {
  const scores = [];

  const db = getDatabase();
  const mineRef = db.ref(`${game}/scores`);

  const queryRef = mineRef.orderByChild("score").limitToLast(10);
  await queryRef.once("value", (data) => {
    data.forEach((score) => {
      scores.unshift(score.toJSON());
    });
  });

  return scores;
};
