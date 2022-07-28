import {h} from "@stencil/core";

const paths = {
  'menu': () => <path d="M1.1.8h25v2h-25zM1.1 10.1h25v2h-25zM1.1 19.4h18.1v2H1.1z" />,
  'close': () => <path d="M21.999.195l1.843 1.844-9.677 9.675 9.677 9.678-1.843 1.843-9.677-9.677-9.677 9.677-1.843-1.843 9.677-9.677L.802 2.04 2.645.195l9.677 9.676L21.999.195z" />
}

const Icon = (path) => ({ className }: { className?: string }) => <svg class={className} width="24" height="24" fill="#323232"
                         xmlns="http://www.w3.org/2000/svg">
  {path()}
  </svg>

const Icons = {
  'menu': Icon(paths.menu),
  'close': Icon(paths.close)
}

export default Icons
