export default function guardrail(mathFunction) {
  const queue = [];
  const msq = 'Guardrail was processed';
  const result = mathFunction();
  queue.push(result);
  queue.push(msq);
  return queue;
}
