// Types
import { PageCollection, PageDetail } from '../../types/frontendTypes';

/**
 * This function governs how paths are structured and to keep them consistent between the react
 * router and the nav-links that refer to them. At present, paths are a combination of a
 * pageCollection title and a page detail title. Any changes to this function will automatically
 * be carried over to how paths a created both for page routes in the react router and the sidebar
 * links that point to said pages
 *
 * @param pageCollection
 * @param pageDetail
 * @returns string used as path
 */
const pathMaker = (pageCollection: PageCollection, pageDetail: PageDetail) => {
  return `/${encodeURIComponent(pageCollection.collectionTitle)}/${encodeURIComponent(pageDetail.title)}`;
};

export default pathMaker;
