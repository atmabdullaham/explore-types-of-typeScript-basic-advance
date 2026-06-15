// interface -> generic

interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    modal: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}
type EmilabWatch = {
  brand: string;
  model: string;
  display: string;
};

const poorDeveloper: Developer<EmilabWatch, null> = {
  name: "Sabbit",
  computer: {
    brand: "ASUS",
    modal: "X-P",
    releaseYear: 2012,
  },
  smartWatch: {
    brand: "Emilab",
    model: "kw66",
    display: "OLED",
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
}
interface YamanaBike {
  model: string;
  enginCapacity: string;
}

const richDeveloper: Developer<AppleWatch, YamanaBike> = {
  name: "Sabbit",
  computer: {
    brand: "XP",
    modal: "X-Y",
    releaseYear: 2012,
  },
  smartWatch: {
    brand: "Apple Watch",
    model: "kw66",
    heartTrack: true,
  },
  bike: {
    model: "Yamaha",
    enginCapacity: "100CC",
  },
};
