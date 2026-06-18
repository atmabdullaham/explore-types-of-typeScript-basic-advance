// mapped types

const arrofnumber: number[] = [1, 3, 5];

const arrofstring: string[] = ["1", "3", "5"];

const arrofstring1: string[] = arrofnumber.map((number) => number.toString());

//  type Area
type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  height: string;
  width: string;
};

// we will change it through map type dynamically

type AreaString1 = {
  [key in keyof AreaNumber]: string;
};
