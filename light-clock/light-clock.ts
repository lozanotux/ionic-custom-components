import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'light-clock',
    templateUrl: 'light-clock.html' 
})

export class LightClock implements OnInit {
    ngOnInit() {
        this.clock();
        console.log("ME GUSTAN LOS TIPOS")
    }
    
    clock() {
        //calculate angle
        var d, h, m, s;
        d = new Date;
        
        h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
        m = 6 * d.getMinutes();
        s = 6 * d.getSeconds();
        
        //move hands
        this.setAttr('h-hand', h);
        this.setAttr('m-hand', m);
        this.setAttr('s-hand', s);
        this.setAttr('s-tail', s+180);
        
        //display time
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
        
        if(h >= 12){
          this.setText('suffix', 'PM');
        }else{
          this.setText('suffix', 'AM');
        }
        
        if(h != 12){
            h %= 12;
        }
        
        this.setText('sec', s);
        this.setText('min', m);
        this.setText('hr', h);
        
        //call every second
        setTimeout(() => {this.clock();}, 1000);
    }
    
    setAttr(id, val) {
        var v = 'rotate(' + val + ', 70, 70)';
        document.getElementById(id).setAttribute('transform', v);
    }
    
    setText(id, val) {
        if (val < 10) {
            val = '0' + val;
        }
        document.getElementById(id).innerHTML = val;
    }
}