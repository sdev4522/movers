"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

interface Stat {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  {
    end: 5000,
    suffix: "+",
    label: "Moves Completed",
    sublabel: "and counting",
  },
  { end: 8, suffix: "+", label: "Years in Bangalore", sublabel: "since 2016" },
  {
    end: 50,
    suffix: "+",
    label: "Cities Served",
    sublabel: "across South India",
  },
  {
    end: 4.9,
    suffix: "★",
    prefix: "",
    label: "Average Rating",
    sublabel: "Google & JustDial",
  },
];

function useCountUp(end: number, duration = 1400, started = false) {
  const [count, setCount] = useState(0);
  const isDecimal = end % 1 !== 0;

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, end, duration, isDecimal]);

  return count;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const count = useCountUp(stat.end, 1400, inView);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
    >
      <span
        className="text-[42px] md:text-[52px] font-bold leading-none tracking-tight stat-number"
        style={{ color: "#1D1D1F" }}
      >
        {stat.prefix ?? ""}
        {count}
        {stat.suffix}
      </span>
      <span
        className="mt-2 text-[17px] font-semibold"
        style={{ color: "#1D1D1F" }}
      >
        {stat.label}
      </span>
      <span className="mt-0.5 text-[13px]" style={{ color: "#86868B" }}>
        {stat.sublabel}
      </span>
    </motion.div>
  );
}
type Props = {
  className?: string;
};
export default function TrustBarSection({ className }: Props) {
  return (
    <section
      id="trust"
      style={{ background: "#FFFFFF" }}
      className={className || "py-16 md:py-20"}
    >
      <div className="container">
        {/* Glass strip */}
        <div
          className="glass"
          style={{
            borderRadius: "28px",
            padding: "40px 24px",
            background: "rgba(255,255,255,0.65)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
