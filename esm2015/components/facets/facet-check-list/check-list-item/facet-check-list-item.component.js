/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Facet } from '../../models/facet';
export class FacetCheckListItemComponent {
    constructor() {
        this.facet = null;
        this.selected = false;
        this.tabbable = false;
        this.selectedChange = new EventEmitter();
        this.itemFocus = new EventEmitter();
        this.itemBlur = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.facet && this.facet.disabled;
    }
    /**
     * @return {?}
     */
    getLabel() {
        return this.facet ? this.facet.title : '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.option.nativeElement.focus();
    }
}
FacetCheckListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-check-list-item',
                template: "<div #option\n    class=\"facet-check-list-item\"\n    [class.facet-active]=\"selected\"\n    [attr.aria-checked]=\"selected\"\n    role=\"option\"\n    [tabindex]=\"tabbable ? 0 : -1\"\n    (focus)=\"itemFocus.emit()\"\n    (blur)=\"itemBlur.emit()\"\n    (click)=\"selectedChange.emit(facet)\"\n    (keydown.enter)=\"selectedChange.emit(facet)\"\n    (keydown.space)=\"selectedChange.emit(facet); $event.preventDefault()\"\n    (keydown.spacebar)=\"selectedChange.emit(facet); $event.preventDefault()\"\n    [class.disabled]=\"facet?.disabled\">\n\n    <!-- Show check icon to indicate the state -->\n    <span class=\"facet-check-list-item-check\" aria-hidden=\"true\">\n        <span class=\"hpe-icon hpe-active\"></span>\n    </span>\n\n    <!-- Display the title -->\n    <span class=\"facet-check-list-item-title\">\n        {{ facet?.title }}\n    </span>\n\n    <!-- Display the count if specified -->\n    <span class=\"facet-check-list-item-count\"\n        *ngIf=\"facet?.count !== undefined\"\n        attr.aria-label=\"{{ facet?.count }}\"\n        i18n-aria-label>\n        ({{ facet?.count }})\n    </span>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
FacetCheckListItemComponent.propDecorators = {
    facet: [{ type: Input }],
    selected: [{ type: Input }],
    tabbable: [{ type: Input }],
    selectedChange: [{ type: Output }],
    itemFocus: [{ type: Output }],
    itemBlur: [{ type: Output }],
    option: [{ type: ViewChild, args: ['option',] }]
};
function FacetCheckListItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FacetCheckListItemComponent.prototype.facet;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.selected;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.tabbable;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.selectedChange;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.itemFocus;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.itemBlur;
    /** @type {?} */
    FacetCheckListItemComponent.prototype.option;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2stbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9mYWNldC1jaGVjay1saXN0L2NoZWNrLWxpc3QtaXRlbS9mYWNldC1jaGVjay1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzNDLE1BQU07O3FCQUVzQixJQUFJO3dCQUNDLEtBQUs7d0JBQ0wsS0FBSzs4QkFDUCxJQUFJLFlBQVksRUFBUzt5QkFDOUIsSUFBSSxZQUFZLEVBQVE7d0JBQ3pCLElBQUksWUFBWSxFQUFROzs7OztJQUc3QyxJQUFJLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztLQUM1Qzs7OztJQUVELFFBQVE7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUM3Qzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNyQzs7O1lBekJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxzbkNBQXFEO2dCQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7O29CQUdJLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO3FCQUNOLFNBQVMsU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhY2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1eC1mYWNldC1jaGVjay1saXN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1jaGVjay1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEZvY3VzYWJsZU9wdGlvbiB7XG5cbiAgICBASW5wdXQoKSBmYWNldDogRmFjZXQgPSBudWxsO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdGFiYmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZhY2V0PigpO1xuICAgIEBPdXRwdXQoKSBpdGVtRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIGl0ZW1CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBWaWV3Q2hpbGQoJ29wdGlvbicpIG9wdGlvbjogRWxlbWVudFJlZjtcblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZXQgJiYgdGhpcy5mYWNldC5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNldCA/IHRoaXMuZmFjZXQudGl0bGUgOiAnJztcbiAgICB9XG5cbiAgICBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cbiJdfQ==