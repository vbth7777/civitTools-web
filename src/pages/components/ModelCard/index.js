import className from 'classnames/bind';
import styles from './ModelCard.module.scss';
import { faStar, faDownload, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Model } from '~/class';
import { getStoredModels, setStoredModels } from '~/utils';

const cx = className.bind(styles);

function ModelCard(
  props
) {
  const {
    name,
    id,
    type,
    authorName,
    authorAvatar,
    rating,
    downloadedCount,
    favoritedCount,
    image,
    isAddable = true
  } = props;
  const convertNumber = (n) => {
    if (n >= 1000000000) {
      return '1B+';
    }
    else if (n >= 1000000) {
      return (n / 1000000).toFixed(1) + 'M';
    }
    else if (n >= 1000) {
      return Math.floor(n / 1000) + 'K';
    }
    return n;
  }
  const handleAddModel = () => {
    let models = getStoredModels() || [];
    for (let i = 0; i < models.length; i++) {
      if (models[i].id === id) {
        return;
      }
    }
    models.push(new Model(props));
    setStoredModels(models);
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('model-card')}>
        <a className={cx('preview')} href={`/models/${id}`} >
          <img src={image} alt='Model image' />
          <p className={cx('type', 'text-cover', 'card-color')}>{type}</p>
        </a>
        <div className={cx('info')}>
          <a className={cx('name')} href={`/models/${id}`}>
            <p>
              {name}
            </p>
          </a>
          <div className={cx('author-box')}>
            <div>
              <img src={authorAvatar} alt='Author avatar' width={30} height={30} />
              <p className={cx('author-name', 'text-cover')}>
                {authorName}
              </p>
            </div>
            {
              isAddable &&
              <button className={cx('btn-add', 'text-cover')} onClick={handleAddModel}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            }
          </div>
          <div className={cx('detail-info')}>
            <div className={cx('rating', 'text-cover')}>
              <ul>
                {[...Array(5)].map((e, i) => (
                  <li key={i}>
                    <i className={cx({ 'yellow-color': i <= rating })}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('download-count', 'text-cover')}>
              <FontAwesomeIcon icon={faDownload} />
              <p>
                {convertNumber(downloadedCount)}
              </p>
            </div>
            <div className={cx('favorite-count', 'text-cover')}>
              <FontAwesomeIcon icon={faHeart} />
              <p>
                {convertNumber(favoritedCount)}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default ModelCard;
