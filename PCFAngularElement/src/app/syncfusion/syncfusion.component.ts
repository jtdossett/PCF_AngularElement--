import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import './styles.css';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService
  ],
})
export class SyncfusionComponent {
  public service: string =
  'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
public document: string = 'PDF_Succinctly.pdf';
ngOnInit(): void {
}

}
