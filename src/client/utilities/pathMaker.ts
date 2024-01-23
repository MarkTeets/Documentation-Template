// Types
import { PageCollection, PageDetail } from '../../types/frontendTypes';

const pathMaker = (pageCollection: PageCollection, pageDetail: PageDetail) => {
  return `/${pageCollection.collectionTitle}/${pageDetail.title}`;
};

export default pathMaker;
