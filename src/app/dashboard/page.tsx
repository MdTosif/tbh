import { getQuestionMap } from "tbh/model/quetions";
// import TBH from "./page-client";
import { getAnswers } from "tbh/model/answers";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Tabs,
  Tab,
  Slider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@nextui-org/react";
import React from "react";
import Dashboard from "./page-client";

export default async function Home({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const answerMap = await getAnswers(5);
  return <Dashboard answerMap={answerMap}></Dashboard>;
}
