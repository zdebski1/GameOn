export function addMinutesToDateTime(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export async function generateRandomNumber(min: number, max: number) {
  return Math.floor(min + Math.random() * max).toString();
}

export async function errorMessage(
  error: any,
  errorCodes: Array<number>,
  reply: any
) {
  if (error instanceof Error) {
    const statusCode = (error as any).statusCode;

    if (errorCodes.includes(statusCode)) {
      return reply.code(statusCode).send({ message: error.message });
    }

    return reply.code(500).send({ message: "Internal Server Error" });
  }
}
