import { apiEndpoint } from './config';
import { getInformationModel } from './getInformationModel';
export function getModel(id) {
  return fetch(`${apiEndpoint}/${id}`).then(res => res.json()).then(data => {
    const item = data.item;
    let result = getInformationModel(item);
    return result;
  })
}
