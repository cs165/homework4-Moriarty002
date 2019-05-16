class GifDisplay {
  constructor(gifElement) {
    this.gifElement=gifElement;
    this.LoadnPlay=this.LoadnPlay.bind(this);
    this.getGif=this.getGif.bind(this);
    this.ChangeBackground=this.ChangeBackground.bind(this);
    this.url="";
    this.storage=null;
    this.index=1;
  }
  async LoadnPlay(value)
  {
      await this.getGif(value);
      this.gifElement.style.backgroundImage="url('"+this.url+"')";
  }
  async getGif(value)
  {
      var URL="?q="+value+"&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
      var myjason=await fetch("http://api.giphy.com/v1/gifs/search"+URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.storage=data;
          this.url=data.data[0].images.downsized.url;
        })
        .catch(err => {
          console.log(err);
        })
  }
  ChangeBackground()
  {
      this.url=this.storage.data[this.index].images.downsized.url;
      this.gifElement.style.backgroundImage="url('"+this.url+"')";
      this.index++;
      console.log(this.index);
  }
}
