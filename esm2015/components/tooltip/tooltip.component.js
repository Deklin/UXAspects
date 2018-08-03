/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
let /** @type {?} */ uniqueTooltipId = 0;
export class TooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Define a unique id for each tooltip
         */
        this.id = `ux-tooltip-${++uniqueTooltipId}`;
        /**
         * Define the tooltip role
         */
        this.role = 'tooltip';
        /**
         * Allow a custom class to be added to the tooltip to allow custom styling
         */
        this.customClass = '';
        /**
         * Indicates whether or not the content is a string or a TemplateRef
         */
        this.isTemplateRef = false;
        /**
         * Emit when the tooltip need to update it's position
         */
        this.reposition$ = new Subject();
    }
    /**
     * Cleanup after the component is destroyed
     * @return {?}
     */
    ngOnDestroy() {
        this.reposition$.complete();
    }
    /**
     * Inform the parent directive that it needs to recalulate the position
     * @return {?}
     */
    reposition() {
        this.reposition$.next();
    }
    /**
     * This will update the content of the tooltip and trigger change detection
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        this.content = content;
        this.isTemplateRef = content instanceof TemplateRef;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * This will update the tooltip placement and trigger change detection
     * @param {?} placement
     * @return {?}
     */
    setPlacement(placement) {
        if (!placement) {
            return;
        }
        this.placement = placement;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * This will set a custom class on the tooltip and trigger change detection
     * @param {?} customClass
     * @return {?}
     */
    setClass(customClass) {
        if (!customClass) {
            return;
        }
        this.customClass = customClass;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the context used by the TemplateRef
     * @param {?} context
     * @return {?}
     */
    setContext(context) {
        if (!context) {
            return;
        }
        this.context = context;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Specify the tooltip role attribute
     * @param {?} role
     * @return {?}
     */
    setRole(role) {
        if (!role) {
            return;
        }
        this.role = role;
        this._changeDetectorRef.markForCheck();
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-tooltip',
                template: "<div class=\"tooltip in\" [id]=\"id\" [attr.role]=\"role\" [ngClass]=\"[placement, customClass]\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\" (cdkObserveContent)=\"reposition()\">\n        <ng-container *ngIf=\"!isTemplateRef\">{{ content }}</ng-container>\n        <ng-container *ngIf=\"isTemplateRef\" [ngTemplateOutlet]=\"content\" [ngTemplateOutletContext]=\"context\"></ng-container>\n    </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
function TooltipComponent_tsickle_Closure_declarations() {
    /**
     * Define a unique id for each tooltip
     * @type {?}
     */
    TooltipComponent.prototype.id;
    /**
     * Define the tooltip role
     * @type {?}
     */
    TooltipComponent.prototype.role;
    /**
     * The content of the tooltip, either a string or a TemplateRef for further customization
     * @type {?}
     */
    TooltipComponent.prototype.content;
    /**
     * Allow the user to supply a context for the tooltip TemplateRef
     * @type {?}
     */
    TooltipComponent.prototype.context;
    /**
     * The position the tooltip should display relative to the associated element
     * @type {?}
     */
    TooltipComponent.prototype.placement;
    /**
     * Allow a custom class to be added to the tooltip to allow custom styling
     * @type {?}
     */
    TooltipComponent.prototype.customClass;
    /**
     * Indicates whether or not the content is a string or a TemplateRef
     * @type {?}
     */
    TooltipComponent.prototype.isTemplateRef;
    /**
     * Emit when the tooltip need to update it's position
     * @type {?}
     */
    TooltipComponent.prototype.reposition$;
    /** @type {?} */
    TooltipComponent.prototype._changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXZDLHFCQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFPeEIsTUFBTTs7OztJQTBCSixZQUFzQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7OztrQkF2QjlDLGNBQWMsRUFBRSxlQUFlLEVBQUU7Ozs7b0JBRy9CLFNBQVM7Ozs7MkJBWUYsRUFBRTs7Ozs2QkFHQyxLQUFLOzs7OzJCQUdoQixJQUFJLE9BQU8sRUFBUTtLQUU4Qjs7Ozs7SUFHL0QsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDN0I7Ozs7O0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7Ozs7OztJQUdELFVBQVUsQ0FBQyxPQUFrQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sWUFBWSxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hDOzs7Ozs7SUFHRCxZQUFZLENBQUMsU0FBMEI7UUFFckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7Ozs7OztJQUdELFFBQVEsQ0FBQyxXQUFtQjtRQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7Ozs7OztJQUdELFVBQVUsQ0FBQyxPQUFZO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hDOzs7Ozs7SUFHRCxPQUFPLENBQUMsSUFBWTtRQUVsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7O1lBNUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsb2NBQXVDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVZpQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yUGxhY2VtZW50IH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxubGV0IHVuaXF1ZVRvb2x0aXBJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V4LXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKiBEZWZpbmUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggdG9vbHRpcCAqL1xuICBpZDogc3RyaW5nID0gYHV4LXRvb2x0aXAtJHsrK3VuaXF1ZVRvb2x0aXBJZH1gO1xuXG4gIC8qKiBEZWZpbmUgdGhlIHRvb2x0aXAgcm9sZSAqL1xuICByb2xlOiBzdHJpbmcgPSAndG9vbHRpcCc7XG5cbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSB0b29sdGlwLCBlaXRoZXIgYSBzdHJpbmcgb3IgYSBUZW1wbGF0ZVJlZiBmb3IgZnVydGhlciBjdXN0b21pemF0aW9uICovXG4gIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIEFsbG93IHRoZSB1c2VyIHRvIHN1cHBseSBhIGNvbnRleHQgZm9yIHRoZSB0b29sdGlwIFRlbXBsYXRlUmVmICovXG4gIGNvbnRleHQ6IGFueTtcblxuICAvKiogVGhlIHBvc2l0aW9uIHRoZSB0b29sdGlwIHNob3VsZCBkaXNwbGF5IHJlbGF0aXZlIHRvIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgKi9cbiAgcGxhY2VtZW50OiBBbmNob3JQbGFjZW1lbnQ7XG5cbiAgLyoqIEFsbG93IGEgY3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSB0b29sdGlwIHRvIGFsbG93IGN1c3RvbSBzdHlsaW5nICovXG4gIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBjb250ZW50IGlzIGEgc3RyaW5nIG9yIGEgVGVtcGxhdGVSZWYgKi9cbiAgaXNUZW1wbGF0ZVJlZjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBFbWl0IHdoZW4gdGhlIHRvb2x0aXAgbmVlZCB0byB1cGRhdGUgaXQncyBwb3NpdGlvbiAqL1xuICByZXBvc2l0aW9uJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgLyoqIENsZWFudXAgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXBvc2l0aW9uJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEluZm9ybSB0aGUgcGFyZW50IGRpcmVjdGl2ZSB0aGF0IGl0IG5lZWRzIHRvIHJlY2FsdWxhdGUgdGhlIHBvc2l0aW9uICovXG4gIHJlcG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5yZXBvc2l0aW9uJC5uZXh0KCk7XG4gIH1cblxuICAvKiogVGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29udGVudCBvZiB0aGUgdG9vbHRpcCBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uICovXG4gIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5pc1RlbXBsYXRlUmVmID0gY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoaXMgd2lsbCB1cGRhdGUgdGhlIHRvb2x0aXAgcGxhY2VtZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gKi9cbiAgc2V0UGxhY2VtZW50KHBsYWNlbWVudDogQW5jaG9yUGxhY2VtZW50KSB7XG5cbiAgICBpZiAoIXBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFRoaXMgd2lsbCBzZXQgYSBjdXN0b20gY2xhc3Mgb24gdGhlIHRvb2x0aXAgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiAqL1xuICBzZXRDbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBpZiAoIWN1c3RvbUNsYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGNvbnRleHQgdXNlZCBieSB0aGUgVGVtcGxhdGVSZWYgKi9cbiAgc2V0Q29udGV4dChjb250ZXh0OiBhbnkpOiB2b2lkIHtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogU3BlY2lmeSB0aGUgdG9vbHRpcCByb2xlIGF0dHJpYnV0ZSAqL1xuICBzZXRSb2xlKHJvbGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgaWYgKCFyb2xlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yb2xlID0gcm9sZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufSJdfQ==