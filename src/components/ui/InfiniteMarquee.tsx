"use client";

import { useEffect, useRef } from "react";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 1,
  className = "",
}: InfiniteMarqueeProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let animationFrameId: number;
    let currentOffset = 0;
    let contentWidth = 0;

    const measureContent = () => {
      const children = Array.from(content.children);
      const halfLength = Math.floor(children.length / 2);

      let totalWidth = 0;
      for (let i = 0; i < halfLength; i++) {
        const child = children[i] as HTMLElement;
        totalWidth += child.offsetWidth;
      }

      const gapValue = 32;
      totalWidth += gapValue * (halfLength - 1);
      contentWidth = totalWidth + gapValue;
    };

    setTimeout(measureContent, 100);

    const animate = () => {
      currentOffset -= speed;

      if (Math.abs(currentOffset) >= contentWidth) {
        currentOffset = 0;
      }

      content.style.transform = `translateX(${currentOffset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={contentRef}
        className="flex gap-8"
        style={{ willChange: "transform" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
