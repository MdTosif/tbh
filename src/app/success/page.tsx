import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="col-span-12 sm:col-span-4 w-96 mx-auto ">
      <CardHeader className="absolute z-10 top-1 flex-col mx-auto ">
        <h3 className="text-secondary font-medium text-3xl shadow">
          Response send successfully !!
        </h3>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur-[2px]"
        src="/success.jpg"
      />
      <CardFooter className="absolute  bottom-0 z-10 justify-between">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <Link href="/">
            <Button
              className="text-2xl p-7"
              color="default"
              variant="bordered"
              radius="full"
              size="lg"
            >
              Create you own
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
