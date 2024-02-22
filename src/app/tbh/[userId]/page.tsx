import { getQuestionMap } from "tbh/model/quetions";
import TBH from "./page-client";
import { getUser } from "tbh/model/user";

export default async function Home({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const questionsMap = await getQuestionMap();
  let user = await getUser(parseInt(params.userId));
  return <TBH questionsMap={questionsMap} userId={params.userId} user={user} />;
}
