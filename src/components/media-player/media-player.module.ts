import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccessibilityModule } from '../../directives/accessibility/index';
import { ClickOutsideModule } from '../../directives/click-outside';
import { DurationPipeModule } from '../../pipes/duration/index';
import { FileSizePipeModule } from '../../pipes/file-size/index';
import { AudioServiceModule } from '../../services/audio/index';
import { FrameExtractionModule } from '../../services/frame-extraction/frame-extraction.module';
import { SliderModule } from '../slider/index';
import { TooltipModule } from '../tooltip/index';
import { MediaPlayerBaseExtensionDirective } from './extensions/base-extension.directive';
import { MediaPlayerControlsExtensionComponent } from './extensions/controls/controls.component';
import { MediaPlayerCustomControlDirective } from './extensions/controls/custom-control/custom-control.directive';
import { MediaPlayerTimelineExtensionComponent } from './extensions/timeline/timeline.component';
import { MediaPlayerComponent } from './media-player.component';

const DECLARATIONS = [
    MediaPlayerComponent,
    MediaPlayerTimelineExtensionComponent,
    MediaPlayerBaseExtensionDirective,
    MediaPlayerControlsExtensionComponent,
    MediaPlayerCustomControlDirective
];

@NgModule({
    imports: [
        CommonModule,
        FrameExtractionModule,
        TooltipModule,
        AudioServiceModule,
        DurationPipeModule,
        FileSizePipeModule,
        SliderModule,
        AccessibilityModule,
        A11yModule,
        ClickOutsideModule
    ],
    exports: DECLARATIONS,
    declarations: DECLARATIONS
})
export class MediaPlayerModule { }
