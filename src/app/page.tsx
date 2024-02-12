"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function onSubmit() {
    const data = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    let res = await data.json();
    if (data.status === 200) {
      router.push(`/tbh/${res.user.id}`);
    } else {
      setError(res.error || "");
    }
  }
  return (
    <Card
      isBlurred
      className="max-w-[400px] my-auto border mx-auto shadow-xl border-foreground-50 dark:bg-foreground-50/50"
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
      <CardBody>
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Input
            type="text"
            label="Name"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && (
            <Card className="bg-danger-100">
              <CardBody>{error}</CardBody>
            </Card>
          )}
          <Button
            type="submit"
            variant="bordered"
            color="secondary"
            className="max-w-7"
          >
            Create
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
