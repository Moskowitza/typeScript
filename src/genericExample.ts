// Generic Types, keep in mind
function loggingIdentity<T>(arg: T): T {
  return arg;
}

console.log(loggingIdentity<number>(5));
