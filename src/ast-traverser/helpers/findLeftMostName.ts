/**
 * Find left most name in a member exression
 *
 * @example
 * weWantThisValue.data = [3, 4, 6];
 * // or
 * weWantThisValue.getElementById("root").innerHTML = 10;
 */
export function findLeftMostName(someObject: any): string | undefined {
  if (someObject.hasOwnProperty('name')) {
    return someObject.name;
  }

  if (someObject.hasOwnProperty('object')) {
    return findLeftMostName(someObject.object);
  }

  if (someObject.hasOwnProperty('callee')) {
    // handles finding `document` in this instance:
    // document.getElementById("load").style.display = "block";
    return findLeftMostName(someObject.callee);
  }

  return;
}
