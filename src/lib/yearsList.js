const yearsList = Array.from(
  { length: new Date().getFullYear() - 1999 },
  (_, index) => {
    const year = 2000 + index;
    return { label: year.toString(), value: year.toString() };
  }
);

export default yearsList;
