export default function cleanSet(set, startString) {
  let str = '';
  if (startString) {
    set.forEach((v) => {
      const len = startString.length;
      if (v) {
        const sliced = v.slice(0, len);
        if (sliced === startString) {
          str += `${v.slice(len)}-`;
        }
       }
    });
    return str.slice(0, -1);
  } else {
    return str;
  }
}
