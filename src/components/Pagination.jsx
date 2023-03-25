import { ArticlesContext } from "@/context"
import { useContext, useState, useEffect } from "react"

export default function Pagination() {
  const { articles, setArticles, isFetch } = useContext(ArticlesContext);

  const [ defaultArticles, setDefaultArticles ] = useState([]);
  const [ limit, setLimit ] = useState(1);
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

  return !isFetch && (
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        {startIndex !== 0 && (
          <li>
            <button
              className="focus:shadow-outline h-10 rounded-l-lg bg-white px-5 text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
              onClick={() => {
                setStartIndex((prev) => prev - limit)
                setPage((prev) => prev - 1)
              }}
            >
              Prev
            </button>
          </li>
        )}
        {[...Array(totalPage)].map((el, id) => (
          <li key={id}>
            <button
              className={`${
                id === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600'
              } focus:shadow-outline h-10 px-5 transition-colors duration-150`}
              onClick={() => {
                setStartIndex(id * limit)
                setPage(id)
              }}
            >
              {id + 1}
            </button>
          </li>
        ))}
        {page + 1 !== totalPage && (
          <li>
            <button
              className="focus:shadow-outline h-10 rounded-r-lg bg-white px-5 text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
              onClick={() => {
                setStartIndex((prev) => prev + limit)
                setPage((prev) => prev + 1)
              }}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}