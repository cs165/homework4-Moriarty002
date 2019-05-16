class GifDisplay {
  constructor(gifElement) {
    this.gifElement=gifElement;
    this.LoadnPlay=this.LoadnPlay.bind(this);
    this.getGif=this.getGif.bind(this);
    this.ChangeBackground=this.ChangeBackground.bind(this);
    this.url="";
    this.storage=null;
    this.index=1;
    this.limit=0;
    this.back=this.gifElement.querySelector('#back');
    this.front=this.gifElement.querySelector('#front');
      this.front.style.zIndex=3;
      this.back.style.zIndex=2;
  }
  async LoadnPlay(value)
  {
      await this.getGif(value);
      this.back.style.backgroundImage="url('"+this.url+"')";//0
      this.url=this.storage.data[this.index].images.downsized.url;
      this.front.style.backgroundImage="url('"+this.url+"')";//1
      this.index++;//2

  }
  async getGif(value)
  {
      var URL="?q="+value+"&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
      var myjason=await fetch("https://api.giphy.com/v1/gifs/search"+URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if( data.data.length < 2 )
            {
                console.log(data.data.length);
            }
            this.limit=data.data.length;
            this.storage=data;
          this.url=data.data[0].images.downsized.url;
        })
        .catch(err => {
          console.log(err);
        })
  }
  ChangeBackground()
  {
      if(this.front.style.zIndex == 3)
      {
          this.back.style.zIndex=3;
          this.front.style.zIndex=2;
          this.url=this.storage.data[this.index].images.downsized.url;
          this.front.style.backgroundImage="url('"+this.url+"')";
          this.index++;
          this.index=this.index % this.limit;
      }
      else
      {
          this.front.style.zIndex=3;
          this.back.style.zIndex=2;
          this.url=this.storage.data[this.index].images.downsized.url;
          this.back.style.backgroundImage="url('"+this.url+"')";
          this.index++;
          this.index=this.index % this.limit;
      }
  }
}
