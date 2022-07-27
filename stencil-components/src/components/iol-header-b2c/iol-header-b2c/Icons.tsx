import {h} from "@stencil/core";

const paths = {
  'menu': () => <path  d="M1.1.8h25v2h-25zM1.1 10.1h25v2h-25zM1.1 19.4h18.1v2H1.1z" />,
}

const Icon = (path) => ({ className }: { className?: string }) => <svg class={className} width="24" height="24" fill="#323232"
                         xmlns="http://www.w3.org/2000/svg">
  {path()}
  </svg>

const Icons = {
  'menu': Icon(paths.menu)
}

export default Icons
