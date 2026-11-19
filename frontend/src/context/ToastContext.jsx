import { createContext, useCallback, useContext, useRef, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const timer = useRef(null);

  const showToast = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2800);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div id="toast" role="status" aria-live="polite" className={visible ? 'show' : ''}>
        <span className="tk" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m20 6-11 11-5-5" />
          </svg>
        </span>
        <span>{message}</span>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}
