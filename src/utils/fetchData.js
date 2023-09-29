export async function fetchData(url, option) {
  const res = await fetch(url, option);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
