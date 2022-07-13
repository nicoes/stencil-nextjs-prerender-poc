import {h} from "@stencil/core";

export type SubMenuItem = {
  label: string,
  value: string
}

const calculatePlaceholderListLength = listItems => {
  // Substract two items if possible to get appropriate spanning of placeholder list
  if(listItems.length > 2) {
    return listItems.length - 2
  }
  return 0;
}

const SubMenu = ({listItems}: {listItems: SubMenuItem[]}) => <div class={'sub-menu-wrapper'}>
  <div class={'sub-menu-placeholder-list'}>
    {Array(calculatePlaceholderListLength(listItems)).fill(null).map(() => <span class={'sub-menu-placeholder-item'}/>)}
  </div>
  <div class={'sub-menu'}>
  <strong class={'sub-menu-title'}>Per plaats</strong>
  <ul class={'sub-menu-list'}>
    {listItems.map(item => <li><a href={item.value}>{item.label}</a></li>)}
  </ul>
</div>
</div>

export default SubMenu
