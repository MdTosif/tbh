"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Slider,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import NextPrevBtns from "tbh/components/nextPrev";

export default function Dashboard({
  answerMap,
  userId,
}: {
  answerMap: Record<
    string,
    {
      question: string;
      count: number;
      total: number;
      id: string;
    }[]
  >;
  userId?: string;
}) {
  const [selected, setSelected] = React.useState(Object.keys(answerMap)[0]);
  const router = useRouter();

  return (
    <Card
      isBlurred
      className="max-w-[400px] border mx-auto shadow-xl border-foreground-50 dark:bg-foreground-50/50"
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Tabs
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
        >
          {Object.entries(answerMap).map(([tabKey, questions], idx) => (
            <Tab key={tabKey} title={tabKey}>
              {questions.map((question) => {
                return (
                  <Slider
                    className="text-3xl"
                    key={question.id}
                    name={question.id as unknown as string}
                    label={question.question}
                    color="foreground"
                    size="md"
                    step={10}
                    value={question.total / question.count}
                    marks={[
                      {
                        value: 20,
                        label: "20%",
                      },
                      {
                        value: 50,
                        label: "50%",
                      },
                      {
                        value: 80,
                        label: "80%",
                      },
                    ]}
                  />
                );
              })}
            </Tab>
          ))}
        </Tabs>
      </CardBody>
      <CardFooter>
        <NextPrevBtns
          questionsMap={answerMap}
          onNext={() => {
            if (selected === Object.keys(answerMap).at(-1)) {
            } else {
              setSelected((e) => {
                return Object.keys(answerMap).at(
                  Object.keys(answerMap).indexOf(e) + 1,
                ) as string;
              });
            }
          }}
          onBack={() => {
            if (selected === Object.keys(answerMap).at(0)) {
            } else {
              setSelected((e) => {
                return Object.keys(answerMap).at(
                  Object.keys(answerMap).indexOf(e) - 1,
                ) as string;
              });
            }
          }}
          isNextNotSubmit={selected !== Object.keys(answerMap).at(-1)}
          enableBack={selected !== Object.keys(answerMap).at(0)}
          isSubmit={false}
        />
      </CardFooter>
    </Card>
  );
}
