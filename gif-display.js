class GifDisplay {
  constructor(gifElement) {
    this.gifElement=gifElement;
    this.LoadnPlay=this.LoadnPlay.bind(this);
    this.getGif=this.getGif.bind(this);
    this.url="";
  }
  async LoadnPlay(value)
  {
      await this.getGif(value);
      console.log(this.url);
      this.gifElement.style.backgroundImage="url('"+this.url+"')";
      console.log("123");
  }
  async getGif(value)
  {
      var URL="?q="+value+"&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
      var myjason=await fetch("http://api.giphy.com/v1/gifs/search"+URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
          this.url=data.data[0].images.downsized.url;
        })
        .catch(err => {
          console.log(err);
        })
  }
}
