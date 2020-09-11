import React, { Fragment } from "react";
import { UrlsContainer, Url, Link } from "./display-urls.styles";

import CustomButton from "../custom-button/custom-button.component";
import { links } from "../shortener/shortener.utils";

const DisplayUrls = () => {
  return (
    <Fragment>
      <UrlsContainer>
        <Url>
          https://stackoverflow.com/questions/23698555/cut-or-yank-an-entire-tag-in-vim
        </Url>
        {/*link} */}
        <Link href="https://stackoverflow.com/questions/23698555/cut-or-yank-an-entire-tag-in-vim">
          https://rel.ink/nVW2Xa
        </Link>{" "}
        <CustomButton>Copy</CustomButton>
      </UrlsContainer>
      {/* {links.maps(link => (

      ))} */}
    </Fragment>
  );
};

export default DisplayUrls;
