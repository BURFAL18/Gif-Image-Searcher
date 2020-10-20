import React from "react";
import GifPlayer from "react-gif-player";

const GifList = (props) => {
  var gifs = props.results.map((result) => {
    return (
      <div key={result.id}>
        <GifPlayer
          gif={result.media[0].gif.url}
          still={result.media[0].gif.preview}
        />
        {console.log(result.media[0].tinygif.preview)}
      </div>
    );
  });

  return <div>{gifs}</div>;
};

export default GifList;