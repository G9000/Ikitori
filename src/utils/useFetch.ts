export default async function useFetch(url: string, config: any) {
  try {
    const result = await fetch(url, config);
    const data = await result.json();
    if (result.status === 200) {
      return { response: data, error: null };
    } else {
      return { response: null, error: data.message };
    }
  } catch (err) {
    throw new Error("Something went wrong");
  } finally {
    console.log("data fetched");
  }
}
