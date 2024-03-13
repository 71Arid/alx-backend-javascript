import cleanSet from './8-clean_set';

const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
const cs = cleanSet(set, []);
console.log(cs);
