module App.Painter {
    export interface IPainter {
        name: string;
        portrait: string;
        biography: string;
        style: string;
        examples: string[];
    }

    export class Painter implements IPainter {
        name: string;
        portrait: string;
        biography: string;
        style: string;
        examples: string[];

        constructor(painter: IPainter) {
            this.name = painter.name;
            this.portrait = painter.portrait;
            this.biography = painter.biography;
            this.style = painter.style;
            this.examples = painter.examples;
        }

    }
} 