export function setStoredModels(models) {
  localStorage.setItem('models', JSON.stringify(models));
}
