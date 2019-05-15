// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
      this.Submit=this.Submit.bind(this);
      this.CheckKey=this.CheckKey.bind(this);
      this.ToMusic=this.ToMusic.bind(this);

      var formElement = document.querySelector('form');
      formElement.addEventListener('submit',this.Submit);
      document.addEventListener('keydown',this.CheckKey);

      var menuElement=document.querySelector('#menu');
      var musicElement=document.querySelector('#music');
      this.MenuScreen = new MenuScreen(menuElement);
      this.MusicScreen = new MusicScreen(musicElement);

      this.MusicScreen.Hide();
  }
    Submit(event)
    {
        event.preventDefault();
        this.ToMusic();
    }
    CheckKey(e)//some bug here
    {
        if(e.which===13)
        {
            this.ToMusic();
        }
    }
    ToMusic()
    {
        this.MenuScreen.Hide();
        let choice=document.querySelectorAll('option');
        let gif=document.querySelector('input');
        var music;
        for(var i of choice)
            if(i.selected)
                music=i;
        this.MusicScreen.Show(music.dataset,gif.value);
    }
}
