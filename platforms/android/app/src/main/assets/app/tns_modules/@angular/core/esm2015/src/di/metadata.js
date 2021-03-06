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
import { makeParamDecorator } from '../util/decorators';
/**
 * Type of the Inject decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function InjectDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * Inject decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Inject = makeParamDecorator('Inject', (token) => ({ token }));
/**
 * Type of the Optional decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function OptionalDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * Optional decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Optional = makeParamDecorator('Optional');
/**
 * Type of the Self decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function SelfDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * Self decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Self = makeParamDecorator('Self');
/**
 * Type of the SkipSelf decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function SkipSelfDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * SkipSelf decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const SkipSelf = makeParamDecorator('SkipSelf');
/**
 * Type of the Host decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function HostDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * Host decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Host = makeParamDecorator('Host');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBLE9BQU8sRUFBZ0Isa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVNyRSxxQ0FvQkM7Ozs7Ozs7OztBQW9CRCxNQUFNLE9BQU8sTUFBTSxHQUFvQixrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FBUTlGLHVDQWFDOzs7Ozs7Ozs7QUFlRCxNQUFNLE9BQU8sUUFBUSxHQUFzQixrQkFBa0IsQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7QUFPekUsbUNBaUJDOzs7Ozs7Ozs7QUFlRCxNQUFNLE9BQU8sSUFBSSxHQUFrQixrQkFBa0IsQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7QUFRN0QsdUNBZ0JDOzs7Ozs7Ozs7QUFlRCxNQUFNLE9BQU8sUUFBUSxHQUFzQixrQkFBa0IsQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7QUFPekUsbUNBY0M7Ozs7Ozs7OztBQWVELE1BQU0sT0FBTyxJQUFJLEdBQWtCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDbGFzc1NhbnNQcm92aWRlciwgQ29uc3RydWN0b3JQcm92aWRlciwgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIsIEV4aXN0aW5nUHJvdmlkZXIsIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIEZhY3RvcnlTYW5zUHJvdmlkZXIsIFN0YXRpY0NsYXNzUHJvdmlkZXIsIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyLCBWYWx1ZVByb3ZpZGVyLCBWYWx1ZVNhbnNQcm92aWRlcn0gZnJvbSAnLi4vZGkvcHJvdmlkZXInO1xuaW1wb3J0IHtSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICcuLi9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5pbXBvcnQge21ha2VEZWNvcmF0b3IsIG1ha2VQYXJhbURlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcbmltcG9ydCB7RU1QVFlfQVJSQVl9IGZyb20gJy4uL3ZpZXcvdXRpbCc7XG5cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBJbmplY3QgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdERlY29yYXRvciB7XG4gIC8qKlxuICAgKiBBIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBkZWNvcmF0b3IgdGhhdCBzcGVjaWZpZXMgYVxuICAgKiBjdXN0b20gcHJvdmlkZXIgb2YgYSBkZXBlbmRlbmN5LlxuICAgKlxuICAgKiBAc2VlIFtcIkRlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXCJdKGd1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uKS5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGEgY2xhc3MgY29uc3RydWN0b3IgdGhhdCBzcGVjaWZpZXMgYVxuICAgKiBjdXN0b20gcHJvdmlkZXIgb2YgYSBkZXBlbmRlbmN5IHVzaW5nIHRoZSBwYXJhbWV0ZXIgZGVjb3JhdG9yLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSW5qZWN0J31cbiAgICpcbiAgICogV2hlbiBgQEluamVjdCgpYCBpcyBub3QgcHJlc2VudCwgdGhlIGBJbmplY3RvcmAgdXNlcyB0aGUgdHlwZSBhbm5vdGF0aW9uIG9mIHRoZVxuICAgKiBwYXJhbWV0ZXIgYXMgdGhlIHByb3ZpZGVyLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSW5qZWN0V2l0aG91dERlY29yYXRvcid9XG4gICAqL1xuICAodG9rZW46IGFueSk6IGFueTtcbiAgbmV3ICh0b2tlbjogYW55KTogSW5qZWN0O1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdCBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0IHtcbiAgLyoqXG4gICAqIEluamVjdG9yIHRva2VuIHRoYXQgbWFwcyB0byB0aGUgZGVwZW5kZW5jeSB0byBiZSBpbmplY3RlZC5cbiAgICovXG4gIHRva2VuOiBhbnk7XG59XG5cbi8qKlxuICogSW5qZWN0IGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEluamVjdDogSW5qZWN0RGVjb3JhdG9yID0gbWFrZVBhcmFtRGVjb3JhdG9yKCdJbmplY3QnLCAodG9rZW46IGFueSkgPT4gKHt0b2tlbn0pKTtcblxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIE9wdGlvbmFsIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcHRpb25hbERlY29yYXRvciB7XG4gIC8qKlxuICAgKiBBIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBkZWNvcmF0b3IgdGhhdCBtYXJrcyBhIGRlcGVuZGVuY3kgYXMgb3B0aW9uYWwuXG4gICAqXG4gICAqIFRoZSBESSBmcmFtZXdvcmsgcHJvdmlkZXMgbnVsbCBpZiB0aGUgZGVwZW5kZW5jeSBpcyBub3QgZm91bmQuXG4gICAqIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIGNvZGUgYWxsb3dzIHRoZSBwb3NzaWJpbGl0eSBvZiBhIG51bGwgcmVzdWx0OlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nT3B0aW9uYWwnfVxuICAgKlxuICAgKiBAc2VlIFtcIkRlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXCJdKGd1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uKS5cbiAgICovXG4gICgpOiBhbnk7XG4gIG5ldyAoKTogT3B0aW9uYWw7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgT3B0aW9uYWwgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbmFsIHt9XG5cbi8qKlxuICogT3B0aW9uYWwgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgT3B0aW9uYWw6IE9wdGlvbmFsRGVjb3JhdG9yID0gbWFrZVBhcmFtRGVjb3JhdG9yKCdPcHRpb25hbCcpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFNlbGYgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlbGZEZWNvcmF0b3Ige1xuICAvKipcbiAgICogQSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgZGVjb3JhdG9yIHRoYXQgdGVsbHMgdGhlIERJIGZyYW1ld29ya1xuICAgKiB0byByZXRyaWV2ZSBhIGRlcGVuZGVuY3kgb25seSBmcm9tIHRoZSBsb2NhbCBpbmplY3Rvci5cbiAgICpcbiAgICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCB0aGUgZGVwZW5kZW5jeSBjYW4gYmUgcmVzb2x2ZWRcbiAgICogYnkgdGhlIGxvY2FsIGluamVjdG9yIHdoZW4gaW5zdGFudGlhdGluZyB0aGUgY2xhc3MgaXRzZWxmLCBidXQgbm90XG4gICAqIHdoZW4gaW5zdGFudGlhdGluZyBhIGNoaWxkLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nU2VsZid9XG4gICAqXG4gICAqIEBzZWUgW1wiRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVcIl0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pLlxuICAgKlxuICAgKlxuICAgKi9cbiAgKCk6IGFueTtcbiAgbmV3ICgpOiBTZWxmO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFNlbGYgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlbGYge31cblxuLyoqXG4gKiBTZWxmIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbGY6IFNlbGZEZWNvcmF0b3IgPSBtYWtlUGFyYW1EZWNvcmF0b3IoJ1NlbGYnKTtcblxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFNraXBTZWxmIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTa2lwU2VsZkRlY29yYXRvciB7XG4gIC8qKlxuICAgKiBBIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBkZWNvcmF0b3IgdGhhdCB0ZWxscyB0aGUgREkgZnJhbWV3b3JrXG4gICAqIHRoYXQgZGVwZW5kZW5jeSByZXNvbHV0aW9uIHNob3VsZCBzdGFydCBmcm9tIHRoZSBwYXJlbnQgaW5qZWN0b3IuXG4gICAqXG4gICAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgdGhlIGRlcGVuZGVuY3kgY2FuIGJlIHJlc29sdmVkIHdoZW5cbiAgICogaW5zdGFudGlhdGluZyBhIGNoaWxkLCBidXQgbm90IHdoZW4gaW5zdGFudGlhdGluZyB0aGUgY2xhc3MgaXRzZWxmLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nU2tpcFNlbGYnfVxuICAgKlxuICAgKiBAc2VlIFtcIkRlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXCJdKGd1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uKS5cbiAgICpcbiAgICpcbiAgICovXG4gICgpOiBhbnk7XG4gIG5ldyAoKTogU2tpcFNlbGY7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgU2tpcFNlbGYgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNraXBTZWxmIHt9XG5cbi8qKlxuICogU2tpcFNlbGYgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgU2tpcFNlbGY6IFNraXBTZWxmRGVjb3JhdG9yID0gbWFrZVBhcmFtRGVjb3JhdG9yKCdTa2lwU2VsZicpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEhvc3QgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhvc3REZWNvcmF0b3Ige1xuICAvKipcbiAgICogQSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgZGVjb3JhdG9yIHRoYXQgdGVsbHMgdGhlIERJIGZyYW1ld29ya1xuICAgKiB0byByZXRyaWV2ZSBhIGRlcGVuZGVuY3kgZnJvbSBhbnkgaW5qZWN0b3IgdW50aWxcbiAgICogcmVhY2hpbmcgdGhlIGhvc3QgZWxlbWVudCBvZiB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqXG4gICAqIEBzZWUgW1wiRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVcIl0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSG9zdCd9XG4gICAqL1xuICAoKTogYW55O1xuICBuZXcgKCk6IEhvc3Q7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgSG9zdCBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSG9zdCB7fVxuXG4vKipcbiAqIEhvc3QgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSG9zdDogSG9zdERlY29yYXRvciA9IG1ha2VQYXJhbURlY29yYXRvcignSG9zdCcpO1xuIl19