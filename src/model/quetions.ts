import prisma from "./db";

export async function getQuestionMap() {
  const questions = await prisma.questions.findMany();
  const qMap: Record<string, { question: string; id: number }[]> = {};
  questions.forEach((e) => {
    if (!qMap[e.tab]) qMap[e.tab] = [];
    qMap[e.tab].push({ question: e.question, id: parseInt(e.id.toString()) });
  });
  return qMap;
}
