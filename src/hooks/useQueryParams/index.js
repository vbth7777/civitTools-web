function useQueryParams(query) {
  if (query) {
    return new URLSearchParams(window.location.search).get(query)
  }
  return new URLSearchParams(window.location.search)
}
export default useQueryParams;
