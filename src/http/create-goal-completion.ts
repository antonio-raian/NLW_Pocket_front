export async function createGoalCompletion(goalId: string) {
  await fetch("http://localhost:3000/goal-completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
