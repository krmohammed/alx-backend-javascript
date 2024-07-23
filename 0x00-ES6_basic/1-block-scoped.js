export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    const task2 = false;
    task = task || task2;
  }

  return [task, task2];
}
