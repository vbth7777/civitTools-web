import className from 'classnames/bind';
import styles from './pushNotification.module.scss';
const cx = className.bind(styles);
function pushNotification({ title, content }) {
  return (
    <div className={cx('wrapper')}>

      <div className={cx('notification')}>
        <div className={cx('title')}>
          {title}
        </div>
        <div className={cx('content')}>
          {content}
        </div>
      </div>
    </div>
  )
}
export default pushNotification;
