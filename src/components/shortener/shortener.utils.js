// import { useState, useEffect } from "react";

// const [links, setlLinks] = useState([]);
// const [url, setUrl] = useState('')

// // Get shortened Url
// useEffect(() => {
//   async function getUrl() {
//     const res = await fetch(`https://rel.ink/api/links`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json",
//       },
//       body: JSON.stringify({ url: url }),
//     });
//     const json = res.json();
//     const hash = await json.then((obj) => obj.hashid);

//     setlLinks([...links, `https://rel.ink/${hash}`]);
//   }

//   getUrl()
// }, [url]);

// export { links, url, setUrl }
