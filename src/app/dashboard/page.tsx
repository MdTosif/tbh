import { getAnswers } from "tbh/model/answers";
import React from "react";
import Dashboard from "./page-client";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { SECRET } from "tbh/constants";
import { redirect } from "next/navigation";
import { getUser } from "tbh/model/user";

export default async function Home({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/");
  }
  let data: any = jwt.verify(token.value, SECRET);

  if (!data?.id) redirect("/");

  let user = await getUser(data.id);
  const answerMap = await getAnswers(data.id);

  return <Dashboard answerMap={answerMap} user={user}></Dashboard>;
}
