import {h} from "@stencil/core";
import {AnchorListItem} from "./SubMenu";
import AnchorList from "./AnchorList";

export const careerListItems: AnchorListItem[] =[
  {
    label: 'Carrièretips',
    value: '/carriere'
  },
  {
    label: 'Actueel',
    value: '/carriere/actueel'
  },
  {
    label: 'Motivatiebrief',
    value: '/carriere/motivatiebrief'
  },
  {
    label: 'Salaris',
    value: '/carriere/salaris'
  },
  {
    label: 'Sollicitatiegesprek',
    value: '/carriere/sollicitatiegesprek'
  },
  {
    label: 'Curriculum Vitae',
    value: '/carriere/curriculum-vitae'
  },
  {
    label: 'Carrière Ontwikkeling',
    value: '/carriere/carriere-ontwikkeling'
  },
  {
    label: 'Personal Branding',
    value: '/carriere/personal-branding'
  }
]


const DropdownContainerCareer = () =>
  <div class="dropdown-container">
    <div class="container">
        <ul class={'dropdown-list'}>
          <AnchorList listItems={careerListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
        </ul>
    </div>
  </div>

export default DropdownContainerCareer
