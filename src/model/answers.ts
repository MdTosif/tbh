import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAnswers(user_id: number) {
  return prisma.answers.findMany({
    where: {
      user_id,
    },
  });
}

export async function createAnswers(
  data: { question_id: number; user_id: number; answer: number }[],
) {
  return prisma.answers.createMany({
    data: data,
  });
}
