package org.softwire.training.utils;

import java.util.stream.IntStream;

public class Pager {

    private int totalItems;
    private int currentPage;
    private int pageSize;
    private int totalPages;
    private int startPage;
    private int endPage;
    private int startIndex;
    private int endIndex;
    private int[] pages;

    public Pager(
            int totalItems,
            int currentPage,
            int pageSize,
            int maxPages
    ) {

        int totalPages = (int) Math.ceil(totalItems / pageSize);

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        int startPage, endPage;
        if (totalPages <= maxPages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            int maxPagesBeforeCurrentPage = (int) Math.floor(maxPages / 2);
            int maxPagesAfterCurrentPage = (int) Math.ceil(maxPages / 2) - 1;

            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = maxPages;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }

        int startIndex = (currentPage - 1) * pageSize;
        int endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        int[] pages = IntStream.range(startPage, (endPage + 1) - startPage).toArray();

        this.totalItems = totalItems;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        this.startPage = startPage;
        this.endPage = endPage;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.pages = pages;
    }

    public int getTotalItems() {
        return totalItems;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public int getStartPage() {
        return startPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public int getStartIndex() {
        return startIndex;
    }

    public int getEndIndex() {
        return endIndex;
    }

    public int[] getPages() {
        return pages;
    }
}
