import prisma from "./db";

export async function getUser(id: number) {
  return prisma.user.findFirst({
    where: {
      id: id,
    },
  });
}

export async function createUser(name: string) {
  const user = await prisma.user.create({
    data: {
      name: name,
    },
  });
  return { ...user, id: user.id.toString() };
}
