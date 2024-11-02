import { memo, useEffect, useState } from 'react';
import className from 'classnames/bind';
import { getModels } from '~/api';
import styles from './DisplayModels.module.scss';
import ModelCard from '~/pages/components/ModelCard';
import Pagination from '~/pages/components/Pagination';
const cx = className.bind(styles);
function DisplayModels(props) {
  const [models, setModels] = useState([]);
  const [page, setPage] = useState(props.page || 1);
  const [loading, setLoading] = useState(false);
  const [pageTotal, setPageTotal] = useState(0);
  useEffect(() => {
    setLoading(true);
    getModels({ ...props, page }).then(dataModels => {
      setLoading(false);
      setPageTotal(dataModels.metadata.totalPages);
      setModels(dataModels.items);
    });
  }, [page, props])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Pagination page={page} setPage={setPage} pageTotal={pageTotal} />
        {loading && <h1 className={cx('title')} style={{ /* display: loading ? 'block' : 'none',  */textAlign: 'center', padding: '20px' }}>Loading...</h1>}
        {loading ||
          <ul className={cx('models')} /* style={loading ? { display: 'none' } : null} */>
            {models.map((model) => (
              <li key={model.id}>
                <ModelCard {...model} />
              </li>
            ))}
          </ul>}
        <Pagination page={page} setPage={setPage} pageTotal={pageTotal} />
      </div>
    </div>
  )
}
export default memo(DisplayModels);
