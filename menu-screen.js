// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(formElement) {
      this.hide=this.hide.bind(this);
      this.SongList=null;
      this.Array=['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
      this.formElement=formElement;
      let RandNum=Math.floor(Math.random() * Math.floor(this.Array.length));
      let Element=document.querySelector('#query-input');
      Element.setAttribute("value",this.Array[RandNum]);

      this.DoThis(this);
  }
  async DoThis(ITEM)
  {
      await fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
          .then(response => {
              return response.json()
          })
          .then(data => {
              console.log("fetching");
              ITEM.SongList=data;
              console.log(ITEM.SongList);
              const select = document.querySelector('#song-selector');
              for (let i of Object.keys(ITEM.SongList))
              {
                  var option = document.createElement("option");
                  option.innerText=""+i+"";
                  option.setAttribute("data-url",ITEM.SongList[i].songUrl);
                  option.setAttribute("data-title",ITEM.SongList[i].title);
                  option.setAttribute("data-artist",ITEM.SongList[i].artist);
                  select.appendChild(option);

              }

          })
          .catch(err => {
              console.log(err);
          })

      console.log("fetching over");
  }

  hide()
  {
      this.formElement.classList.add('inactive');
  }
}
