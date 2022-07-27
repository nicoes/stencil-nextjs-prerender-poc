import { h } from "@stencil/core";

const Logo = () => <a href={'/'} class={'logo'}>
  <svg xmlns="http://www.w3.org/2000/svg" width="176" height="31" viewBox="0 0 176 31">
    <path d="M1.4 4.5v-3c0-.2.2-.4.4-.4h3.8c.2 0 .4.1.4.3v3c0 .2-.2.4-.4.4H1.8c-.2 0-.4-.1-.4-.3zM6 7.7v15.8c0 .2-.2.4-.4.4H1.8c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.8c.2.1.4.2.4.4zm6.5-.3c.2 0 .4.2.4.4v1.9h.1c.6-1 1.3-1.7 2.2-2.1.9-.4 1.9-.7 2.8-.7 1.2 0 2.2.2 3 .5.8.3 1.4.8 1.8 1.4.4.6.8 1.3.9 2.1.2.8.3 1.8.3 2.8v9.8c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4v-9c0-1.4-.2-2.4-.6-3.1-.4-.7-1.2-1-2.3-1-1.2 0-2.1.4-2.7 1.1-.6.7-.8 1.9-.8 3.6v8.3c0 .2-.2.4-.4.4H8.9c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.6zm23.2.3V10c0 .2-.2.4-.4.4h-3v8.2c0 .8.1 1.3.4 1.5.3.3.8.4 1.5.4h1c.2 0 .4.1.4.3v2.8c0 .2-.1.3-.3.4-.3 0-.6.1-1 .1h-1.4c-.7 0-1.4 0-2-.1-.6-.1-1.2-.3-1.7-.6s-.9-.7-1.1-1.2c-.3-.5-.4-1.2-.4-2v-9.8h-2.4c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h2.4V2.8c0-.2.2-.4.4-.4H32c.2 0 .4.2.4.4v4.6h3c.2 0 .3.1.3.3zM42.6 20c.7.7 1.7 1 2.9 1 .9 0 1.7-.2 2.4-.7.6-.4.9-.8 1.1-1.2.1-.1.2-.2.3-.2h3.3c.2 0 .4.2.3.5-.6 1.7-1.6 3-2.8 3.8-1.3.9-2.9 1.3-4.8 1.3-1.3 0-2.5-.2-3.5-.6-1-.4-1.9-1-2.7-1.8-.7-.8-1.3-1.7-1.7-2.7-.4-1.1-.6-2.2-.6-3.5 0-1.2.2-2.4.6-3.5.4-1.1 1-2 1.7-2.8.7-.8 1.6-1.4 2.7-1.8 1-.4 2.2-.7 3.4-.7 1.4 0 2.6.3 3.7.8 1 .5 1.9 1.3 2.6 2.2.7.9 1.2 2 1.5 3.1.3 1.1.4 2.2.3 3.3 0 .2-.2.3-.4.3H41.3c.2 1.4.6 2.5 1.3 3.2zm5.1-8.7c-.5-.6-1.4-.9-2.5-.9-.7 0-1.3.1-1.8.4-.5.2-.9.5-1.2.9-.3.4-.5.7-.6 1.2-.1.4-.2.8-.2 1.1h7.4c-.2-1.3-.6-2.1-1.1-2.7zm11.6-3.9c.2 0 .4.2.4.4v2.7h.1c.2-.5.5-1 .9-1.4.4-.4.8-.8 1.2-1.1.5-.3 1-.5 1.5-.7.5-.3 1-.4 1.6-.4.2 0 .5 0 .7.1.2 0 .3.2.3.3v3.5c0 .2-.2.4-.4.3h-1.3c-.8 0-1.5.1-2.1.4-.6.3-1 .7-1.4 1.1-.4.5-.6 1-.8 1.7-.1.6-.2 1.3-.2 2.1v7.1c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.7zM100.6 20c.7.7 1.7 1 2.9 1 .9 0 1.7-.2 2.4-.7.6-.4.9-.8 1.1-1.2.1-.1.2-.2.3-.2h3.3c.2 0 .4.2.3.5-.6 1.7-1.6 3-2.8 3.8-1.3.9-2.9 1.3-4.8 1.3-1.3 0-2.5-.2-3.5-.6-1-.4-1.9-1-2.7-1.8-.7-.8-1.3-1.7-1.7-2.7-.4-1.1-.6-2.2-.6-3.5 0-1.2.2-2.4.6-3.5.4-1.1 1-2 1.7-2.8.7-.8 1.6-1.4 2.7-1.8 1-.4 2.2-.7 3.4-.7 1.4 0 2.6.3 3.7.8 1 .5 1.9 1.3 2.6 2.2.7.9 1.2 2 1.5 3.1.3 1.1.4 2.2.3 3.3 0 .2-.2.3-.3.3H99.4c.1 1.4.5 2.5 1.2 3.2zm5.1-8.7c-.5-.6-1.4-.9-2.5-.9-.7 0-1.3.1-1.8.4-.5.2-.9.5-1.2.9-.3.4-.5.7-.6 1.2-.1.4-.2.8-.2 1.1h7.4c-.2-1.3-.6-2.1-1.1-2.7zm19.6 10.5c-.5.9-1.2 1.5-2.1 1.9-.9.4-1.8.6-2.9.6-1.2 0-2.3-.2-3.3-.7-.9-.5-1.7-1.1-2.3-2-.6-.8-1.1-1.8-1.4-2.8-.3-1.1-.5-2.2-.5-3.3 0-1.1.2-2.2.5-3.2s.8-1.9 1.4-2.7c.6-.8 1.4-1.4 2.3-1.9.9-.5 2-.7 3.2-.7 1 0 1.9.2 2.8.6.9.4 1.6 1 2.1 1.8h.1V5c0-.2.2-.4.4-.4l3.8-1.2c.2 0 .4.2.4.4v19.8c0 .2-.2.4-.4.4h-3.6c-.2 0-.4-.2-.4-.4l-.1-1.8zm-.2-8.2c-.1-.6-.3-1.2-.7-1.7-.3-.5-.7-.9-1.2-1.2-.5-.3-1.1-.4-1.9-.4-.7 0-1.4.1-1.9.4-.5.3-.9.7-1.2 1.2-.3.5-.5 1.1-.7 1.7-.1.6-.2 1.3-.2 2 0 .6.1 1.3.2 1.9.1.6.4 1.2.7 1.7.3.5.7.9 1.2 1.2.5.3 1.1.5 1.8.5s1.4-.1 1.9-.4c.5-.3.9-.7 1.2-1.2.3-.5.5-1.1.6-1.7.1-.6.2-1.3.2-2 .2-.7.1-1.3 0-2zm7.2-9.1V2.6c0-.2.2-.4.4-.4l3.8-1.2c.2 0 .4.2.4.4v3c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.1-.4-.3zm4.6 3.2v15.8c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.8c.2.1.4.2.4.4zM72.4 9.4V7.8c0-.2-.2-.4-.4-.4h-3.8c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4l3.8-1.2c.2-.1.4-.2.4-.4v-13z" fill="#f3f3fb"></path><path d="M92.5 26H68.4c-.3 0-.5.2-.5.4v3.8c0 .2.2.4.5.4h24.1c.3 0 .5-.2.5-.4v-3.8c.1-.2-.2-.4-.5-.4z" fill="#f4e956"></path><path d="M92.6 10.1c-.3-.8-.7-1.4-1.2-1.8-.5-.5-1.2-.8-1.9-1-.8-.3-1.6-.4-2.5-.4-1.1 0-2.1.3-3 .8-.8.5-1.4 1.1-1.9 1.8 0 .1-.1 0-.2 0-.4-.9-1.1-1.6-1.9-2-.9-.4-1.8-.6-2.9-.6-1.1 0-2 .2-2.9.7-.1.1-.2.1-.3.2-.1.1-.2.3-.2.4v2.4c0 .2.2.3.3.2.1-.1.3-.1.4-.2.4-.1.6-.1.8-.1.7 0 1.3.1 1.6.4.4.2.6.6.8 1 .2.4.2.8.3 1.3V20c0 .2.1.3.3.4l3.8-1.2c.2-.1.4-.2.4-.4v-4.1c0-.5 0-1 .1-1.5s.2-.9.4-1.3.5-.7.9-1c.4-.2.9-.4 1.5-.4s1.1.1 1.5.3c.4.2.7.5.8.9.2.4.3.8.4 1.3 0 .5.1 1 .1 1.6v2c0 .2.1.3.3.4l3.8-1.2c.2-.1.4-.2.4-.4v-2.5c.5-1.1.3-2 0-2.8zm47.4 2.4c-.2 0-.4-.2-.4-.4.1-.9.4-1.6.8-2.3.5-.7 1.1-1.3 1.8-1.7.7-.4 1.5-.7 2.4-.9.9-.2 1.8-.3 2.7-.3.8 0 1.7.1 2.5.2.9.1 1.6.3 2.3.7.7.3 1.3.8 1.7 1.4.4.6.7 1.4.7 2.4v8.6c0 .7 0 1.5.1 2.1.1.4.1.8.2 1.1.1.2-.1.5-.3.5h-3.8c-.2 0-.3-.1-.3-.3 0-.2-.1-.3-.1-.5-.1-.3-.1-.5-.1-.8-.7.7-1.6 1.3-2.6 1.6-1 .3-2 .4-3 .4-.8 0-1.5-.1-2.2-.3-.7-.2-1.3-.5-1.8-.9s-.9-.9-1.2-1.5c-.3-.6-.4-1.4-.4-2.2 0-.9.2-1.7.5-2.3.3-.6.8-1.1 1.3-1.5.5-.4 1.1-.6 1.8-.8.7-.2 1.3-.3 2-.4.7-.1 1.4-.2 2-.3.7-.1 1.2-.2 1.8-.3.5-.1.9-.3 1.2-.6.3-.2.4-.6.4-1.1 0-.5-.1-.9-.2-1.2-.2-.3-.4-.5-.6-.7-.3-.2-.6-.3-.9-.3-.4-.1-.7-.1-1.1-.1-.9 0-1.6.2-2.1.6-.5.3-.7.9-.9 1.6 0 .2-.2.3-.3.3H140zm10.1 3.3c-.2.2-.4.3-.7.4-.3.1-.6.2-.9.2-.3.1-.7.1-1 .2-.4 0-.7.1-1.1.2-.3.1-.7.1-1 .3-.3.1-.6.3-.9.4-.2.2-.4.4-.6.7-.1.3-.2.6-.2 1.1 0 .4.1.7.2 1 .1.3.4.5.6.7.3.2.6.3.9.3.3.1.7.1 1.1.1.9 0 1.6-.1 2.1-.4.5-.3.9-.7 1.1-1.1.2-.4.4-.8.4-1.3.1-.4.1-.8.1-1v-1.8zm7.1-11.3v-3c0-.2.2-.4.4-.4h3.8c.2 0 .4.2.4.4v3c0 .2-.2.4-.4.4h-3.8c-.3-.1-.4-.2-.4-.4zm4.5 3.2v15.8c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.8c.3.1.4.2.4.4zm6.7-.3c.2 0 .4.2.4.4v2.7h.1c.2-.5.5-1 .9-1.4.4-.4.8-.8 1.2-1.1.5-.3 1-.5 1.5-.7.5-.2 1.1-.3 1.7-.3.2 0 .5 0 .7.1.2 0 .3.2.3.3v3.5c0 .2-.2.4-.4.3h-1.3c-.8 0-1.5.1-2.1.4-.6.3-1 .7-1.4 1.1-.4.5-.6 1-.8 1.7-.1.6-.2 1.3-.2 2.1v7.1c0 .2-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4V7.7c0-.2.2-.4.4-.4h3.6z" fill="#f3f3fb"></path>
  </svg>
</a>

export default Logo