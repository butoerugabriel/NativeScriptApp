/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * fakeAsync has been moved to zone.js
 * this file is for fallback in case old version of zone.js is used
 * @type {?}
 */
const _Zone = typeof Zone !== 'undefined' ? Zone : null;
/** @type {?} */
const FakeAsyncTestZoneSpec = _Zone && _Zone['FakeAsyncTestZoneSpec'];
/** @type {?} */
const ProxyZoneSpec = _Zone && _Zone['ProxyZoneSpec'];
/** @type {?} */
let _fakeAsyncTestZoneSpec = null;
/**
 * Clears out the shared fake async zone for a test.
 * To be called in a global `beforeEach`.
 *
 * \@publicApi
 * @return {?}
 */
export function resetFakeAsyncZoneFallback() {
    _fakeAsyncTestZoneSpec = null;
    // in node.js testing we may not have ProxyZoneSpec in which case there is nothing to reset.
    ProxyZoneSpec && ProxyZoneSpec.assertPresent().resetDelegate();
}
/** @type {?} */
let _inFakeAsyncCall = false;
/**
 * Wraps a function to be executed in the fakeAsync zone:
 * - microtasks are manually executed by calling `flushMicrotasks()`,
 * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
 *
 * If there are any pending timers at the end of the function, an exception will be thrown.
 *
 * Can be used to wrap inject() calls.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/testing/ts/fake_async.ts region='basic'}
 *
 * \@publicApi
 * @param {?} fn
 * @return {?} The function wrapped to be executed in the fakeAsync zone
 *
 */
export function fakeAsyncFallback(fn) {
    // Not using an arrow function to preserve context passed from call site
    return function (...args) {
        /** @type {?} */
        const proxyZoneSpec = ProxyZoneSpec.assertPresent();
        if (_inFakeAsyncCall) {
            throw new Error('fakeAsync() calls can not be nested');
        }
        _inFakeAsyncCall = true;
        try {
            if (!_fakeAsyncTestZoneSpec) {
                if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec) {
                    throw new Error('fakeAsync() calls can not be nested');
                }
                _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec();
            }
            /** @type {?} */
            let res;
            /** @type {?} */
            const lastProxyZoneSpec = proxyZoneSpec.getDelegate();
            proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
            try {
                res = fn.apply(this, args);
                flushMicrotasksFallback();
            }
            finally {
                proxyZoneSpec.setDelegate(lastProxyZoneSpec);
            }
            if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
                throw new Error(`${_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length} ` +
                    `periodic timer(s) still in the queue.`);
            }
            if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
                throw new Error(`${_fakeAsyncTestZoneSpec.pendingTimers.length} timer(s) still in the queue.`);
            }
            return res;
        }
        finally {
            _inFakeAsyncCall = false;
            resetFakeAsyncZoneFallback();
        }
    };
}
/**
 * @return {?}
 */
function _getFakeAsyncZoneSpec() {
    if (_fakeAsyncTestZoneSpec == null) {
        throw new Error('The code should be running in the fakeAsync zone to call this function');
    }
    return _fakeAsyncTestZoneSpec;
}
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
 *
 * The microtasks queue is drained at the very start of this function and after any timer callback
 * has been executed.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/testing/ts/fake_async.ts region='basic'}
 *
 * \@publicApi
 * @param {?=} millis
 * @return {?}
 */
export function tickFallback(millis = 0) {
    _getFakeAsyncZoneSpec().tick(millis);
}
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone by
 * draining the macrotask queue until it is empty. The returned value is the milliseconds
 * of time that would have been elapsed.
 *
 * \@publicApi
 * @param {?=} maxTurns
 * @return {?} The simulated time elapsed, in millis.
 *
 */
export function flushFallback(maxTurns) {
    return _getFakeAsyncZoneSpec().flush(maxTurns);
}
/**
 * Discard all remaining periodic tasks.
 *
 * \@publicApi
 * @return {?}
 */
export function discardPeriodicTasksFallback() {
    /** @type {?} */
    const zoneSpec = _getFakeAsyncZoneSpec();
    zoneSpec.pendingPeriodicTimers.length = 0;
}
/**
 * Flush any pending microtasks.
 *
 * \@publicApi
 * @return {?}
 */
export function flushMicrotasksFallback() {
    _getFakeAsyncZoneSpec().flushMicrotasks();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZV9hc3luY19mYWxsYmFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvZmFrZV9hc3luY19mYWxsYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O01BWU0sS0FBSyxHQUFRLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztNQUN0RCxxQkFBcUIsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDOztNQUkvRCxhQUFhLEdBQ2YsS0FBSyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUM7O0lBRS9CLHNCQUFzQixHQUFRLElBQUk7Ozs7Ozs7O0FBUXRDLE1BQU0sVUFBVSwwQkFBMEI7SUFDeEMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQzlCLDRGQUE0RjtJQUM1RixhQUFhLElBQUksYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2pFLENBQUM7O0lBRUcsZ0JBQWdCLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjVCLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxFQUFZO0lBQzVDLHdFQUF3RTtJQUN4RSxPQUFPLFVBQVMsR0FBRyxJQUFXOztjQUN0QixhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRTtRQUNuRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN4RDtRQUNELGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUMzQixJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxxQkFBcUIsRUFBRTtvQkFDaEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2lCQUN4RDtnQkFFRCxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7YUFDdEQ7O2dCQUVHLEdBQVE7O2tCQUNOLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDckQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2xELElBQUk7Z0JBQ0YsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQix1QkFBdUIsRUFBRSxDQUFDO2FBQzNCO29CQUFTO2dCQUNSLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksc0JBQXNCLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0QsTUFBTSxJQUFJLEtBQUssQ0FDWCxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRztvQkFDekQsdUNBQXVDLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQ1gsR0FBRyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsTUFBTSwrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BGO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjtnQkFBUztZQUNSLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUN6QiwwQkFBMEIsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7OztBQUVELFNBQVMscUJBQXFCO0lBQzVCLElBQUksc0JBQXNCLElBQUksSUFBSSxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUMzRjtJQUNELE9BQU8sc0JBQXNCLENBQUM7QUFDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWVELE1BQU0sVUFBVSxZQUFZLENBQUMsU0FBaUIsQ0FBQztJQUM3QyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxhQUFhLENBQUMsUUFBaUI7SUFDN0MsT0FBTyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxDQUFDOzs7Ozs7O0FBT0QsTUFBTSxVQUFVLDRCQUE0Qjs7VUFDcEMsUUFBUSxHQUFHLHFCQUFxQixFQUFFO0lBQ3hDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLENBQUM7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsdUJBQXVCO0lBQ3JDLHFCQUFxQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBmYWtlQXN5bmMgaGFzIGJlZW4gbW92ZWQgdG8gem9uZS5qc1xuICogdGhpcyBmaWxlIGlzIGZvciBmYWxsYmFjayBpbiBjYXNlIG9sZCB2ZXJzaW9uIG9mIHpvbmUuanMgaXMgdXNlZFxuICovXG5jb25zdCBfWm9uZTogYW55ID0gdHlwZW9mIFpvbmUgIT09ICd1bmRlZmluZWQnID8gWm9uZSA6IG51bGw7XG5jb25zdCBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPSBfWm9uZSAmJiBfWm9uZVsnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJ107XG50eXBlIFByb3h5Wm9uZVNwZWMgPSB7XG4gIHNldERlbGVnYXRlKGRlbGVnYXRlU3BlYzogWm9uZVNwZWMpOiB2b2lkOyBnZXREZWxlZ2F0ZSgpOiBab25lU3BlYzsgcmVzZXREZWxlZ2F0ZSgpOiB2b2lkO1xufTtcbmNvbnN0IFByb3h5Wm9uZVNwZWM6IHtnZXQoKTogUHJveHlab25lU3BlYzsgYXNzZXJ0UHJlc2VudDogKCkgPT4gUHJveHlab25lU3BlY30gPVxuICAgIF9ab25lICYmIF9ab25lWydQcm94eVpvbmVTcGVjJ107XG5cbmxldCBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjOiBhbnkgPSBudWxsO1xuXG4vKipcbiAqIENsZWFycyBvdXQgdGhlIHNoYXJlZCBmYWtlIGFzeW5jIHpvbmUgZm9yIGEgdGVzdC5cbiAqIFRvIGJlIGNhbGxlZCBpbiBhIGdsb2JhbCBgYmVmb3JlRWFjaGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGYWtlQXN5bmNab25lRmFsbGJhY2soKSB7XG4gIF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPSBudWxsO1xuICAvLyBpbiBub2RlLmpzIHRlc3Rpbmcgd2UgbWF5IG5vdCBoYXZlIFByb3h5Wm9uZVNwZWMgaW4gd2hpY2ggY2FzZSB0aGVyZSBpcyBub3RoaW5nIHRvIHJlc2V0LlxuICBQcm94eVpvbmVTcGVjICYmIFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpLnJlc2V0RGVsZWdhdGUoKTtcbn1cblxubGV0IF9pbkZha2VBc3luY0NhbGwgPSBmYWxzZTtcblxuLyoqXG4gKiBXcmFwcyBhIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGluIHRoZSBmYWtlQXN5bmMgem9uZTpcbiAqIC0gbWljcm90YXNrcyBhcmUgbWFudWFsbHkgZXhlY3V0ZWQgYnkgY2FsbGluZyBgZmx1c2hNaWNyb3Rhc2tzKClgLFxuICogLSB0aW1lcnMgYXJlIHN5bmNocm9ub3VzLCBgdGljaygpYCBzaW11bGF0ZXMgdGhlIGFzeW5jaHJvbm91cyBwYXNzYWdlIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIHRpbWVycyBhdCB0aGUgZW5kIG9mIHRoZSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIENhbiBiZSB1c2VkIHRvIHdyYXAgaW5qZWN0KCkgY2FsbHMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvcmUvdGVzdGluZy90cy9mYWtlX2FzeW5jLnRzIHJlZ2lvbj0nYmFzaWMnfVxuICpcbiAqIEBwYXJhbSBmblxuICogQHJldHVybnMgVGhlIGZ1bmN0aW9uIHdyYXBwZWQgdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIGZha2VBc3luYyB6b25lXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFrZUFzeW5jRmFsbGJhY2soZm46IEZ1bmN0aW9uKTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc3QgcHJveHlab25lU3BlYyA9IFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpO1xuICAgIGlmIChfaW5GYWtlQXN5bmNDYWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zha2VBc3luYygpIGNhbGxzIGNhbiBub3QgYmUgbmVzdGVkJyk7XG4gICAgfVxuICAgIF9pbkZha2VBc3luY0NhbGwgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMpIHtcbiAgICAgICAgaWYgKHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKSBpbnN0YW5jZW9mIEZha2VBc3luY1Rlc3Rab25lU3BlYykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFrZUFzeW5jKCkgY2FsbHMgY2FuIG5vdCBiZSBuZXN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPSBuZXcgRmFrZUFzeW5jVGVzdFpvbmVTcGVjKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXM6IGFueTtcbiAgICAgIGNvbnN0IGxhc3RQcm94eVpvbmVTcGVjID0gcHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpO1xuICAgICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZShfZmFrZUFzeW5jVGVzdFpvbmVTcGVjKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBmbHVzaE1pY3JvdGFza3NGYWxsYmFjaygpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZShsYXN0UHJveHlab25lU3BlYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke19mYWtlQXN5bmNUZXN0Wm9uZVNwZWMucGVuZGluZ1BlcmlvZGljVGltZXJzLmxlbmd0aH0gYCArXG4gICAgICAgICAgICBgcGVyaW9kaWMgdGltZXIocykgc3RpbGwgaW4gdGhlIHF1ZXVlLmApO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYy5wZW5kaW5nVGltZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYCR7X2Zha2VBc3luY1Rlc3Rab25lU3BlYy5wZW5kaW5nVGltZXJzLmxlbmd0aH0gdGltZXIocykgc3RpbGwgaW4gdGhlIHF1ZXVlLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGZpbmFsbHkge1xuICAgICAgX2luRmFrZUFzeW5jQ2FsbCA9IGZhbHNlO1xuICAgICAgcmVzZXRGYWtlQXN5bmNab25lRmFsbGJhY2soKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9nZXRGYWtlQXN5bmNab25lU3BlYygpOiBhbnkge1xuICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYyA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29kZSBzaG91bGQgYmUgcnVubmluZyBpbiB0aGUgZmFrZUFzeW5jIHpvbmUgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWM7XG59XG5cbi8qKlxuICogU2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lIGZvciB0aGUgdGltZXJzIGluIHRoZSBmYWtlQXN5bmMgem9uZS5cbiAqXG4gKiBUaGUgbWljcm90YXNrcyBxdWV1ZSBpcyBkcmFpbmVkIGF0IHRoZSB2ZXJ5IHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb24gYW5kIGFmdGVyIGFueSB0aW1lciBjYWxsYmFja1xuICogaGFzIGJlZW4gZXhlY3V0ZWQuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvcmUvdGVzdGluZy90cy9mYWtlX2FzeW5jLnRzIHJlZ2lvbj0nYmFzaWMnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpY2tGYWxsYmFjayhtaWxsaXM6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgX2dldEZha2VBc3luY1pvbmVTcGVjKCkudGljayhtaWxsaXMpO1xufVxuXG4vKipcbiAqIFNpbXVsYXRlcyB0aGUgYXN5bmNocm9ub3VzIHBhc3NhZ2Ugb2YgdGltZSBmb3IgdGhlIHRpbWVycyBpbiB0aGUgZmFrZUFzeW5jIHpvbmUgYnlcbiAqIGRyYWluaW5nIHRoZSBtYWNyb3Rhc2sgcXVldWUgdW50aWwgaXQgaXMgZW1wdHkuIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyB0aGUgbWlsbGlzZWNvbmRzXG4gKiBvZiB0aW1lIHRoYXQgd291bGQgaGF2ZSBiZWVuIGVsYXBzZWQuXG4gKlxuICogQHBhcmFtIG1heFR1cm5zXG4gKiBAcmV0dXJucyBUaGUgc2ltdWxhdGVkIHRpbWUgZWxhcHNlZCwgaW4gbWlsbGlzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoRmFsbGJhY2sobWF4VHVybnM/OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gX2dldEZha2VBc3luY1pvbmVTcGVjKCkuZmx1c2gobWF4VHVybnMpO1xufVxuXG4vKipcbiAqIERpc2NhcmQgYWxsIHJlbWFpbmluZyBwZXJpb2RpYyB0YXNrcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNjYXJkUGVyaW9kaWNUYXNrc0ZhbGxiYWNrKCk6IHZvaWQge1xuICBjb25zdCB6b25lU3BlYyA9IF9nZXRGYWtlQXN5bmNab25lU3BlYygpO1xuICB6b25lU3BlYy5wZW5kaW5nUGVyaW9kaWNUaW1lcnMubGVuZ3RoID0gMDtcbn1cblxuLyoqXG4gKiBGbHVzaCBhbnkgcGVuZGluZyBtaWNyb3Rhc2tzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoTWljcm90YXNrc0ZhbGxiYWNrKCk6IHZvaWQge1xuICBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKS5mbHVzaE1pY3JvdGFza3MoKTtcbn1cbiJdfQ==