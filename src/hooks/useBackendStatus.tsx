import { health } from "@/resources/public.service";
import { useState, useEffect } from "react";

type UseBackendStatus = {
  isBackendRunning: boolean;
  error: string | null;
};

const useBackendStatus = (): UseBackendStatus => {
  const [isBackendRunning, setIsBackendRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await health();
        if (response.success) {
          const data = await response.data;
          if (data) {
            setIsBackendRunning(true);
          } else {
            setIsBackendRunning(false);
          }
        } else {
          setIsBackendRunning(false);
          setError(`Unexpected response: ${response.message}`);
        }
      } catch (err) {
        setIsBackendRunning(false);
        setError((err as Error).message);
      }
    };

    checkBackend();
  }, []);

  return { isBackendRunning, error };
};

export default useBackendStatus;
