import { Component } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // Components menu Text
  titleText:string = "Hey! I'm [Your Name]"
  subtitleText:string = "FullStack Developer"
  colorTitle: string = "#eab20f"
  colorSubtitle:string ="#5dcecc"
  titleSize:string = ""
  subtitleSize:string = ""
  titleFontFamily:string = ""
  subtitleFontFamily:string = ""
  widthBanner = "700"
  heightBanner = "200"

  // Components menu BG
  bgColor:string = "#252544"
  borderColor:string = "#eab20f"
  borderSize = "10"
  borderRadius = "10"
  borderType:string = "hidde"


}
