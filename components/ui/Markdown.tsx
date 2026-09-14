import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-5 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-[1.75rem] font-bold text-gray-900 mt-12 mb-5 pb-2 border-b border-gray-100 leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-[1.35rem] font-semibold text-gray-900 mt-9 mb-4 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-900 mt-7 mb-3">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-5 leading-8 tracking-[0.015em] text-[1.0625rem] text-gray-700">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 pl-6 list-disc space-y-2.5 text-[1.0625rem] text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 pl-6 list-decimal space-y-2.5 text-[1.0625rem] text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-7 pl-1 marker:text-amber-500 marker:font-bold">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-800">{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-medium border-b border-transparent hover:border-blue-600 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-7 border-l-4 border-amber-400 bg-amber-50/70 py-3 pr-4 pl-5 italic text-gray-800 rounded-r-lg">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-0 border-t border-gray-200" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === 'string' ? src : ''}
      alt={alt ?? ''}
      className="my-7 w-full rounded-lg shadow-sm"
    />
  ),
  code: ({ children, className }) => {
    const isBlock = /language-/.test(className ?? '')
    if (isBlock) {
      return (
        <code className="block text-sm font-mono text-gray-100 leading-relaxed">
          {children}
        </code>
      )
    }
    return (
      <code className="bg-gray-100 text-red-600 text-[0.9em] font-mono px-1.5 py-0.5 rounded">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="my-6 bg-gray-900 rounded-lg p-4 overflow-x-auto">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
  th: ({ children }) => (
    <th className="text-left font-semibold text-gray-900 px-4 py-3 border-b border-gray-200">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">
      {children}
    </td>
  ),
}

type MarkdownProps = {
  content: string
  className?: string
}

export default function Markdown({ content, className = '' }: MarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}