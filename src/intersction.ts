export { };

type Pitcher1 = {
  throwingSpeed: number
};

type Batter1 = {
  battingAverage: number
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 150
};

const Ochiai: Pitcher1 = {
  throwingSpeed: 154
};

type TowWayPlayer = Pitcher1 & Batter1;

const Ootani: TowWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
};


// type TowWayPlayer = {
//   throwingSpeed: number,
//   battingAverage: number
// };






