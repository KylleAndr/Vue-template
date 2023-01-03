export const toObjects = (data) => {
  const titles = data.values[0].map((title) => {
    return title.split(" ").join("");
  });
  return data.values.slice(1).map((row, i) => {
    return Object.fromEntries(row.map((value, i) => [titles[i], value]));
  });
};

export const useSheet = (
  id,
  sheetName = "Sheet1",
  transform = (data) => data.values
) => {
  const key = "AIzaSyAxP7q5yFR1ZikJTVr_gcyECYgbJCEghqc";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheetName}?alt=json&key=${key}&majorDimension=ROWS`;
  return useFetch(url, {
    transform,
    key: url,
  });
};
