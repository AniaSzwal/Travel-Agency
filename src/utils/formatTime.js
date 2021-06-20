// Funkcja ta musi mieć jeden parametr i jeśli przy jej odpaleniu jego wartość nie będzie ustalona, to powinna ona zwrócić null
// Czy jeśli podane coś innego niż liczbę, to funkcja zwróci null?
// Czy jeśli podano liczbę mniejszą niż zero, to funkcja zwróci null?

export const formatTime = (arg) => {
  if (!arg || typeof (arg) !== 'number' || arg < 0) {
    return null;
  }

  //Czy jeśli podano poprawny argument, to funkcja zwróci dobry czas w formacie hh:mm:ss?

  let ss = Math.floor(arg % 60).toString();
  let mm = Math.floor((arg / 60) % 60).toString();
  let hh = Math.floor(arg / 3600).toString();

  if (ss.length <= 1 || mm.length <= 1 || hh.length <= 1) {
    return (hh.padStart(2, '0') + mm.padStart(2, '0') + ss.padStart(2, '0'));
  } else {
    return (hh + ':' + mm + ':' + ss);
  }
};
