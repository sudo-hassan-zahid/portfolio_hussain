export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    immediate = false
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

export function once<T extends (...args: any[]) => any>(fn: T): T {
    let called = false;
    let result: ReturnType<T>;

    return ((...args: Parameters<T>) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    }) as T;
}

export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle = false;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;

        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

export const whenIdle = (): Promise<void> => {
    if ('requestIdleCallback' in window) {
        return new Promise(resolve => {
            (window as any).requestIdleCallback(() => resolve());
        });
    }
    return Promise.resolve();
};

export const loadScript = (src: string, async = true, defer = true): Promise<Event> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
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
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
};


export const measure = <T extends (...args: any[]) => any>(
    fn: T,
    label = 'Execution time'
) => {
    return (...args: Parameters<T>): ReturnType<T> => {
        if (process.env.NODE_ENV === 'production') {
            return fn(...args);
        }

        console.time(label);
        const result = fn(...args);

        if (result instanceof Promise) {
            return result.finally(() => console.timeEnd(label)) as ReturnType<T>;
        }

        console.timeEnd(label);
        return result;
    };
};
