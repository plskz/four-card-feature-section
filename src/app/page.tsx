import Image from "next/image";
import { data } from "./data";
import Card from "@/component/card";
import AllCards from "@/component/card";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 px-8 py-24">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <div className="space-y-1">
          <p className="text-very-dark-blue text-3xl font-extralight">
            Reliable, efficient delivery
          </p>
          <p className="text-very-dark-blue text-3xl font-semibold">
            Powered by Technology
          </p>
        </div>

        <p className="text-grayish-blue text-lg">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative max-w-96 space-y-2 overflow-hidden rounded-2xl bg-white p-6 shadow-md">
          <div className="bg-cyan absolute left-0 top-0 h-[3px] w-full" />
          <p className="text-very-dark-blue text-xl font-semibold">
            Supervisor
          </p>
          <p className="text-grayish-blue">
            Monitors activity to identify project roadblocks
          </p>
          <div className="--bg-red flex justify-end pt-8">
            <Image
              src={"./images/icon-supervisor.svg"}
              alt="supervisor"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="relative max-w-96 space-y-2 overflow-hidden rounded-2xl bg-white p-6 shadow-md">
          <div className="bg-cyan absolute left-0 top-0 h-[3px] w-full" />
          <p className="text-very-dark-blue text-xl font-semibold">
            Supervisor
          </p>
          <p className="text-grayish-blue">
            Monitors activity to identify project roadblocks
          </p>
          <div className="--bg-red flex justify-end pt-8">
            <Image
              src={"./images/icon-supervisor.svg"}
              alt="supervisor"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="relative max-w-96 space-y-2 overflow-hidden rounded-2xl bg-white p-6 shadow-md">
          <div className="bg-cyan absolute left-0 top-0 h-[3px] w-full" />
          <p className="text-very-dark-blue text-xl font-semibold">
            Supervisor
          </p>
          <p className="text-grayish-blue">
            Monitors activity to identify project roadblocks
          </p>
          <div className="--bg-red flex justify-end pt-8">
            <Image
              src={"./images/icon-supervisor.svg"}
              alt="supervisor"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="relative max-w-96 space-y-2 overflow-hidden rounded-2xl bg-white p-6 shadow-md">
          <div className="bg-cyan absolute left-0 top-0 h-[3px] w-full" />
          <p className="text-very-dark-blue text-xl font-semibold">
            Supervisor
          </p>
          <p className="text-grayish-blue">
            Monitors activity to identify project roadblocks
          </p>
          <div className="--bg-red flex justify-end pt-8">
            <Image
              src={"./images/icon-supervisor.svg"}
              alt="supervisor"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
