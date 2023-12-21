import ReactPaginate from 'react-paginate';
import Table from './Table';
import { useEffect, useState } from 'react';

const PaginationItems = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://erp.seopage1.net/api/leads`)
        .then(res=>res.json())
        .then(data=>setItems(data.data))
    },[]);
    console.log(items);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
    return (
        <div>
            <>
      <Table currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >>"
        onPageChange={handlePageClick}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< previous"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
        </div>
    );
};

export default PaginationItems;