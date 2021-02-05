import { Component,ChangeDetectionStrategy, ViewChild, AfterViewInit  } from '@angular/core';
import { lyl, StyleRenderer, ThemeVariables, ThemeRef } from '@alyle/ui';
import { STYLES as BUTTON_STYLES } from '@alyle/ui/button';
import { ImgCropperConfig, ImgCropperEvent, LyImageCropper, ImgCropperErrorEvent, ImgCropperLoaderConfig } from '@alyle/ui/image-cropper';
import { Platform } from '@angular/cdk/platform';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  
  // Make sure button styles have been rendered
  ref.renderStyleSheet(BUTTON_STYLES);
  //constantes
  const button = ref.selectorsOf(BUTTON_STYLES);
  const { after } = theme;//declarado

  return {
    root: lyl `{
      ${button.root} {
        border-radius: 2em
      }
    }`,
    container: lyl `{
      display: flex
      justify-content: center
      ${button.root} {
        margin-${after}: 1em
      }
    }`,
    badge1: lyl `{
      border: 2px solid ${theme.background.tertiary}
      min-width: 20px
      height: 20px
      padding: 0 4px
    }`,
    badge2: lyl `{
      border: 2px solid ${theme.background.tertiary}
      min-width: 12px
      height: 12px
      padding: 0
    }`,
    cropper: lyl `{
      max-width: 400px
      height: 300px
    }`,
    sliderContainer: lyl `{
      text-align: center
      max-width: 400px
      margin: 14px
    }`
  }
};


@Component({
  selector: 'app-alyle-ui',
  templateUrl: './alyle-ui.component.html',
  styleUrls: ['./alyle-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    StyleRenderer
  ]
})
export class AlyleUIComponent implements AfterViewInit {

  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  croppedImage?: string;
  scale: any;
  ready: boolean;
  minScale: number;

  @ViewChild(LyImageCropper) cropper: LyImageCropper;
  myConfig: ImgCropperConfig = {
    // autoCrop: true,
    width: 150, // Default `250`
    height: 150, // Default `200`
    fill: '#ff2997', // Default transparent if type = png else #000
    type: 'image/png', // Or you can also use `image/jpeg`
    responsiveArea: true
  };

  constructor(
    readonly sRenderer: StyleRenderer,
    private _platform: Platform
  ) { }

  ngAfterViewInit() {

    // demo: Load image from URL and update position, scale & rotate
    // this is supported only for browsers
    if (this._platform.isBrowser) {
      const config: ImgCropperLoaderConfig = {
        scale: 0.745864772531767,
        xOrigin: 642.380608078103,
        yOrigin: 236.26357452128866,
        // areaWidth: 100,
        // areaHeight: 100,
        rotation: 0,
        originalDataURL: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2Flarm-rmah-47685-unsplash-1.png?alt=media&token=96a29be5-e3ef-4f71-8437-76ac8013372c'
      };
      this.cropper.loadImage(config);
    }

  }

  onCropped(e: ImgCropperEvent) {
    this.croppedImage = e.dataURL;
    console.log('cropped img: ', e);
  }
  onLoaded(e: ImgCropperEvent) {
    console.log('img loaded', e);
  }
  onError(e: ImgCropperErrorEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }

}




