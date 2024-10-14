export default async function useFetchProduct(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}