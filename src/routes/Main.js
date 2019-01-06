import { mainPath } from 'helpers/routes';
import CatalogPageContainer from 'containers/CatalogPageContainer';

export default {
  path: mainPath(),
  component: CatalogPageContainer,
  exact: true,
  strict: true
};
