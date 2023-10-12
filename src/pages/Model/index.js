import { useParams, useRef } from 'react-router-dom';
import { getInformationModel } from '~/api';
import className from 'classnames/bind';
import styles from './Model.module.scss';
const cx = className.bind(styles);
function Model() {
  const params = useParams();
  const id = params.slug;
  const modelRef = useRef(getInformationModel(id));
  const model = modelRef.current;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('model-detail')}>
        <div className={cx('model-name')}>
          <p>{model.name}</p>
        </div>
        <div className={cx('model-imgs')} >

        </div>
        <div className={cx('model-desc')}>
          {model.description}
        </div>
        <div className={cx('model-download')}>
          "https://civitai.com/api/download/models/{model.id}"
        </div>
      </div>
      {/* posts */}
    </div>
  )
}
export default Model;
