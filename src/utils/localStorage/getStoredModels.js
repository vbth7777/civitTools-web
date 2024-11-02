export function getStoredModels() {
  return JSON.parse(localStorage.getItem('models'))
}
