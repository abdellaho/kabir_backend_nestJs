export function mapToDateTimeBackEnd(date1: Date): Date {
  let dateString = date1 + '';
  const dateToMap: Date = new Date(dateString);
  // Extract individual components of the Date object
  const year = dateToMap.getFullYear();
  const month = String(dateToMap.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(dateToMap.getDate()).padStart(2, '0');
  const hours = String(dateToMap.getHours()).padStart(2, '0');
  const minutes = String(dateToMap.getMinutes()).padStart(2, '0');
  const seconds = String(dateToMap.getSeconds()).padStart(2, '0');

  // Construct the LocalDateTime string in the format: 'YYYY-MM-DDTHH:mm:ss'
  let date: Date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);

  const timezoneOffset = -dateToMap.getTimezoneOffset();
  const adjustedDate = new Date(date.getTime() + (timezoneOffset * 60 * 1000));

  return adjustedDate;
}