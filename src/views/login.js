
import { loginF } from "../fetch";

export const Login = () => {
  const template = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="295" height="92" viewBox="0 0 295 92">
  <defs>
      <path id="a" d="M95.99 88.897H.75V.06h95.24z"/>
  </defs>
  <g fill="none" fill-rule="evenodd">
      <path fill="#3555C3" fill-rule="nonzero" d="M72.368 60.073l5.37-44.717h11.135l-5.377 44.717H72.368zM79.582 0l-1.468 10.77H89.5L90.97 0H79.582zm130.814 0l-1.473 10.77h11.387L221.78 0h-11.384zM95.243 0l-1.28 10.655h15.923l-6.067 49.418h11.901l6.067-49.418h15.92L138.995 0H95.243z"/>
      <path fill="#3555C3" fill-rule="nonzero" d="M151.619 28.742c-.876-2.652-3.122-4.632-6.89-4.632-3.763 0-6.49 1.98-8.006 4.632-.88 1.63-1.283 2.834-1.605 4.812h16.949c.152-1.978.04-3.182-.448-4.812zm-17.42 12.45c-.687 5.753 2.313 9.954 8.559 9.954 4.887 0 6.512-2.021 9.673-4.854l8.076 4.001c-5.12 7.245-10.915 10.298-18.97 10.298-10.527 0-20.052-4.807-17.872-22.923 1.755-14.59 10.624-22.826 22.18-22.826 12.41 0 16.705 8.434 16.713 20.633 0 2.382-.364 5.718-.364 5.718h-27.995v-.001z"/>
      <path fill="#3555C3" fill-rule="nonzero" d="M186.627 60.073l-6.61-13.39-9.746 13.39h-13.36l18.156-22.835-12.175-21.882h13.355l6 12.79 9.153-12.79h13.36l-17.446 21.882 12.663 22.835h-13.35zm16.289 0l5.376-44.717h11.132l-5.376 44.717h-11.132zm34.782.517c-8.9 0-19.372-4.806-17.193-22.922 2.17-18.1 13.788-22.826 22.694-22.826 6.156 0 11.121 1.52 14.985 6.914l-9.423 6.64c-2.018-2.482-3.856-3.512-6.77-3.512-2.652 0-4.824.944-6.687 2.92-1.975 2.141-3.107 5.154-3.67 9.864-.566 4.724-.168 7.804 1.286 9.96 1.388 1.975 3.327 2.92 5.986 2.92 2.91 0 5.004-1.039 7.617-3.525l7.51 6.607c-4.323 5.163-10.169 6.96-16.335 6.96z"/>
      <path fill="#3555C3" fill-rule="nonzero" d="M281.415 26.858c-1.128-1.294-2.754-1.973-4.977-1.973-2.236 0-3.943.68-5.385 1.973-2.583 2.315-3.31 6.18-3.866 10.81-.565 4.642-.773 8.583 1.254 10.902 1.131 1.285 2.682 1.978 4.907 1.978 2.226 0 4.023-.693 5.46-1.978 2.588-2.319 3.323-6.26 3.876-10.901.554-4.63.767-8.496-1.27-10.81m5.25 28.232c-3.09 2.923-7.938 5.5-14.527 5.5-6.596 0-10.73-2.577-13.124-5.5-3.522-4.204-3.94-9.267-2.958-17.422.968-8.067 2.603-13.128 7.134-17.34 3.097-2.918 7.859-5.486 14.453-5.486 6.588 0 10.816 2.568 13.206 5.486 3.52 4.212 3.937 9.273 2.975 17.34-.99 8.155-2.627 13.218-7.16 17.422M0 8.933s.617 16.373 6.457 48.085h26.626s-2.505-8.715-2.505-10.214c0 0-19.187-28.25-22.486-32.158C4.798 10.744.753 6.976 0 8.933"/>
      <g transform="translate(0 3.065)">
          <mask id="b" fill="#fff">
              <use xlink:href="#a"/>
          </mask>
          <path fill="#3555C3" fill-rule="nonzero" d="M.75 3.467S2.248.912 11.843 14.136c9.594 13.219 27.133 38.468 31.78 44.776 4.641 6.314 15.964 20.402 18.099 23.12 2.135 2.728 4.077 5.137 8.43 5.744 4.34.599 13.159 2.445 25.837-.51 0 0-5.15-2.206-11.15-8.821-5.992-6.607-18.285-22.836-29.379-38.761-11.096-15.93-25.177-34.26-25.93-35.309-.748-1.061-2.098-3.011-5.096-3.607C21.437.158 7.94-1.338.751 3.468" mask="url(#b)"/>
      </g>
      <path fill="#3555C3" fill-rule="nonzero" d="M86.04 80.916s6.894 7.21 12.14 8.56c0 0 10.629-1.943 21.955-24.71l-21.783-.072s-5.267 9.456-12.311 16.222"/>
  </g>
</svg>
  <label for='email'>Correo electronico</label>
<input type='email' id='email' required placeholder='example@malito.com'>
<label for='password'>Contrase??a</label>
<input type='password' id='password' required placeholder='password'>
<button id='send'>Iniciar sesion</button> `;

  const div = document.createElement("div");
  div.className = "container-form";
  div.innerHTML = template;


  document.getElementById("root").appendChild(div);

  document.getElementById("send").addEventListener("click", () => {
    loginF({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    document.getElementById("root").removeChild(div);
  });
};
