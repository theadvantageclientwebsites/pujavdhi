import {
  RiHandHeartLine,
  RiCalendarCheckLine,
  RiSparklingLine,
  RiCameraLine,
} from "react-icons/ri";
import ProcessSteps, { type ProcessStep } from "@/components/ui/ProcessSteps";

const STEPS: ProcessStep[] = [
  {
    icon: <RiHandHeartLine />,
    title: "Choose Your Puja",
    description: "Select the Pooja or service you want.",
  },
  {
    icon: <RiCalendarCheckLine />,
    title: "Book & Pay",
    description: "Choose your preferred date, time and payment.",
  },
  {
    icon: <RiSparklingLine />,
    title: "Puja Performed",
    description: "Our Pandit arrives and performs the Pooja.",
  },
  {
    icon: <RiCameraLine />,
    title: "Get Proof",
    description: "Share necessary details for the Pooja.",
  },
];

export default function ProcessSection() {
  return (
    <ProcessSteps
      eyebrow="Our Process"
      heading={
        <>
          Simple Steps to Book{" "}
          <span className="text-[#FF6A00]">Your Pooja</span>
        </>
      }
      steps={STEPS}
    />
  );
}
