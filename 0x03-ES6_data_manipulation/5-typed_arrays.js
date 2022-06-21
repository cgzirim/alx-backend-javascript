export default function createInt8TypeArray(length, position, value) {
  /* Returns a new ArrayBuffer. */
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  if (position >= length) throw new Error('Position outside range');
  dv.setInt8(position, value);

  return dv;
}
