chrome-video-helper
===================
- [ ] skip to specified time
  ```js
  document.getElementsByTagName("video" /*"audio"*/)[0].currentTime = 1;
  ```
- [ ] `ArrowUp` / `ArrowDown` volume control
- [x] Get current time as ffmpeg format `hh:mm:ss.xxx` (by pressing `ArrowDown`)
- [ ] Loop
  ```js
  document.getElementsByTagName("video" /*"audio"*/)[0].loop = true;
  ```
- [ ] Play video as audio
  ```js
  // replace `<video>` to `<audio>`
  <audio controls src="movie.mp4"></audio>
  ```
