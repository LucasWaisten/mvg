"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { LoadingSpinner } from "./LoadingSpinner";

export function LoadingWrapper() {
  const { isLoading } = useLoading();
  
  return <LoadingSpinner isLoading={isLoading} />;
}
