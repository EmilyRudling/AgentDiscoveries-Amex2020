package org.softwire.training.utils;

//import java.util.stream.IntStream;

public class Pager {

    private int totalItems;
    private int currentPage;
    private int pageSize;
    private int totalPages;
    private int startPage;
    private int endPage;

    public Pager(int totalItems, int currentPage, int pageSize) {

        int totalPages = (int) Math.ceil(totalItems/pageSize);
        int startPage = currentPage - 5;
        int endPage = currentPage + 4;

        if (startPage <= 0) {
            endPage -= (startPage - 1);
            startPage = 1;
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            if (endPage > 10) {
                startPage = endPage - 9;
            }
        }

        this.totalItems = totalItems;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        this.startPage = startPage;
        this.endPage = endPage;
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
}
