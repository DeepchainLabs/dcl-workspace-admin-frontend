import { useEffect } from "react";

export function useOutsideClick(
  enabled: boolean,
  elementRef: React.MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) {
  useEffect(() => {
    if (!enabled) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [enabled, elementRef, callback]);

  useEffect(() => {
    if (!enabled) return;
  }, [enabled]);
}
