import { useInView } from '@/hooks/useInView';

/**
 * Reveal — wraps children in a fade+translate-up animation
 * triggered once on scroll entry.
 *
 * @param {number}  delay   — ms delay (for stagger)
 * @param {number}  threshold
 * @param {string}  as      — HTML tag or 'div'
 */
export default function Reveal({
  children,
  delay = 0,
  threshold = 0.12,
  as: Tag = 'div',
  className = '',
  style = {},
  ...props
}) {
  const [ref, inView] = useInView(threshold);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
                     transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
