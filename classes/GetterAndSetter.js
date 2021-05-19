class Family {
  constructor (father, mother) {
    this._father = father;
    this._mother = mother;
  };

  get father () {
    return this._father
  };

  get mother () {
    return this._mother;
  };

  set father (str) {
    this._father = str;
  };

  set mother (str) {
    this._mother = str
  };
};

let family = new Family('Paulo', 'Admira');

console.log(family.father);
console.log(family.mother);

family.father = 'Mario';
family.mother = 'Elineth';

console.log(family.father);
console.log(family.mother);
