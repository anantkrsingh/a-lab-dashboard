function effResM(r1, rm, r2) {
  console.log("r1" + r1);
  return (r1 * rm + rm * r2 + r2 * r1) / (rm + r2);
}
export { effResM };
function findCurrThruR(vR, R, rm, r) {
  return vR / effResM(R, rm, r);
}
export { findCurrThruR };
function findCompCurrThruRM(v, R, rm, r) {
  return (findCurrThruR(v, R, rm, r) * r) / (r + rm);
}

export function findNetCurrThruRM(v1, v2, r1, rm, r2) {
  return (
    findCompCurrThruRM(v1, r1, rm, r2) + findCompCurrThruRM(v2, r2, rm, r1)
  );
}
