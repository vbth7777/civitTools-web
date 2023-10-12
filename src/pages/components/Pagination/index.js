import className from 'classnames/bind';
import { memo } from 'react';
import styles from './Pagination.module.scss';
const cx = className.bind(styles);
function Pagination({ page, setPage, pageTotal }) {
  let pages = [];
  const btnPage = (i) => (
    <button disabled={page === i} onClick={() => setPage(i)}>{i}</button >
  )
  const pagesFirst = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr = [...arr, btnPage(i)]
    }
    return arr;
  }
  const pagesLast = (n) => {
    let arr = [];
    for (let i = n; i >= 0; i--) {
      arr = [...arr, btnPage(pageTotal - i)]
    }
    return arr;
  }


  const btnBetween = <button className={cx('btn-between')}>...</button>
  if (pageTotal <= 11) {
    pages = pagesFirst(pageTotal)
  }
  else {
    if (page < 5) {
      pages = [
        pagesFirst(8),
        btnBetween,
        pagesLast(1)
      ]
    }
    else if (page >= pageTotal - 5) {
      pages = [
        pagesFirst(2),
        btnBetween,
        pagesLast(7),
      ]
    }
    else {
      pages = [
        pagesFirst(2),
        btnBetween,
        btnPage(page - 2),
        btnPage(page - 1),
        btnPage(page),
        btnPage(page + 1),
        btnPage(page + 2),
        btnBetween,
        pagesLast(1),
      ];
    }

  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('pagination')}>
        <button
          className={cx('btn-first-page')}
          disabled={page === 1}
          onClick={() => setPage(1)}
        >{'<<'}</button>
        <button
          className={cx('btn-prev-page')}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >{'<'}</button>
        {pages}
        <button
          className={cx('btn-next-page')}
          disabled={page === pageTotal}
          onClick={() => setPage(page + 1)}
        >{'>'}</button>
        <button
          className={cx('btn-last-page')}
          disabled={page === pageTotal}
          onClick={() => setPage(pageTotal)}
        >{'>>'}</button>
      </div>
    </div >
  )
}
export default memo(Pagination);
