export function findLeftMostName(someObject: any): string | null {
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

  return null;
}
