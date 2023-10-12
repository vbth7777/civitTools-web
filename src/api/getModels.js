import { apiEndpoint } from './config'
import { getInformationModel } from './getInformationModel'
import { HIGHEST_RATED } from '~/constants/sortBy.js'

export function getModels({ query, type, sortBy, page, limit }) {
  const tempApi = new URL(apiEndpoint)
  if (query)
    tempApi.searchParams.set('query', query) //searchTypes
  if (type)
    tempApi.searchParams.set('types', type)
  tempApi.searchParams.set('sort', sortBy || HIGHEST_RATED) //sortBy
  tempApi.searchParams.set('page', page || 1)
  tempApi.searchParams.set('limit', limit || 12)
  return fetch(tempApi).then(res => res.json()).then(data => {
    const items = data.items;
    const metadata = data.metadata;
    let results = { requestedApi: tempApi.toString(), metadata, items: [] }
    for (let item of items) {
      results.items.push(getInformationModel(item))
    }
    return results;
  })
}
