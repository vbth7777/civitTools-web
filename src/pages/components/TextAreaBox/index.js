import { useState } from 'react';
import className from 'classnames/bind';
import styles from './TextAreaBox.module.scss';
const cx = className.bind(styles);
function TextAreaBox({ children }) {
  const [text, setText] = useState(children);
  return (
    <div className={cx('wrapper')}>
      <textarea
        className={cx('textarea')}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={cx('btn') + ' btn'}
        onClick={() => navigator.clipboard.writeText(text)}
      >Copy</button>
    </div>
  )
}
export default TextAreaBox;
