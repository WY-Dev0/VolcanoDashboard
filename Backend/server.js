import express from 'express';
import cors from 'cors';
import { KubeConfig, CustomObjectsApi } from '@kubernetes/client-node';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const kc = new KubeConfig();
kc.loadFromDefault();
console.log('Kubernetes config loaded');

const k8sApi = kc.makeApiClient(CustomObjectsApi);


app.get('/', (req, res) => {
  res.send('Welcome to the Volcano Jobs API');
});

app.get('/jobvolcanos', async (req, res) => {
  try {
    const opts = {
      allowWatchBookmarks: true,
      limit: 56,
      pretty: true,
      timeoutSeconds: 56,
      watch: false
    };

    const response = await k8sApi.listClusterCustomObject(
      'batch.volcano.sh',
      'v1alpha1',
      'jobs',
      opts
    );

    res.json(response.body);
  } catch (error) {
    console.error('API call error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/volcano-jobs/:namespace', async (req, res) => {
  console.log('Received request for /api/volcano-jobs');
  try {
    const { namespace } = req.params;
    const opts = {
      allowWatchBookmarks: true,
      limit: 56,
      pretty: true,
      timeoutSeconds: 56,
      watch: false
    };

    const response = await k8sApi.listNamespacedCustomObject(
      'batch.volcano.sh',
      'v1alpha1',
      namespace,
      'jobs',
      opts
    );
    console.log('Successfully retrieved jobs');
    res.json(response.body);
  } catch (error) {
    console.error('API call error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});