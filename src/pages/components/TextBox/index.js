import className from 'classnames/bind';
import styles from './TextBox.module.scss';
const cx = className.bind(styles);
function TextBox({ input, setInput, placeholder }) {
  return (
    <div>
      <input
        className={cx('text-box')}
        type='text'
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}
export default TextBox;
