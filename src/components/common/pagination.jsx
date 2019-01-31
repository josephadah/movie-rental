import React from "react";

const Pagination = props => {
    const {currentPage, pageSize, totalItems} = props;
    let pageCount = Math.ceil(totalItems / pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1);
    }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        { pages.map(page => {
            return (
            <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.onClick(page)} >
                    {page}
                </a>
            </li>
            )
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
