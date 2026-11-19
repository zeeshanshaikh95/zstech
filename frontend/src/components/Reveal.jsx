/**
 * Simple layout wrapper used to group section content.
 *
 * Deliberately static: content is never hidden behind a scroll observer, so
 * the page renders fully even without scrolling, in print, or in previews.
 */
export default function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
