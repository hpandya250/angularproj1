import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filetest';
  fileContent: string | ArrayBuffer = '';
  fileName : string;
  public onChange(fileList: FileList): void {
    let file = fileList[0];
    this.fileName = file.name;
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
  }
}
