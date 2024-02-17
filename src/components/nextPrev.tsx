import { ButtonGroup, Button } from "@nextui-org/react";
import router from "next/router";

export default function NextPrevBtns({
  questionsMap,
  onNext,
  isNextNotSubmit,
  onBack,
  enableBack,
  isSubmit,
}: {
  questionsMap: Record<string, any>;
  onNext: () => void;
  onBack: () => void;
  isNextNotSubmit: boolean;
  enableBack: boolean;
  isSubmit: boolean;
}) {
  return (
    <ButtonGroup>
      {enableBack && (
        <Button variant="ghost" color="secondary" onClick={onBack}>
          {"Back"}
        </Button>
      )}
      {(isSubmit || isNextNotSubmit) && (
        <Button variant="ghost" color="secondary" onClick={onNext}>
          {isNextNotSubmit ? "Next" : "Submit"}
        </Button>
      )}
    </ButtonGroup>
  );
}
