import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAnswers(user_id: number) {
  let res: {
    question: string;
    count: number;
    total: number;
    tab: string;
    id: string;
  }[] =
    await prisma.$queryRaw`select count(*) as count, sum(answers.answer) as total, questions.question as question, questions.tab as tab, answers.question_id as id  from answers left join questions on answers.question_id = questions.id  where answers.user_id = ${user_id} group by answers.question_id, questions.question, questions.tab;`;
  const qMap: Record<
    string,
    { question: string; count: number; total: number; id: string }[]
  > = {};
  res.forEach((e) => {
    if (!qMap[e.tab]) qMap[e.tab] = [];
    qMap[e.tab].push({
      question: e.question,
      count: parseInt(e.count.toString()),
      total: parseInt(e.total.toString()),
      id: e.id.toString(),
    });
  });
  return qMap;
}

export async function createAnswers(
  data: { question_id: number; user_id: number; answer: number }[],
) {
  return prisma.answers.createMany({
    data: data,
  });
}
