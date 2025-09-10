import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  showingStart,
  showingEnd,
  totalItems,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("prev-ellipsis");

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("next-ellipsis");
      pages.push(totalPages);
    }
    return [...new Set(pages)];
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-border bg-muted/50">
      {/* Left info */}
      <div className="text-sm text-muted-foreground text-center md:text-left">
        Showing
        <span className="font-medium mx-1 text-foreground">
          {showingStart} to {showingEnd} of {totalItems}
        </span>
        employees
      </div>

      {/* Pagination Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Prev */}
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          <ChevronLeft className="size-5 border border-black/70 rounded-sm" />
        </Button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, idx) =>
          typeof page === "string" ? (
            <span key={idx} className="px-2 text-muted-foreground select-none">
              ...
            </span>
          ) : (
            <Button
              key={`page-${page}`}
              size="sm"
              variant={page === currentPage ? "default" : "outline"}
              className={
                page === currentPage
                  ? "bg-[#4a48c4] text-white w-7 h-7"
                  : "w-7 h-7"
              }
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          )
        )}

        {/* Next */}
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        >
          <ChevronRight className="size-5 border border-black/70 rounded-sm" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
