class MusicScreen {
  constructor(musicElement) {
      var buttonElement=document.querySelector('#PausePlay');
      var gifElement=document.querySelector('#player');
      this.audioPlayer=new AudioPlayer();
      this.Hide=this.Hide.bind(this);
      this.Show=this.Show.bind(this);
      this._onkick=this._onkick.bind(this);
      this.Change=this.Change.bind(this);
      this.GIF_callback=this.GIF_callback.bind(this);

      this.musicElement=musicElement;
      this.GifDisplay=new GifDisplay(gifElement);
      this.PlayButton=new PlayButton(buttonElement);
      this.music=null;
      this.gif=null;
      this.parent=null;

      this.btn=buttonElement.querySelector('img');
      this.btn.addEventListener('click',this.Change);
      this.CompareSrc=this.btn.src;

  }
    Hide()
    {
        this.musicElement.classList.add('inactive');
    }
    async Show(music,gif,App)
    {
        this.musicElement.classList.remove('inactive');
        this.music=music;
        this.gif=gif;
        this.parent=App;
        //console.log(this.music.url);
        //console.log(this.gif);
        this.GifDisplay.LoadnPlay(this.gif,this);
        this.audioPlayer.setSong(music.url);
        this.audioPlayer.setKickCallback(this._onkick);
        this.audioPlayer.play();
    }
    _onkick()
    {
        console.log('kick');
        this.GifDisplay.ChangeBackground();
    }
    Change()
    {
        if(this.btn.src == this.CompareSrc)
        {
            this.btn.src="images/play.png";
            this.audioPlayer.pause();
        }
        else
        {
            this.btn.src="images/pause.png";
            this.audioPlayer.play();
        }
    }
    GIF_callback()
    {
        this.parent.Music_Callback();
    }
}
