import React, { useEffect, useRef } from 'react';

const placeholderSource = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="#f4efe8"/></svg>'
)}`;

export function Placeholder({ alt, className = '' }) {
  return <img src={placeholderSource} alt={alt} className={`placeholder ${className}`} />;
}

export function SectionTitle({ eyebrow, title, lede }) {
  return (
    <header className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}

export function Reveal({ children, className = '', as: Tag = 'div', id }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!element || reduced || !('IntersectionObserver' in window)) {
      element?.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}