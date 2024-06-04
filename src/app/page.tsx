import Card from "@/components/card";
import { data } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 px-8 py-24">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <div className="space-y-1">
          <p className="text-3xl font-extralight text-very-dark-blue lg:text-4xl">
            Reliable, efficient delivery
          </p>
          <p className="text-3xl font-semibold text-very-dark-blue lg:text-4xl">
            Powered by Technology
          </p>
        </div>

        <div className="lg:w-[580px]">
          <p className="text-lg text-grayish-blue lg:text-base">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </div>

      <div className="grid gap-8 pt-14 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            color={data.color}
            icon={data.icon}
          />
        ))}
      </div>
    </main>
  );
}
