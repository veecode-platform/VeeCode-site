"use client";

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Error</h1>
      <Button onClick={reset}>Back</Button>
    </>
  );
}
