import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SCROLL_THRESHOLD = 80;

function canScrollDown() {
  const { scrollY, innerHeight } = window;
  const scrollHeight = document.documentElement.scrollHeight;
  return scrollY + innerHeight < scrollHeight - SCROLL_THRESHOLD;
}

const buttonClass =
  "pointer-events-auto rounded-full border border-neutral-700 bg-neutral-950/80 p-2 text-neutral-400 backdrop-blur-md transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-900 hover:text-white";

export default function ScrollHint() {
  const [showDown, setShowDown] = useState(canScrollDown);

  useEffect(() => {
    const update = () => setShowDown(canScrollDown());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!showDown) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <button
        type="button"
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight * 0.75,
            behavior: "smooth",
          })
        }
        className={buttonClass}
        aria-label="Scroll down"
      >
        <ChevronDownIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
