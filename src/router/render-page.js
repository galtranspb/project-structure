export default async function (path, match) {
  const main = document.querySelector('main');

  main.classList.add('is-loading');

  const { default: Page } = await import(
    /* webpackChunkName: "[request]" */ `../pages/${path}/index.js`
  );
  let page;

  if (match) {
    const productId = match[1];

    page = new Page(productId);
  } else {
    page = new Page();
  }

  const element = await page.render();

  main.classList.remove('is-loading');

  const contentNode = document.querySelector('#content');

  contentNode.innerHTML = '';
  contentNode.append(element);

  return page;
}
