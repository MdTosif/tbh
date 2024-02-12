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
import React from "react";

export default function Home() {
  const [selected, setSelected] = React.useState("Date");
  const questionsMap = {
    Date: ["Would like to meet", "would marry", "would date", "would kill"],
    Party: ["Would like to meet", "would date", "would kill"],
    Friend: [
      "Would like to meet",
      "would marry",
      "would date",
      "would kill",
      "would do crimes with",
    ],
  };
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
          {Object.entries(questionsMap).map(([tabKey, questions], idx) => (
            <Tab key={tabKey + idx} title={tabKey}>
              {questions.map((e, idx) => (
                <Slider
                  className="text-3xl"
                  key={tabKey + idx}
                  label={e}
                  color="foreground"
                  size="md"
                  step={10}
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
                  defaultValue={20}
                />
              ))}
            </Tab>
          ))}
        </Tabs>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant="ghost" color="secondary">
            Submit
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
