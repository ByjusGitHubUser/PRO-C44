class Form {
    constructor(){
        this.titleImage = createImg('assets/start-menu.png');
        this.playButton = createButton('Play');
        this.storyButton = createButton('Story');
        this.rulesButton = createButton('Rules');
    }

    formPosition(){
        this.playButton.position(430,300);
        this.titleImage.position(430,230);
        this.titleImage.size(30,30);
        this.storyButton.position(430,340);
        this.rulesButton.position(430,380);
    }

    show(){
        this.formPosition();
    }
}