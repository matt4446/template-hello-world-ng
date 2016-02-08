import {Component, HostListener, ElementRef, Input, Output, EventEmitter, ContentChildren,ContentChild, ViewChild,TemplateRef } from "angular2/core";
import {Button, StackLayout} from "ui";
import {alert} from "ui/dialogs";

@Component({
    selector: "my-app",
    template: `
<StackLayout #all orientation="vertical">
    <Label  [text]="message" class="title" (tap)="message = 'OHAI'"></Label>
    <Button #button text="click me" (tap)="onTap()"></Button>
</StackLayout>
`,
})
export class AppComponent {
    public message: string = "Hello, Angular!";
    
    private container: ElementRef;
    
    @ViewChild('all') 
    set _button(item: ElementRef){
        this.container = item;
    }
    
    public onTap() {
        console.log("clicked");
        let layout: StackLayout = this.container.nativeElement;
        
        let animationChain = layout.animate({
            translate: { x: 30, y: 0}
        });
        animationChain.then(()=>{
            let pass2 = layout.animate({
                translate: { x: 30, y: 0}
            }); 
            return pass2;
        });
        animationChain.then(()=>{
            alert("all done");
        });
        
    }
}