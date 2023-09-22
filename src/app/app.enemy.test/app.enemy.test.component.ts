import {AfterViewInit, Component, ElementRef, ViewChild, ViewRef} from '@angular/core';

@Component({
  selector: 'app-enemy-test',
  templateUrl: './app.enemy.test.component.html',
  styleUrls: ['./app.enemy.test.component.css']
})
export class AppEnemyTestComponent implements AfterViewInit{
@ViewChild('EnemyImg') _enemyImg: ElementRef;
public _x:number;
public _y:number;

public constructor() {
  this._x = 0;
  this._y = 0;
  this._enemyImg = ViewChild("EnemyImg")
}

  ngAfterViewInit(): void {
    console.log("X=", this._enemyImg.nativeElement.x);
    console.log("Y=", this._enemyImg.nativeElement.y);

    console.log("Style=", this._enemyImg.nativeElement.style);
    //console.log("Y=", this._enemyImg.nativeElement.setPosition(200, 100));

    let pageWidth:number = window.innerWidth;
    let pageHeight:number = window.innerHeight;


    setInterval(function (_this:AppEnemyTestComponent, pageWidth:number, pageHeight:number) {
      _this._x+=1;
      _this._y+=1;

      if  ((_this._x > pageWidth - 50) || (_this._y > pageHeight - 50) ||
          (_this._x < 0) || (_this._y < 0)) {
        let side = Math.trunc(Math.random()*4);
        console.log("side=", side);

        switch (side){
          case  0://top
            _this._x = Math.trunc(Math.random()*pageWidth);
            _this._y = 0;
            break;
          case  1://bottom
            _this._x = Math.trunc(Math.random()*pageWidth);
            _this._y = pageHeight-50;
            break;
          case  2://left
            _this._x = 0;
            _this._y = Math.trunc(Math.random()*pageHeight);
            break;
          case  3://right
            _this._x = pageWidth-50;
            _this._y = Math.trunc(Math.random()*pageHeight);
            break;
        }
      }
      console.log("X=", _this._x);
      console.log("Y=", _this._y);
      _this._enemyImg.nativeElement.style.top = `${_this._y}px`;
      _this._enemyImg.nativeElement.style.left = `${_this._x}px`;
    }, 40, this, pageWidth, pageHeight);
  }


}
