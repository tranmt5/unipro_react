// ----------------------------------------------------------------------

const DISTANCE = 100;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const TRANSITION_ENTER_MEDIUM = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT_MEDIUM = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const TRANSITION_ENTER_SLOW = {
  duration: 1.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const TRANSITION_EXIT_SLOW = {
  duration: 1.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const varFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: TRANSITION_ENTER },
  exit: { opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInUp = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInLeft = {
  initial: { x: -DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { x: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInDownDesktopSmDown = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 50, opacity: 1, transition: TRANSITION_ENTER_MEDIUM },
  exit: { y: 0, opacity: 0, transition: TRANSITION_EXIT_MEDIUM }
};

export const varFadeInDownDesktopSmDownSlowly = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 50, opacity: 1, transition: TRANSITION_ENTER_SLOW },
  exit: { y: 0, opacity: 0, transition: TRANSITION_EXIT_SLOW }
};

export const varFadeInDownDesktopMdDown = {
  initial: { y: -500, opacity: 0 },
  animate: { y: -400, opacity: 1, transition: TRANSITION_ENTER_MEDIUM },
  exit: { y: -500, opacity: 0, transition: TRANSITION_EXIT_MEDIUM }
};

export const varFadeInDownDesktopMdDownSlowly = {
  initial: { y: -500, opacity: 0 },
  animate: { y: -400, opacity: 1, transition: TRANSITION_ENTER_SLOW },
  exit: { y: -500, opacity: 0, transition: TRANSITION_EXIT_SLOW }
};

export const varFadeInDownDesktopMdUp = {
  initial: { y: -600, opacity: 0 },
  animate: { y: -500, opacity: 1, transition: TRANSITION_ENTER_MEDIUM },
  exit: { y: -600, opacity: 0, transition: TRANSITION_EXIT_MEDIUM }
};

export const varFadeInDownDesktopMdUpSlowly = {
  initial: { y: -600, opacity: 0 },
  animate: { y: -500, opacity: 1, transition: TRANSITION_ENTER_SLOW },
  exit: { y: -600, opacity: 0, transition: TRANSITION_EXIT_SLOW }
};

export const varFadeInUpExpanded = {
  initial: { y: 0, opacity: 0 },
  animate: { y: -200, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: 0, opacity: 0, transition: TRANSITION_EXIT }
};

export const varFadeInUpCollapsed = {
  initial: { y: 0, opacity: 0 },
  animate: { y: -50, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: 0, opacity: 0, transition: TRANSITION_EXIT }
};
