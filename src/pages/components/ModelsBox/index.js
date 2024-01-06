import { useState, useRef } from 'react';
import className from 'classnames/bind';
import styles from './ModelsBox.module.scss';
import ModelCard from '../ModelCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../Pagination';
const cx = className.bind(styles);
function ModelsBox({ models, setModels }) {
  const [page, setPage] = useState(1);
  models = models || [];
  const modelsPerPage = 4;
  const maxPage = Math.ceil(models.length / modelsPerPage);
  const modelsOnPage = models.slice((page - 1) * modelsPerPage, page * modelsPerPage);

  return (
    <div className={cx('wrapper')}>
      <Pagination page={page} setPage={setPage} pageTotal={maxPage} />
      <ul className={cx('models-box')}>
        {modelsOnPage.map((model, index) => (
          <li key={index} className={cx('model-card')}>
            <button className={cx('close-btn')} onClick={() => {
              setModels(models.filter((_, i) => i !== index));
            }}>
              <FontAwesomeIcon icon={faClose} />
            </button>
            <ModelCard {...model} isAddable={false} />
          </li>
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} pageTotal={maxPage} />
    </div>
  )
}
export default ModelsBox;
