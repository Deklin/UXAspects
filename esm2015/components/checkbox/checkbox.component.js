/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
};
let /** @type {?} */ uniqueCheckboxId = 0;
export class CheckboxComponent {
    constructor() {
        this._checkboxId = `ux-checkbox-${++uniqueCheckboxId}`;
        this.id = this._checkboxId;
        this.tabindex = 0;
        this.clickable = true;
        this.simplified = false;
        this.indeterminateValue = -1;
        this.disabled = false;
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.valueChange = new EventEmitter();
        this._value = false;
        this.indeterminate = false;
        this.focused = false;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // determine if it is in the indeterminate state
        this.indeterminate = this._value === this.indeterminateValue;
        // determine the checked state
        this.ariaChecked = this.indeterminate ? 'mixed' : this._value;
        // invoke change event
        this.valueChange.emit(this._value);
        // call callback
        this.onChangeCallback(this._value);
        this.onTouchedCallback();
    }
    /**
     * @return {?}
     */
    get inputId() {
        return `${this.id || this._checkboxId}-input`;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled || !this.clickable) {
            return;
        }
        if (this.value === this.indeterminateValue) {
            this.value = true;
            return;
        }
        // toggle the checked state
        this.value = !this.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this._value) {
            this._value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-checkbox',
                template: "<label [attr.for]=\"inputId\"\n       class=\"ux-checkbox\"\n       [class.ux-checkbox-checked]=\"value === true\"\n       [class.ux-checkbox-indeterminate]=\"indeterminate\"\n       [class.ux-checkbox-simplified]=\"simplified\"\n       [class.ux-checkbox-disabled]=\"disabled\"\n       [class.ux-checkbox-focused]=\"focused\">\n\n    <div class=\"ux-checkbox-container\">\n        <input type=\"checkbox\"\n               class=\"ux-checkbox-input\"\n               [id]=\"inputId\"\n               [required]=\"required\"\n               [checked]=\"value\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabindex]=\"tabindex\"\n               [indeterminate]=\"indeterminate\"\n               [attr.aria-label]=\"ariaLabel\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"ariaChecked\"\n               (focus)=\"focused = true\"\n               (blur)=\"focused = false\"\n               (change)=\"$event.stopPropagation()\"\n               (click)=\"toggle()\">\n    </div>\n\n    <span class=\"ux-checkbox-label\">\n        <ng-content></ng-content>\n    </span>\n</label>\n",
                providers: [CHECKBOX_VALUE_ACCESSOR]
            }] }
];
CheckboxComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    tabindex: [{ type: Input }],
    clickable: [{ type: Input }],
    simplified: [{ type: Input }],
    indeterminateValue: [{ type: Input }],
    disabled: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    valueChange: [{ type: Output }],
    value: [{ type: Input }]
};
function CheckboxComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CheckboxComponent.prototype._checkboxId;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.required;
    /** @type {?} */
    CheckboxComponent.prototype.tabindex;
    /** @type {?} */
    CheckboxComponent.prototype.clickable;
    /** @type {?} */
    CheckboxComponent.prototype.simplified;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminateValue;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.ariaLabel;
    /** @type {?} */
    CheckboxComponent.prototype.ariaLabelledby;
    /** @type {?} */
    CheckboxComponent.prototype.valueChange;
    /** @type {?} */
    CheckboxComponent.prototype._value;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.ariaChecked;
    /** @type {?} */
    CheckboxComponent.prototype.focused;
    /** @type {?} */
    CheckboxComponent.prototype.onTouchedCallback;
    /** @type {?} */
    CheckboxComponent.prototype.onChangeCallback;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLHVCQUF1QixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixxQkFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFPekIsTUFBTTs7MkJBRTRCLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtrQkFFM0MsSUFBSSxDQUFDLFdBQVc7d0JBR1YsQ0FBQzt5QkFDQyxJQUFJOzBCQUNILEtBQUs7a0NBQ0QsQ0FBQyxDQUFDO3dCQUNSLEtBQUs7eUJBQ08sRUFBRTs4QkFDUSxJQUFJOzJCQUVaLElBQUksWUFBWSxFQUFPO3NCQTRCNUMsS0FBSzs2QkFFRixLQUFLO3VCQUVYLEtBQUs7aUNBRVEsR0FBRyxFQUFFLElBQUk7Z0NBQ0osR0FBRyxFQUFFLElBQUk7Ozs7O0lBakM5QyxJQUNJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztRQUdwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDOztRQUc3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFHOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxRQUFRLENBQUM7S0FDakQ7Ozs7SUFXRCxNQUFNO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQztTQUNWO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7OztJQUlELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNKOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7S0FDOUI7OztZQTFGSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDJzQ0FBd0M7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDOzs7aUJBS0ksS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUssU0FBQyxZQUFZOzZCQUNsQixLQUFLLFNBQUMsaUJBQWlCOzBCQUV2QixNQUFNO29CQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbmxldCB1bmlxdWVDaGVja2JveElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1eC1jaGVja2JveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBwcml2YXRlIF9jaGVja2JveElkOiBzdHJpbmcgPSBgdXgtY2hlY2tib3gtJHsrK3VuaXF1ZUNoZWNrYm94SWR9YDtcblxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl9jaGVja2JveElkO1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzaW1wbGlmaWVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZVZhbHVlOiBhbnkgPSAtMTtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nID0gbnVsbDtcblxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgaXQgaXMgaW4gdGhlIGluZGV0ZXJtaW5hdGUgc3RhdGVcbiAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdGhpcy5fdmFsdWUgPT09IHRoaXMuaW5kZXRlcm1pbmF0ZVZhbHVlO1xuXG4gICAgICAgIC8vIGRldGVybWluZSB0aGUgY2hlY2tlZCBzdGF0ZVxuICAgICAgICB0aGlzLmFyaWFDaGVja2VkID0gdGhpcy5pbmRldGVybWluYXRlID8gJ21peGVkJyA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgIC8vIGludm9rZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcblxuICAgICAgICAvLyBjYWxsIGNhbGxiYWNrXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgeyBcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaWQgfHwgdGhpcy5fY2hlY2tib3hJZH0taW5wdXRgO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBmYWxzZTtcblxuICAgIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhcmlhQ2hlY2tlZDogYm9vbGVhbiB8IHN0cmluZztcbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmNsaWNrYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHRoaXMuaW5kZXRlcm1pbmF0ZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgY2hlY2tlZCBzdGF0ZVxuICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb25zIHJlcXVpcmVkIHRvIHVwZGF0ZSBuZ01vZGVsXG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgfVxufVxuIl19