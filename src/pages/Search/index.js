import { useLocation } from 'react-router-dom'
import DisplayModels from '../components/DisplayModels';
import { useQueryParams } from '~/hooks'

function Search() {
  const location = useLocation()
  const queryParam = useQueryParams('query');
  const query = location?.state?.query || queryParam;
  return (
    <DisplayModels query={query} />
  )
}
export default Search;
