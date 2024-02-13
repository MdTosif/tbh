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

export default function TBH({
  questionsMap,
  userId,
}: {
  questionsMap: Record<string, { question: string; id: number }[]>;
  userId: string;
}) {
  const [selected, setSelected] = React.useState(Object.keys(questionsMap)[0]);
  const [formData, setFormData] = React.useState<Record<number, number>>({});
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
          }}
        >
          <Tabs
            variant="bordered"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as string)}
          >
            {Object.entries(questionsMap).map(([tabKey, questions], idx) => (
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
                      value={formData[question.id] || 0}
                      onChange={(e) =>
                        setFormData((state) => ({
                          ...state,
                          [question.id]: e as number,
                        }))
                      }
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
        </form>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="ghost"
            color="secondary"
            onClick={(e) => {
              if (selected === Object.keys(questionsMap).at(-1)) {
                fetch("/api/answers", {
                  body: JSON.stringify({ userId, formData }),
                  method: "POST",
                }).then((res) => {
                  res.status == 200 && router.push("/success");
                });
              } else {
                setSelected((e) => {
                  return Object.keys(questionsMap).at(
                    Object.keys(questionsMap).indexOf(e) + 1,
                  ) as string;
                });
              }
            }}
          >
            {selected === Object.keys(questionsMap).at(-1) ? "Submit" : "Next"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
