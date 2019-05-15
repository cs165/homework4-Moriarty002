class PlayButton {
  constructor(buttonElement) {
      this.Change=this.Change.bind(this);
    this.buttonElement=buttonElement;
    this.btn=this.buttonElement.querySelector('img');
    this.btn.addEventListener('click',this.Change);
    this.CompareSrc=this.btn.src;
  }
  Change()
  {
      if(this.btn.src == this.CompareSrc)
        this.btn.src="images/play.png";
      else
          this.btn.src="images/pause.png";
  }
}
