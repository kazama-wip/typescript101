export { };

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

type Profile = {
  name: Mojiretsu,
  age: number
};
const example1: Profile = {
  name: 'shin',
  age: 20
};
type Profile2 = typeof example1;
