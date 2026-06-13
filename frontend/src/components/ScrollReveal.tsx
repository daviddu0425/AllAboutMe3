import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

let scrollDirection: "up" | "down" = "down";
let lastScrollY = 0;
let scrollListenerCount = 0;

function trackScrollDirection() {
  const y = window.scrollY;
  if (y > lastScrollY) scrollDirection = "down";
  else if (y < lastScrollY) scrollDirection = "up";
  lastScrollY = y;
}

function subscribeScrollDirection() {
  if (scrollListenerCount === 0) {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", trackScrollDirection, { passive: true });
  }
  scrollListenerCount++;
  return () => {
    scrollListenerCount--;
    if (scrollListenerCount === 0) {
      window.removeEventListener("scroll", trackScrollDirection);
    }
  };
}

export default function ScrollReveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const hasRevealed = useRef(false);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const unsubscribeScroll = subscribeScrollDirection();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const isInitialReveal = !hasRevealed.current;

          if (isInitialReveal || scrollDirection === "down") {
            setInstant(false);
            setVisible(true);
          } else {
            setInstant(true);
            setVisible(true);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setInstant(false));
            });
          }

          hasRevealed.current = true;
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.01, rootMargin: "15% 0px 15% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      unsubscribeScroll();
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${instant ? "scroll-reveal-instant" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible && !instant ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Component>
  );
}
