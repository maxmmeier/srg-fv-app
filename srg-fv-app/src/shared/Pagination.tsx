import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Pagination as BootstapPagination } from 'react-bootstrap';

export function Pagination({
  currentPage,
  setCurrentPage,
  maxPage,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
}) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(Array.from({ length: 7 }, (_, i) => currentPage + i - 3));
  }, [currentPage]);

  return (
    <BootstapPagination>
      <BootstapPagination.First
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}></BootstapPagination.First>
      <BootstapPagination.Prev
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }></BootstapPagination.Prev>
      {items[0] > 1 && (
        <BootstapPagination.Ellipsis disabled></BootstapPagination.Ellipsis>
      )}
      {items.map((num) => {
        if (num < 1) {
          return;
        }
        if (num > maxPage) {
          return;
        }
        return (
          <BootstapPagination.Item
            key={num}
            active={num === currentPage}
            onClick={() => setCurrentPage(num)}>
            {num}
          </BootstapPagination.Item>
        );
      })}
      {items[items.length - 1] < maxPage && (
        <BootstapPagination.Ellipsis disabled></BootstapPagination.Ellipsis>
      )}
      <BootstapPagination.Next
        disabled={currentPage === maxPage}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }></BootstapPagination.Next>
      <BootstapPagination.Last
        disabled={currentPage === maxPage}
        onClick={() => setCurrentPage(maxPage)}></BootstapPagination.Last>
    </BootstapPagination>
  );
}
