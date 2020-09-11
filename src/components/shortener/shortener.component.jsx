import React, { useState, useEffect } from "react";
import { setUrl, url } from "./shortener.utils";

import {
  ShortenerContainer,
  InputShortener,
  UrlShortenerContainer,
} from "./shortener.styles";

import CustomButton from "../custom-button/custom-button.component";

const Shortener = () => {
  //   // const [links, setlLinks] = useState([]);
  //   // const [url, setUrl] = useState("");

  //   // // Get shortened Url
  //   // useEffect(() => {
  //   //   async function getUrl() {
  //   //     const res = await fetch(`https://rel.ink/api/links/`, {
  //   //       method: "POST",
  //   //       headers: {
  //   //         "Content-Type": "Application/json",
  //   //       },
  //   //       body: JSON.stringify({ url: url }),
  //   //     });
  //   //     const json = res.json();
  //   //     const hash = await json.then((obj) => obj.hashid);

  //   //     setlLinks([...links, `https://rel.ink/${hash}`]);
  //   //   }

  //   //   getUrl()
  //   // }, [url]);

  //   // const getUrl = async () => await setUrl(url);
  return (
    <UrlShortenerContainer>
      <ShortenerContainer>
        <InputShortener
          type="url"
          value={url}
          // onChange={(event) => setUrl(event.target.value)}
          placeholder="Shorten a link here..."
        />
        <CustomButton square>Shorten It!</CustomButton>
      </ShortenerContainer>
    </UrlShortenerContainer>
  );
};

export default Shortener;
