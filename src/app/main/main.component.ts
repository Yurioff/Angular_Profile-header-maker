
import { Component, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


    // Components menu Text
    
    titleText:string = "Hey! I'm.."
    subtitleText:string = "FullStack Developer"
    colorTitle: string = "#eab20f"
    colorSubtitle:string ="#5dcecc"
    titleSize:string = "50"
    subtitleSize:string = "17"
    titleFontFamily:string = "Arial"
    subtitleFontFamily:string = "Arial"
    widthBanner = "700"
    heightBanner = "200"

    // Components menu BG
    bgColor:string = "#252544"
    borderColor:string = "#eab20f"
    borderSize = "3"
    borderRadius = "10"
    borderType:string = "solid"

    //  components menu icon
    iconBg = '../../../assets/images/icons/16.png'
    iconSize = '50'
    

    mudarIcon(novaUrl: string) {
      this.iconBg = novaUrl;
    }

    @ViewChild('divRef') divRef:any;

    onDownload() {
      html2canvas(this.divRef.nativeElement).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'profile-header.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
}
