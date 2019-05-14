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
  constructor() {
      this.AudioPlayer=new AudioPlayer();
      this.GifDisplay=new GifDisplay();
      this.PlayButton=new PlayButton();

  }
  Show()
  {

  }
  // TODO(you): Add methods as necessary.
}
