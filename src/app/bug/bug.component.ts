import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements AfterViewInit {
  @ViewChild('BugImg') _bugImg: ElementRef;
  public _x: number;
  public _y: number;

  public constructor() {
    let pageWidth:number = window.innerWidth;
    let pageHeight:number = window.innerHeight;
    if(Math.random() > 0.5)
    {
      this._x = 0;
      this._y = Math.trunc(Math.random() * pageHeight);
    }
    else
    {
      this._x = Math.trunc(Math.random() * pageWidth);
      this._y = 0;
    }
    this._bugImg = ViewChild("BugImg")
  }

  ngAfterViewInit(): void {
    setInterval(function (_this:BugComponent){
      let pageWidth : number = window.innerWidth;
      let pageHeight : number = window.innerHeight;

      let centerX : number = Math.trunc(pageWidth / 2);
      let centerY : number = Math.trunc(pageHeight / 2);

      let angle = Math.PI -
        Math.atan(
        (centerX - _this._x) /
        (centerY - _this._y)
      );

      let angle2 = Math.PI / 2 +
          Math.atan(
            (centerY - _this._y) /
            (centerX - _this._x));

      if(_this._x < Math.trunc(pageWidth / 2))
      {
        _this._x+=1;
      }
      else if(_this._x > Math.trunc(pageWidth / 2))
      {
        _this._x-=1;
      }
      if(_this._y < Math.trunc(pageHeight / 2))
      {
        _this._y+=1;
      }
      else if(_this._y > Math.trunc(pageHeight / 2))
      {
        _this._y-=1;
      }
      console.log(_this._bugImg);
      console.log("X=", _this._x);
      console.log("Y=", _this._y);
      console.log("angle", angle);
      _this._bugImg.nativeElement.style.left = `${_this._x}px`;
      _this._bugImg.nativeElement.style.top = `${_this._y}px`;
      _this._bugImg.nativeElement.style.rotate = `${angle}rad`;
    },40, this);
  }
}
