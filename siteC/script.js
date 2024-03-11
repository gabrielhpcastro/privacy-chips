function setCookie(event) {
  event.preventDefault();

  const { cookieName, cookieValue, cookiePartitioned } = Object.fromEntries(new FormData(event.target));

  console.log({ cookieName, cookieValue, cookiePartitioned });

  if (!cookieName || !cookieValue) {
    return;
  }

  document.cookie = `${cookieName}=${cookieValue}${cookiePartitioned === 'on' ? '; Partitioned' : ''}`;
  alert('Cookie created!');

  readCookies();
}

function onLoad() {
  const header = document.querySelector('header');
  const welcomeMessage = document.querySelector('main > h1');
  const isIframe = window !== window.parent;

  if (isIframe) {
    header.classList.add('hidden');
    welcomeMessage.classList.add('hidden');
  }

  readCookies();
}

function readCookies() {
  const cookies = document.cookie && document.cookie.split(';');
  const el = document.getElementById('cookies');

  if (el) {
    el.innerHTML = '';

    if (cookies.length) {
      cookies.forEach((cookie) => {
        const p = document.createElement('p');
        p.innerText = cookie;
        el.appendChild(p);
      });
    } else {
      el.innerText = 'No cookies set';
    }
  }
}
