import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Card({
  title,
  description,
  color,
  icon,
}: {
  title: string;
  description: string;
  color: string;
  icon: string;
}) {
  return (
    <div
      className={cn(
        "relative max-w-96 space-y-2 overflow-hidden rounded-2xl bg-white p-6 shadow-xl",
        {
          "lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-1 lg:translate-y-1/2": title === "Supervisor",
          "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1": title === "Team Builder",
          "lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2": title === "Karma",
          "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1 lg:translate-y-1/2": title === "Calculator",
        },
      )}
    >
      <div className={cn("absolute left-0 top-0 h-[3px] w-full", color)} />
      <p className="text-xl font-semibold text-very-dark-blue">{title}</p>
      <p className="text-grayish-blue">{description}</p>
      <div className="flex justify-end pt-8">
        <Image src={`./images/${icon}`} alt={title} width={64} height={64} />
      </div>
    </div>
  );
}
