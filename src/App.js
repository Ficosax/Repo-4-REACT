import React from "react";
import { movies } from './components/movies';

let films = [
  {
    name: "Whiplash",
    date: 15 - 10 - 2014,
    genre: "Drama, Music",
    imdbLink: <a href="https://www.imdb.com/title/tt2582802/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=V3Z3CBG45Z6613DYYYZS&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_43">HIT on me!</a>,
    imgUrl: <img src="https://www.imdb.com/title/tt2582802/mediaviewer/rm4252022785/" alt="Whiplash" width="400" />
  },
  {
    name: "Batman",
    date: 4 - 4 - 2022,
    genre: "Action, Crime, Comics",
    imdbLink: <a href="https://www.imdb.com/title/tt1877830/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=V3Z3CBG45Z6613DYYYZS&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_134">Batman</a>,
    imgUrl: <img src="https://www.imdb.com/title/tt1877830/mediaviewer/rm252242689/" alt="Batman" width="500" />
  },
  {
    name: "The chronicles of Riddick",
    date: 11 - 6 - 2004,
    genre: "Action, Adventure, Sci-Fi, Thriller",
    imdbLink: <a href="https://www.imdb.com/title/tt0296572/">Riddick</a>,
    imgUrl: <img src="https://www.imdb.com/title/tt0296572/mediaviewer/rm29691904/" alt="Riddick" width="450" />
  }
];

export const App = () => {
  return (
    <div>
      <movies listaNaFilmovi={films}/>
    </div>
  );
};