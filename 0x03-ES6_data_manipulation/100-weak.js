export const weakMap = new WeakMap();

export function queryAPI(endp) {
  if (!weakMap.has(endp)) {
    weakMap.set(endp, 0);
  }
  if (weakMap.get(endp) === 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endp, weakMap.get(endp) + 1);
  }
}
