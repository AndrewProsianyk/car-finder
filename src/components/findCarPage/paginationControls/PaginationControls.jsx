import clsx from "clsx";
import styles from "./PaginationControls.module.scss";

export default function PaginationControls({
  onClick,
  page,
  totalNumberOfPages,
}) {
  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <PaginationButton
          direction="previous"
          page={page}
          onClick={() => onClick("previous")}
        />
      )}
      {page < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          page={page}
          onClick={() => onClick("next")}
        />
      )}
    </div>
  );
}

function PaginationButton({ direction, page, onClick }) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={clsx(styles.paginationBtn, styles[direction])}
    >
      {direction === "previous" ? `Page ${page - 1}` : `Page ${page + 1}`}
    </button>
  );
}
