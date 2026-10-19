export function getRegistrationError(value: string): string {
  const registration = value.replace(/\s/g, "");
  if (!registration) return "Please enter your vehicle registration number.";
  if (registration.length > 7) {
    return "Vehicle registration must be no more than 7 characters, excluding spaces.";
  }
  if (!/^[a-z0-9]+$/i.test(registration)) {
    return "Vehicle registration can only contain letters and numbers.";
  }
  return "";
}
