export default function guardrail(mathFunction) {
  const queue = [];
  const msq = 'Guardrail was processed';
  try {
    const result = mathFunction();
    queue.push(result);
    queue.push(msq);
    return queue;
  } catch (err) {
    queue.push(err);
    queue.push(msq);
    return queue;
  }
}
