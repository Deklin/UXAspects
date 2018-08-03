/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
import { FacetCheckListItemComponent } from './check-list-item/facet-check-list-item.component';
var FacetCheckListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FacetCheckListComponent, _super);
    function FacetCheckListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facets = [];
        _this.scrollbar = true;
        _this.expanded = true;
        _this.isFocused = false;
        _this.activeIndex = 0;
        return _this;
    }
    /**
     * @return {?}
     */
    FacetCheckListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusKeyManager = new FocusKeyManager(this.options)
            .withVerticalOrientation();
        this._focusKeyManager.change.pipe(takeUntil(this._onDestroy)).subscribe(function (index) { return _this.activeIndex = index; });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FacetCheckListComponent.prototype.onFocus = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this._focusKeyManager.activeItemIndex === -1) {
            this._focusKeyManager.setActiveItem(index);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FacetCheckListComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._focusKeyManager.onKeydown(event);
    };
    /**
     * @param {?} index
     * @param {?} facet
     * @return {?}
     */
    FacetCheckListComponent.prototype.toggleFacet = /**
     * @param {?} index
     * @param {?} facet
     * @return {?}
     */
    function (index, facet) {
        this.toggleFacetSelection(facet);
        this._focusKeyManager.setActiveItem(index);
    };
    FacetCheckListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-check-list',
                    template: "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<!-- Create a container which will show when section is expanded -->\n<div class=\"facet-check-list-container\"\n    tabindex=\"-1\"\n    role=\"listbox\"\n    [class.facet-check-list-scrollbar]=\"scrollbar\"\n    [class.facet-check-list-scrollbar-focused]=\"isFocused\"\n    *ngIf=\"expanded\">\n\n    <!-- Iterate through each possible facet -->\n    <ux-facet-check-list-item *ngFor=\"let facet of facets; let index = index\"\n        [facet]=\"facet\"\n        [tabbable]=\"activeIndex === index\"\n        [selected]=\"isFacetSelected(facet)\"\n        (selectedChange)=\"toggleFacet(index, facet)\"\n        (keydown)=\"onKeydown($event)\"\n        (itemFocus)=\"isFocused = true; onFocus(index)\"\n        (itemBlur)=\"isFocused = false\">\n    </ux-facet-check-list-item>\n\n</div>"
                }] }
    ];
    FacetCheckListComponent.propDecorators = {
        facets: [{ type: Input }],
        header: [{ type: Input }],
        scrollbar: [{ type: Input }],
        expanded: [{ type: Input }],
        options: [{ type: ViewChildren, args: [FacetCheckListItemComponent,] }]
    };
    return FacetCheckListComponent;
}(FacetBaseComponent));
export { FacetCheckListComponent };
function FacetCheckListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FacetCheckListComponent.prototype.facets;
    /** @type {?} */
    FacetCheckListComponent.prototype.header;
    /** @type {?} */
    FacetCheckListComponent.prototype.scrollbar;
    /** @type {?} */
    FacetCheckListComponent.prototype.expanded;
    /** @type {?} */
    FacetCheckListComponent.prototype.options;
    /** @type {?} */
    FacetCheckListComponent.prototype.isFocused;
    /** @type {?} */
    FacetCheckListComponent.prototype.activeIndex;
    /** @type {?} */
    FacetCheckListComponent.prototype._focusKeyManager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2stbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvZmFjZXQtY2hlY2stbGlzdC9mYWNldC1jaGVjay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0lBTW5ELG1EQUFrQjs7O3VCQUVoQyxFQUFFOzBCQUVDLElBQUk7eUJBQ0wsSUFBSTswQkFJWixLQUFLOzRCQUNKLENBQUM7Ozs7OztJQUl2QixpREFBZTs7O0lBQWY7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BELHVCQUF1QixFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUF4QixDQUF3QixDQUFDLENBQUM7S0FDOUc7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QztLQUNKOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxLQUFvQjtRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCw2Q0FBVzs7Ozs7SUFBWCxVQUFZLEtBQWEsRUFBRSxLQUFZO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlDOztnQkF0Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHMzQkFBZ0Q7aUJBQ25EOzs7eUJBR0ksS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxZQUFZLFNBQUMsMkJBQTJCOztrQ0FsQjdDO0VBVzZDLGtCQUFrQjtTQUFsRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c0tleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmFjZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9mYWNldC1iYXNlL2ZhY2V0LWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnLi4vbW9kZWxzL2ZhY2V0JztcbmltcG9ydCB7IEZhY2V0Q2hlY2tMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2stbGlzdC1pdGVtL2ZhY2V0LWNoZWNrLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LWNoZWNrLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1jaGVjay1saXN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrTGlzdENvbXBvbmVudCBleHRlbmRzIEZhY2V0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgZmFjZXRzOiBGYWNldFtdID0gW107XG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2Nyb2xsYmFyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAVmlld0NoaWxkcmVuKEZhY2V0Q2hlY2tMaXN0SXRlbUNvbXBvbmVudCkgb3B0aW9uczogUXVlcnlMaXN0PEZhY2V0Q2hlY2tMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhY3RpdmVJbmRleDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2ZvY3VzS2V5TWFuYWdlcjogRm9jdXNLZXlNYW5hZ2VyPEZhY2V0Q2hlY2tMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZvY3VzS2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXIodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5fZm9jdXNLZXlNYW5hZ2VyLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoaW5kZXggPT4gdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4KTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzS2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZm9jdXNLZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXQoaW5kZXg6IG51bWJlciwgZmFjZXQ6IEZhY2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRTZWxlY3Rpb24oZmFjZXQpO1xuICAgICAgICB0aGlzLl9mb2N1c0tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxufSJdfQ==