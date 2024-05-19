/**
 * Delays the execution of the callback function passed as argument.
 */

export function delay(callback, delay = 300) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(callback());
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}
