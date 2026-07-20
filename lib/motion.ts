/**
 * Shared motion helpers for the Apple-glass design system.
 * Uses inline transition props instead of `Variants` to avoid
 * the Framer Motion v12 strict Easing tuple type issues.
 */

/** ease-out cubic — used for all scroll-reveal entrances */
export const EASE_OUT = [0, 0, 0.2, 1] as const;

/** ease-apple — snappy start, soft landing */
export const EASE_APPLE = [0.28, 0.11, 0.32, 1] as const;

/** Standard scroll-reveal transition */
export function revealTransition(delay = 0) {
    return {
        duration: 0.5,
        delay,
        ease: EASE_OUT,
    } as const;
}

/** Staggered reveal transition */
export function staggerTransition(index: number, baseDuration = 0.5, stagger = 0.08) {
    return {
        duration: baseDuration,
        delay: index * stagger,
        ease: EASE_OUT,
    } as const;
}

/** Spring transition for interactive elements (buttons, cards) */
export const SPRING = {
    type: "spring" as const,
    stiffness: 300,
    damping: 28,
    mass: 0.8,
};
