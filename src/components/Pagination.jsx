import clsx from 'clsx'

const buttonBase =
  'inline-flex h-9 items-center justify-center rounded-lg text-xs font-medium transition'
const buttonIdle =
  'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700'

export default function Pagination({ page, totalPage, onChange }) {
  if (totalPage <= 1) return null

  return (
    <nav aria-label="Page navigation" className="mt-12 flex items-center gap-2">
      {page > 0 && (
        <button
          type="button"
          className={clsx(buttonBase, buttonIdle, 'px-3.5')}
          onClick={() => onChange(page - 1)}
        >
          Prev
        </button>
      )}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPage }, (_, id) => (
          <button
            key={id}
            type="button"
            aria-current={id === page ? 'page' : undefined}
            className={clsx(
              buttonBase,
              'w-9',
              id === page
                ? 'bg-teal-500 font-semibold text-white dark:bg-teal-400 dark:text-zinc-900'
                : buttonIdle
            )}
            onClick={() => onChange(id)}
          >
            {id + 1}
          </button>
        ))}
      </div>
      {page + 1 < totalPage && (
        <button
          type="button"
          className={clsx(buttonBase, buttonIdle, 'px-3.5')}
          onClick={() => onChange(page + 1)}
        >
          Next
        </button>
      )}
    </nav>
  )
}
