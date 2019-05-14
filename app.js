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


      var musicElement=null;

      this.MenuScreen = new MenuScreen(formElement);
      this.MusicScreen = new MusicScreen(musicElement);
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
        this.MenuScreen.hide();
        let choice=document.querySelectorAll('option');
        let gif=document.querySelector('input');
        var music;
        for(var i of choice)
            if(i.selected)
                music=i;
        console.log(gif);
        console.log(music.dataset);
    }
}
