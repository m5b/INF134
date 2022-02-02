// importing local code, code we have written
import {Window, Widget, WidgetState, IWidgetStateEvent,States,InputType} from "./core";
// importing code from SVG.js library
import {SVG, Svg, G, Rect, Container, Text, Circle} from "./core";

class Button extends Widget{
    private _rect: Rect;
    private _group: G;
    private _text: Text;
    private _input: string;
    private defaultWidth: number = 80;
    private defaultHeight: number = 30;

    constructor(parent:Window){
        super(parent);
        this.height = this.defaultHeight;
        this.width = this.defaultWidth;
        this.render();
    }

    set text(text:string){
        this._input = text;
        this.update();
    }

    get text():string{
        return this._input;
    }

    set fontSize(size:number){
        this._text.font('size', size);
        this.update();
    }

    move(x: number, y: number): void {
        if(this._group != null)
            this._group.move(x,y);
    }

    render(): void {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._text = this._group.text("");
        this._text.x(4);
        this._text.y(19);

        this.backcolor = "silver";
    }
    update(): void {
        if(this._text != null)
            this._text.text(this.text);
        if(this._rect != null)
            this._rect.fill(this.backcolor);
    }
    transition(inputType: InputType, event: string): void {
        throw new Error("Method not implemented.");
    }
}

export {Button}