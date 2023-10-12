import { useState } from 'react';
import className from 'classnames/bind';
import styles from './DropdownBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);
function DropdownBox({ options, onChange }) {
  const [selected, setSelected] = useState(options[0]);
  const [active, setActive] = useState(false);
  const handleChange = (option) => {
    onChange(option)
    setSelected(option);
    setActive(false);
  }
  return (
    <div className={cx('wrapper')}>
      <div className='prevent-select'>
        <div className={cx('dropdown-select')} onClick={() => setActive(!active)}>
          <span>{selected}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {active &&
          <div className={cx('dropdown-list')}>
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={cx('dropdown-list-item')}
                  onClick={() => handleChange(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
export default DropdownBox;
