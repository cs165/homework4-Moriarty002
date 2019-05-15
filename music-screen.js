// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(musicElement) {
      var buttonElement=document.querySelector('#PausePlay');
      this.Hide=this.Hide.bind(this);
      this.Show=this.Show.bind(this);
      this.musicElement=musicElement;
      this.AudioPlayer=new AudioPlayer();
      this.GifDisplay=new GifDisplay();
      this.PlayButton=new PlayButton(buttonElement);
      this.music=null;
      this.gif=null;

  }
    Hide()
    {
        this.musicElement.classList.add('inactive');
    }
    Show(music,gif)
    {
        this.musicElement.classList.remove('inactive');
        this.music=music;
        this.gif=gif;
        console.log(this.music);
        console.log(this.gif);
    }
  // TODO(you): Add methods as necessary.
}
