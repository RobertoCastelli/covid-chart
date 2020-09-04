const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};
