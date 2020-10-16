package org.softwire.training.utils;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PagerTest {

    Pager pager;

    @BeforeEach
    void setUp() {
        pager = new Pager(100, 2, 10);
    }

    @Test
    void getTotalItems() {
        int totalItems = pager.getTotalItems();

        assertEquals(100, totalItems);
    }

    @Test
    void getCurrentPage() {
        int currentPage = pager.getCurrentPage();

        assertEquals(2, currentPage);
    }

    @Test
    void getPageSize() {
        int pageSize = pager.getPageSize();

        assertEquals(10, pageSize);
    }

    @Test
    void calculatesNumOfPages() {
        int totalPages = pager.getTotalPages();

        assertEquals(10, totalPages);
    }

    @Test
    void calculatesStartPage() {
        int startPage = pager.getStartPage();

        assertEquals(1, startPage);
    }

    @Test
    void calculatesEndPage() {
        int endPage = pager.getEndPage();

        assertEquals(10, endPage);
    }

    @Test
    void startPageIsFivePagesBeforeCurrentPageAfterPageFive() {
        pager = new Pager(200, 7, 10);

        int startPage = pager.getStartPage();

        assertEquals(2, startPage);
    }

    @Test
    void startPageCanNotBeLessThanOne() {
        pager = new Pager(100, 0, 10);

        int startPage = pager.getStartPage();

        assertEquals(1, startPage);
    }

    @Test
    void endPageCanNotBeGreaterThanTotalPages() {
        pager = new Pager(100, 11, 10);

        int endPage = pager.getEndPage();

        assertEquals(10, endPage);
    }

}