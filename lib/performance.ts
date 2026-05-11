type AnyFunction = (...args: unknown[]) => unknown;

export const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export function debounce<T extends AnyFunction>(
  func: T,
  wait: number,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
}

export function once<T extends AnyFunction>(fn: T): T {
  let called = false;
  let result: ReturnType<T>;

  return ((...args: Parameters<T>) => {
    if (!called) {
      called = true;
      result = fn(...args) as ReturnType<T>;
    }
    return result;
  }) as T;
}

export function throttle<T extends AnyFunction>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

export const whenIdle = (): Promise<void> => {
  if ("requestIdleCallback" in window) {
    return new Promise((resolve) => {
      window.requestIdleCallback(() => resolve());
    });
  }
  return Promise.resolve();
};

export const loadScript = (
  src: string,
  async = true,
  defer = true,
): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export const loadStylesheet = (href: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

export const measure = <T extends AnyFunction>(
  fn: T,
  label = "Execution time",
) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    if (process.env.NODE_ENV === "production") {
      return fn(...args) as ReturnType<T>;
    }

    console.time(label);
    const result = fn(...args);

    if (result instanceof Promise) {
      return result.finally(() => console.timeEnd(label)) as ReturnType<T>;
    }

    console.timeEnd(label);
    return result as ReturnType<T>;
  };
};
