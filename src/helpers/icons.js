import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlus,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';


const Icons = () => {
 return library.add(
   faTrash,
   faSignOutAlt,
   faEdit,
   faSpinner,
   faPlus,
   faEnvelope,
   faLock
 );
}

export default Icons;
