import { ArticlesContext } from "@/context"
import { useContext, useState, useEffect } from "react"
import clsx from "clsx"

export default function Pagination() {
  const { articles, setArticles, isFetch } = useContext(ArticlesContext);

  const [ defaultArticles, setDefaultArticles ] = useState([]);
  const [ limit, setLimit ] = useState(3);
  const [ startIndex, setStartIndex ] = useState(0);
  const [ page, setPage ] = useState(0);
  const [ totalPage, setTotalPage ] = useState(0);

  useEffect(() => {
    setDefaultArticles(articles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetch]);

  useEffect(() => {
    setTotalPage(Math.ceil(defaultArticles.length / limit));
  }, [defaultArticles, limit]);

  useEffect(() => {
    if (!isFetch && defaultArticles.length > 0) {
      setArticles([...defaultArticles].splice(startIndex, limit));
    }
  }, [isFetch, defaultArticles, startIndex, limit, setArticles]);

  return !isFetch && totalPage > 1 && (
    <nav aria-label="Page navigation" className="mt-8 flex items-center gap-2">
      {startIndex !== 0 && (
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-3.5 text-xs font-medium text-zinc-700 shadow-2xs transition hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700"
          onClick={() => {
            setStartIndex((prev) => prev - limit)
            setPage((prev) => prev - 1)
          }}
        >
          Prev
        </button>
      )}
      <div className="flex items-center gap-1.5">
        {[...Array(totalPage)].map((_, id) => (
          <button
            key={id}
            type="button"
            className={clsx(
              'inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium transition shadow-2xs',
              id === page
                ? 'bg-teal-500 font-semibold text-white dark:bg-teal-400 dark:text-zinc-900'
                : 'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700'
            )}
            onClick={() => {
              setStartIndex(id * limit)
              setPage(id)
            }}
          >
            {id + 1}
          </button>
        ))}
      </div>
      {page + 1 !== totalPage && (
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-3.5 text-xs font-medium text-zinc-700 shadow-2xs transition hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700"
          onClick={() => {
            setStartIndex((prev) => prev + limit)
            setPage((prev) => prev + 1)
          }}
        >
          Next
        </button>
      )}
    </nav>
  )
}