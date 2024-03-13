export const weakMap = new WeakMap();

export function queryAPI(endp) {
  if (weakMap.has(endp) && (weakMap.get(endp) < 5)) {
    weakMap.set(endp, weakMap.get(endp) + 1);
  } else if (weakMap.get(endp) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endp, 1);
  }
}
