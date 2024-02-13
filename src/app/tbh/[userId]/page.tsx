import { getQuestionMap } from "tbh/model/quetions";
import TBH from "./page-client";

export default async function Home({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const questionsMap = await getQuestionMap();
  return <TBH questionsMap={questionsMap} userId={params.userId} />;
}
