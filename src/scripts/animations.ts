const dalay = 0.3;
const duration = 1.5;
const bounce = 0.4;

export const downToUp = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visiable: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * dalay,
      duration: duration,
      type: "spring",
      bounce: bounce,
    },
  }),
};

export const leftToRight = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visiable: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * dalay,
      duration: duration,
      type: "spring",
      bounce: bounce,
    },
  }),
};

export const rightToLeft = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visiable: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * dalay,
      duration: duration,
      type: "spring",
      bounce: bounce,
    },
  }),
};
