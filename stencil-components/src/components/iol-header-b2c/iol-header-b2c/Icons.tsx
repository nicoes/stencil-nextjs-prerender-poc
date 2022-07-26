import {h} from "@stencil/core";

const paths = {
  'menu': () => <path d="M0 4h24v2H0zM0 11h24v2H0zM0 18h24v2H0z"/>,
}

const Icon = (path) => ({ className }: { className?: string }) => <svg class={className} width="24" height="24" fill="#323232"
                         xmlns="http://www.w3.org/2000/svg">
  {path()}
  </svg>

const Icons = {
  'menu': Icon(paths.menu)
}

export default Icons
