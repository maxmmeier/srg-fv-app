import { Dispatch, SetStateAction } from 'react';
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
      {Array.from({ length: maxPage }, (_, i) => i + 1).map((num) => {
        return (
          <BootstapPagination.Item
            key={num}
            active={num === currentPage}
            onClick={() => setCurrentPage(num)}>
            {num}
          </BootstapPagination.Item>
        );
      })}
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
