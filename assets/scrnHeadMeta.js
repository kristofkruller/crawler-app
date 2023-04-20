const srcnHeadMeta = `
<meta charset="utf-8">
<meta name="description" content="Crawling for third party libraries and analitical information">
<meta name="application-name" content="Web crawler for the top 50 websites">
<meta name="keywords" content="nexjs, react, tech, javascript, web, webdev, development, frontend, backend, fullstack">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="creator" content="Kristof Kruller">
<meta name="robots" content="index, follow">
<meta name="category" content="anlalitical web app">

<style>
  body main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--000);
    min-height: 100vh;
  }
  body div {
    width: 100%;
    height: 100vh;

    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
    padding: 2rem;

    display: block;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  body a {
    position: absolute;
    top: 2rem;
    left: 2rem;

    margin: 1rem;
    padding: .5rem;
    background: #1e1e24;
    border: #fffbfc solid thin;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    transition: all 245ms ease-in-out;

    &:hover {
      background: #F3BF2E;
      transition: all 245ms ease-in-out;
    }
  }
</style>
`
export default srcnHeadMeta;