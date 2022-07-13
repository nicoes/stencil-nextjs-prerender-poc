import {h} from "@stencil/core";

export type SubMenuItem = {
  label: string,
  value: string
}

const SubMenu = ({listItems}: {listItems: SubMenuItem[]}) =>
  <div class={'sub-menu'}>
    <div class={'sub-menu-inner'}>
      <strong class={'sub-menu-title'}>Per plaats</strong>
      <ul class={'sub-menu-list'}>
        {listItems.map(item => <li><a href={item.value}>{item.label}</a></li>)}
      </ul>
    </div>
</div>

export default SubMenu
