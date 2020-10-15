import React, { useState, useEffect } from 'react';
import { Pager } from 'react-bootstrap';

const Pagination = ({ items, initialPage = 1, pageSize = 10, onChangePage }) => {

    const [pager, setPager] = useState({});

    useEffect(() => {
        if (items && items.length) setPage(initialPage);
    }, []);

    useEffect(() => {
        setPage(initialPage);
    }, [items]);

    const setPage = page => {
        if (page < 1 || page > pager.totalPages) return;

        const newPager = getPager(items.length, page, pageSize);

        setPager(newPager);

        onChangePage(items.slice(newPager.startIndex, newPager.endIndex + 1));
    };

    const getPager = (totalItems, currentPage = 1, pageSize = 10) => {
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }

    if (!pager.pages || pager.pages.length <= 1) return null;

    return (
        <Pager>
            <Pager.Item href="#" onClick={() => setPage(1)} disabled={pager.currentPage === 1}>First</Pager.Item>
            <Pager.Item href="#" onClick={() => setPage(pager.currentPage - 1)} disabled={pager.currentPage === 1}>Previous</Pager.Item>
            {pager.pages.map((page, index) => (
                <Pager.Item key={index} href="#" onClick={() => setPage(page)} disabled={pager.currentPage === page}>{page}</Pager.Item>
            ))}
            <Pager.Item href="#" onClick={() => setPage(pager.currentPage + 1)} disabled={pager.currentPage === pager.totalPages}>Next</Pager.Item>
            <Pager.Item href="#" onClick={() => setPage(pager.totalPages)} disabled={pager.currentPage === pager.totalPages}>Last</Pager.Item>
        </Pager>
    );
};

export default Pagination;
