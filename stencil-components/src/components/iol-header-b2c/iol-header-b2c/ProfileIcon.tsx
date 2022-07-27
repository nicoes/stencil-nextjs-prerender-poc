import {h} from "@stencil/core";

const ProfileIcon = ({ withFill, className }: { withFill?: boolean, className?: string}) => <svg class={className} width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9.5" stroke="#232D3D"/>
  <mask id="a" style={{"mask-type":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="#232D3D"/>
  </mask>
  <g mask="url(#a)">
    <path d="M3.757 17.161a9.504 9.504 0 0 1 2.535-1.588A6.169 6.169 0 0 0 10 16.823a6.169 6.169 0 0 0 3.708-1.25c.93.395 1.784.933 2.535 1.588A9.462 9.462 0 0 1 10 19.5a9.462 9.462 0 0 1-6.243-2.339Z" fill={withFill ? "#232D3D" : ''} stroke="#232D3D"/>
  </g>
  <path d="M10 3.792c2.029 0 3.875 2.06 3.875 4.875 0 1.307-.668 2.536-1.546 3.458-.436.457-.906.82-1.338 1.066-.446.255-.793.35-.991.35-.198 0-.545-.095-.991-.35a6.008 6.008 0 0 1-1.338-1.066c-.878-.922-1.546-2.15-1.546-3.458 0-2.816 1.846-4.875 3.875-4.875Z" fill={withFill ? "#232D3D" : ''} stroke="#232D3D" stroke-width="1.25"/>
</svg>

export default ProfileIcon
