export function addMinutesToDateTime(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60 * 1000);
  }

export async function  generateRandomNumber (min:number, max:number) {
    return Math.floor(min + Math.random() * max).toString()
}  