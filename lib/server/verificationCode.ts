const ALPHANUMERIC = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomChunk(length: number): string {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * ALPHANUMERIC.length);
    result += ALPHANUMERIC[index];
  }
  return result;
}

export function generateVerificationCode(now: Date = new Date()): string {
  const year = now.getUTCFullYear();
  return `GK-${year}-${randomChunk(5)}`;
}
