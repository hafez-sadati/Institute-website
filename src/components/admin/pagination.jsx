import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);

    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
            <div className="paginate ">
                <ul className="paging-t pagination" id="Pagination" runat="server">
                    {pages.map(page => (
                        <li
                            className={
                                page === currentPage
                                    ? 'page-item active'
                                    : 'page-item'
                            }
                            key={page}
                        >
                            <a                          
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
             </div>
    );
};
 
export default Pagination;
