/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertEqual } from './assert';
import { FLAGS } from './interfaces/view';
/**
 * If this is the first template pass, any ngOnInit or ngDoCheck hooks will be queued into
 * TView.initHooks during directiveCreate.
 *
 * The directive index and hook type are encoded into one number (1st bit: type, remaining bits:
 * directive index), then saved in the even indices of the initHooks array. The odd indices
 * hold the hook functions themselves.
 *
 * @param index The index of the directive in LView
 * @param hooks The static hooks map on the directive def
 * @param tView The current TView
 */
export function queueInitHooks(index, onInit, doCheck, tView) {
    ngDevMode &&
        assertEqual(tView.firstTemplatePass, true, 'Should only be called on first template pass');
    if (onInit) {
        (tView.initHooks || (tView.initHooks = [])).push(index, onInit);
    }
    if (doCheck) {
        (tView.initHooks || (tView.initHooks = [])).push(index, doCheck);
        (tView.checkHooks || (tView.checkHooks = [])).push(index, doCheck);
    }
}
/**
 * Loops through the directives on a node and queues all their hooks except ngOnInit
 * and ngDoCheck, which are queued separately in directiveCreate.
 */
export function queueLifecycleHooks(tView, tNode) {
    if (tView.firstTemplatePass) {
        // It's necessary to loop through the directives at elementEnd() (rather than processing in
        // directiveCreate) so we can preserve the current hook order. Content, view, and destroy
        // hooks for projected components and directives must be called *before* their hosts.
        for (var i = tNode.directiveStart, end = tNode.directiveEnd; i < end; i++) {
            var def = tView.data[i];
            queueContentHooks(def, tView, i);
            queueViewHooks(def, tView, i);
            queueDestroyHooks(def, tView, i);
        }
    }
}
/** Queues afterContentInit and afterContentChecked hooks on TView */
function queueContentHooks(def, tView, i) {
    if (def.afterContentInit) {
        (tView.contentHooks || (tView.contentHooks = [])).push(i, def.afterContentInit);
    }
    if (def.afterContentChecked) {
        (tView.contentHooks || (tView.contentHooks = [])).push(i, def.afterContentChecked);
        (tView.contentCheckHooks || (tView.contentCheckHooks = [])).push(i, def.afterContentChecked);
    }
}
/** Queues afterViewInit and afterViewChecked hooks on TView */
function queueViewHooks(def, tView, i) {
    if (def.afterViewInit) {
        (tView.viewHooks || (tView.viewHooks = [])).push(i, def.afterViewInit);
    }
    if (def.afterViewChecked) {
        (tView.viewHooks || (tView.viewHooks = [])).push(i, def.afterViewChecked);
        (tView.viewCheckHooks || (tView.viewCheckHooks = [])).push(i, def.afterViewChecked);
    }
}
/** Queues onDestroy hooks on TView */
function queueDestroyHooks(def, tView, i) {
    if (def.onDestroy != null) {
        (tView.destroyHooks || (tView.destroyHooks = [])).push(i, def.onDestroy);
    }
}
/**
 * Calls onInit and doCheck calls if they haven't already been called.
 *
 * @param currentView The current view
 */
export function executeInitHooks(currentView, tView, checkNoChangesMode) {
    if (!checkNoChangesMode && currentView[FLAGS] & 32 /* RunInit */) {
        executeHooks(currentView, tView.initHooks, tView.checkHooks, checkNoChangesMode);
        currentView[FLAGS] &= ~32 /* RunInit */;
    }
}
/**
 * Iterates over afterViewInit and afterViewChecked functions and calls them.
 *
 * @param currentView The current view
 */
export function executeHooks(currentView, allHooks, checkHooks, checkNoChangesMode) {
    if (checkNoChangesMode)
        return;
    var hooksToCall = currentView[FLAGS] & 2 /* FirstLViewPass */ ? allHooks : checkHooks;
    if (hooksToCall) {
        callHooks(currentView, hooksToCall);
    }
}
/**
 * Calls lifecycle hooks with their contexts, skipping init hooks if it's not
 * the first LView pass.
 *
 * @param currentView The current view
 * @param arr The array in which the hooks are found
 */
export function callHooks(currentView, arr) {
    for (var i = 0; i < arr.length; i += 2) {
        arr[i + 1].call(currentView[arr[i]]);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFHckMsT0FBTyxFQUFDLEtBQUssRUFBcUMsTUFBTSxtQkFBbUIsQ0FBQztBQUk1RTs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQzFCLEtBQWEsRUFBRSxNQUEyQixFQUFFLE9BQTRCLEVBQUUsS0FBWTtJQUN4RixTQUFTO1FBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsOENBQThDLENBQUMsQ0FBQztJQUMvRixJQUFJLE1BQU0sRUFBRTtRQUNWLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsSUFBSSxPQUFPLEVBQUU7UUFDWCxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNwRTtBQUNILENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBWSxFQUFFLEtBQVk7SUFDNUQsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEVBQUU7UUFDM0IsMkZBQTJG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QUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQW1CLENBQUM7S0FDM0M7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQ3hCLFdBQWtCLEVBQUUsUUFBeUIsRUFBRSxVQUEyQixFQUMxRSxrQkFBMkI7SUFDN0IsSUFBSSxrQkFBa0I7UUFBRSxPQUFPO0lBRS9CLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMseUJBQTRCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNGLElBQUksV0FBVyxFQUFFO1FBQ2YsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLFdBQWtCLEVBQUUsR0FBYTtJQUN6RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFXLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnRFcXVhbH0gZnJvbSAnLi9hc3NlcnQnO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZ9IGZyb20gJy4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7VE5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7RkxBR1MsIEhvb2tEYXRhLCBMVmlldywgTFZpZXdGbGFncywgVFZpZXd9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcblxuXG5cbi8qKlxuICogSWYgdGhpcyBpcyB0aGUgZmlyc3QgdGVtcGxhdGUgcGFzcywgYW55IG5nT25Jbml0IG9yIG5nRG9DaGVjayBob29rcyB3aWxsIGJlIHF1ZXVlZCBpbnRvXG4gKiBUVmlldy5pbml0SG9va3MgZHVyaW5nIGRpcmVjdGl2ZUNyZWF0ZS5cbiAqXG4gKiBUaGUgZGlyZWN0aXZlIGluZGV4IGFuZCBob29rIHR5cGUgYXJlIGVuY29kZWQgaW50byBvbmUgbnVtYmVyICgxc3QgYml0OiB0eXBlLCByZW1haW5pbmcgYml0czpcbiAqIGRpcmVjdGl2ZSBpbmRleCksIHRoZW4gc2F2ZWQgaW4gdGhlIGV2ZW4gaW5kaWNlcyBvZiB0aGUgaW5pdEhvb2tzIGFycmF5LiBUaGUgb2RkIGluZGljZXNcbiAqIGhvbGQgdGhlIGhvb2sgZnVuY3Rpb25zIHRoZW1zZWx2ZXMuXG4gKlxuICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIGluIExWaWV3XG4gKiBAcGFyYW0gaG9va3MgVGhlIHN0YXRpYyBob29rcyBtYXAgb24gdGhlIGRpcmVjdGl2ZSBkZWZcbiAqIEBwYXJhbSB0VmlldyBUaGUgY3VycmVudCBUVmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVldWVJbml0SG9va3MoXG4gICAgaW5kZXg6IG51bWJlciwgb25Jbml0OiAoKCkgPT4gdm9pZCkgfCBudWxsLCBkb0NoZWNrOiAoKCkgPT4gdm9pZCkgfCBudWxsLCB0VmlldzogVFZpZXcpOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnRFcXVhbCh0Vmlldy5maXJzdFRlbXBsYXRlUGFzcywgdHJ1ZSwgJ1Nob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBmaXJzdCB0ZW1wbGF0ZSBwYXNzJyk7XG4gIGlmIChvbkluaXQpIHtcbiAgICAodFZpZXcuaW5pdEhvb2tzIHx8ICh0Vmlldy5pbml0SG9va3MgPSBbXSkpLnB1c2goaW5kZXgsIG9uSW5pdCk7XG4gIH1cblxuICBpZiAoZG9DaGVjaykge1xuICAgICh0Vmlldy5pbml0SG9va3MgfHwgKHRWaWV3LmluaXRIb29rcyA9IFtdKSkucHVzaChpbmRleCwgZG9DaGVjayk7XG4gICAgKHRWaWV3LmNoZWNrSG9va3MgfHwgKHRWaWV3LmNoZWNrSG9va3MgPSBbXSkpLnB1c2goaW5kZXgsIGRvQ2hlY2spO1xuICB9XG59XG5cbi8qKlxuICogTG9vcHMgdGhyb3VnaCB0aGUgZGlyZWN0aXZlcyBvbiBhIG5vZGUgYW5kIHF1ZXVlcyBhbGwgdGhlaXIgaG9va3MgZXhjZXB0IG5nT25Jbml0XG4gKiBhbmQgbmdEb0NoZWNrLCB3aGljaCBhcmUgcXVldWVkIHNlcGFyYXRlbHkgaW4gZGlyZWN0aXZlQ3JlYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVldWVMaWZlY3ljbGVIb29rcyh0VmlldzogVFZpZXcsIHROb2RlOiBUTm9kZSk6IHZvaWQge1xuICBpZiAodFZpZXcuZmlyc3RUZW1wbGF0ZVBhc3MpIHtcbiAgICAvLyBJdCdzIG5lY2Vzc2FyeSB0byBsb29wIHRocm91Z2ggdGhlIGRpcmVjdGl2ZXMgYXQgZWxlbWVudEVuZCgpIChyYXRoZXIgdGhhbiBwcm9jZXNzaW5nIGluXG4gICAgLy8gZGlyZWN0aXZlQ3JlYXRlKSBzbyB3ZSBjYW4gcHJlc2VydmUgdGhlIGN1cnJlbnQgaG9vayBvcmRlci4gQ29udGVudCwgdmlldywgYW5kIGRlc3Ryb3lcbiAgICAvLyBob29rcyBmb3IgcHJvamVjdGVkIGNvbXBvbmVudHMgYW5kIGRpcmVjdGl2ZXMgbXVzdCBiZSBjYWxsZWQgKmJlZm9yZSogdGhlaXIgaG9zdHMuXG4gICAgZm9yIChsZXQgaSA9IHROb2RlLmRpcmVjdGl2ZVN0YXJ0LCBlbmQgPSB0Tm9kZS5kaXJlY3RpdmVFbmQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgY29uc3QgZGVmID0gdFZpZXcuZGF0YVtpXSBhcyBEaXJlY3RpdmVEZWY8YW55PjtcbiAgICAgIHF1ZXVlQ29udGVudEhvb2tzKGRlZiwgdFZpZXcsIGkpO1xuICAgICAgcXVldWVWaWV3SG9va3MoZGVmLCB0VmlldywgaSk7XG4gICAgICBxdWV1ZURlc3Ryb3lIb29rcyhkZWYsIHRWaWV3LCBpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFF1ZXVlcyBhZnRlckNvbnRlbnRJbml0IGFuZCBhZnRlckNvbnRlbnRDaGVja2VkIGhvb2tzIG9uIFRWaWV3ICovXG5mdW5jdGlvbiBxdWV1ZUNvbnRlbnRIb29rcyhkZWY6IERpcmVjdGl2ZURlZjxhbnk+LCB0VmlldzogVFZpZXcsIGk6IG51bWJlcik6IHZvaWQge1xuICBpZiAoZGVmLmFmdGVyQ29udGVudEluaXQpIHtcbiAgICAodFZpZXcuY29udGVudEhvb2tzIHx8ICh0Vmlldy5jb250ZW50SG9va3MgPSBbXSkpLnB1c2goaSwgZGVmLmFmdGVyQ29udGVudEluaXQpO1xuICB9XG5cbiAgaWYgKGRlZi5hZnRlckNvbnRlbnRDaGVja2VkKSB7XG4gICAgKHRWaWV3LmNvbnRlbnRIb29rcyB8fCAodFZpZXcuY29udGVudEhvb2tzID0gW10pKS5wdXNoKGksIGRlZi5hZnRlckNvbnRlbnRDaGVja2VkKTtcbiAgICAodFZpZXcuY29udGVudENoZWNrSG9va3MgfHwgKHRWaWV3LmNvbnRlbnRDaGVja0hvb2tzID0gW10pKS5wdXNoKGksIGRlZi5hZnRlckNvbnRlbnRDaGVja2VkKTtcbiAgfVxufVxuXG4vKiogUXVldWVzIGFmdGVyVmlld0luaXQgYW5kIGFmdGVyVmlld0NoZWNrZWQgaG9va3Mgb24gVFZpZXcgKi9cbmZ1bmN0aW9uIHF1ZXVlVmlld0hvb2tzKGRlZjogRGlyZWN0aXZlRGVmPGFueT4sIHRWaWV3OiBUVmlldywgaTogbnVtYmVyKTogdm9pZCB7XG4gIGlmIChkZWYuYWZ0ZXJWaWV3SW5pdCkge1xuICAgICh0Vmlldy52aWV3SG9va3MgfHwgKHRWaWV3LnZpZXdIb29rcyA9IFtdKSkucHVzaChpLCBkZWYuYWZ0ZXJWaWV3SW5pdCk7XG4gIH1cblxuICBpZiAoZGVmLmFmdGVyVmlld0NoZWNrZWQpIHtcbiAgICAodFZpZXcudmlld0hvb2tzIHx8ICh0Vmlldy52aWV3SG9va3MgPSBbXSkpLnB1c2goaSwgZGVmLmFmdGVyVmlld0NoZWNrZWQpO1xuICAgICh0Vmlldy52aWV3Q2hlY2tIb29rcyB8fCAodFZpZXcudmlld0NoZWNrSG9va3MgPSBbXSkpLnB1c2goaSwgZGVmLmFmdGVyVmlld0NoZWNrZWQpO1xuICB9XG59XG5cbi8qKiBRdWV1ZXMgb25EZXN0cm95IGhvb2tzIG9uIFRWaWV3ICovXG5mdW5jdGlvbiBxdWV1ZURlc3Ryb3lIb29rcyhkZWY6IERpcmVjdGl2ZURlZjxhbnk+LCB0VmlldzogVFZpZXcsIGk6IG51bWJlcik6IHZvaWQge1xuICBpZiAoZGVmLm9uRGVzdHJveSAhPSBudWxsKSB7XG4gICAgKHRWaWV3LmRlc3Ryb3lIb29rcyB8fCAodFZpZXcuZGVzdHJveUhvb2tzID0gW10pKS5wdXNoKGksIGRlZi5vbkRlc3Ryb3kpO1xuICB9XG59XG5cbi8qKlxuICogQ2FsbHMgb25Jbml0IGFuZCBkb0NoZWNrIGNhbGxzIGlmIHRoZXkgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gY2FsbGVkLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmlldyBUaGUgY3VycmVudCB2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlSW5pdEhvb2tzKFxuICAgIGN1cnJlbnRWaWV3OiBMVmlldywgdFZpZXc6IFRWaWV3LCBjaGVja05vQ2hhbmdlc01vZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKCFjaGVja05vQ2hhbmdlc01vZGUgJiYgY3VycmVudFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5SdW5Jbml0KSB7XG4gICAgZXhlY3V0ZUhvb2tzKGN1cnJlbnRWaWV3LCB0Vmlldy5pbml0SG9va3MsIHRWaWV3LmNoZWNrSG9va3MsIGNoZWNrTm9DaGFuZ2VzTW9kZSk7XG4gICAgY3VycmVudFZpZXdbRkxBR1NdICY9IH5MVmlld0ZsYWdzLlJ1bkluaXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGFmdGVyVmlld0luaXQgYW5kIGFmdGVyVmlld0NoZWNrZWQgZnVuY3Rpb25zIGFuZCBjYWxscyB0aGVtLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmlldyBUaGUgY3VycmVudCB2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlSG9va3MoXG4gICAgY3VycmVudFZpZXc6IExWaWV3LCBhbGxIb29rczogSG9va0RhdGEgfCBudWxsLCBjaGVja0hvb2tzOiBIb29rRGF0YSB8IG51bGwsXG4gICAgY2hlY2tOb0NoYW5nZXNNb2RlOiBib29sZWFuKTogdm9pZCB7XG4gIGlmIChjaGVja05vQ2hhbmdlc01vZGUpIHJldHVybjtcblxuICBjb25zdCBob29rc1RvQ2FsbCA9IGN1cnJlbnRWaWV3W0ZMQUdTXSAmIExWaWV3RmxhZ3MuRmlyc3RMVmlld1Bhc3MgPyBhbGxIb29rcyA6IGNoZWNrSG9va3M7XG4gIGlmIChob29rc1RvQ2FsbCkge1xuICAgIGNhbGxIb29rcyhjdXJyZW50VmlldywgaG9va3NUb0NhbGwpO1xuICB9XG59XG5cbi8qKlxuICogQ2FsbHMgbGlmZWN5Y2xlIGhvb2tzIHdpdGggdGhlaXIgY29udGV4dHMsIHNraXBwaW5nIGluaXQgaG9va3MgaWYgaXQncyBub3RcbiAqIHRoZSBmaXJzdCBMVmlldyBwYXNzLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmlldyBUaGUgY3VycmVudCB2aWV3XG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSBpbiB3aGljaCB0aGUgaG9va3MgYXJlIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSG9va3MoY3VycmVudFZpZXc6IGFueVtdLCBhcnI6IEhvb2tEYXRhKTogdm9pZCB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgKGFycltpICsgMV0gYXMoKSA9PiB2b2lkKS5jYWxsKGN1cnJlbnRWaWV3W2FycltpXSBhcyBudW1iZXJdKTtcbiAgfVxufVxuIl19