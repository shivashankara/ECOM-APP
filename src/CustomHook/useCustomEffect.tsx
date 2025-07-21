import React, { useEffect } from "react";
import axios from "axios";
import { error } from "console";

export function UseCustomEffect(callback: () => void, dependency: any[]) {
  const source = axios.CancelToken.source();
  useEffect(() => {
    callback();
  }, [dependency]);
  return () => {
    source.cancel('Component unmounted or cleanup');
  };
}
