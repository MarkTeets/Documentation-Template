// Types
import { PageDirectory } from '../types/frontendTypes';

// Pages
import DetailA1 from './pages/TopicA/DetailA1';
import DetailA2 from './pages/TopicA/DetailA2';
import DetailA3 from './pages/TopicA/DetailA3';
import DetailB1 from './pages/TopicB/DetailB1';
import DetailB2 from './pages/TopicB/DetailB2';
import DetailB3 from './pages/TopicB/DetailB3';

const pageDirectory: PageDirectory = [
  {
    collectionTitle: 'TopicA',
    pages: [
      { title: 'DetailA1', element: DetailA1 },
      { title: 'DetailA2', element: DetailA2 },
      { title: 'DetailA3', element: DetailA3 }
    ]
  },
  {
    collectionTitle: 'TopicB',
    pages: [
      { title: 'DetailB1', element: DetailB1 },
      { title: 'DetailB2', element: DetailB2 },
      { title: 'DetailB3', element: DetailB3 }
    ]
  }
];

export default pageDirectory;
