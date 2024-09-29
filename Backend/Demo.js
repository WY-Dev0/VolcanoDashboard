async function main() {
    try {
      const k8s = await import('@kubernetes/client-node');
  
      // Configure API client
      const kc = new k8s.KubeConfig();
      kc.loadFromDefault();
      
      // Create BatchVolcanoShV1alpha1Api instance
      const apiInstance = kc.makeApiClient(k8s.CustomObjectsApi);
  
      // Set optional parameters
      const opts = {
        'allowWatchBookmarks': true,
        'continue': undefined,
        'fieldSelector': undefined,
        'labelSelector': undefined,
        'limit': 56,
        'pretty': true,
        'resourceVersion': undefined,
        'resourceVersionMatch': undefined,
        'sendInitialEvents': true,
        'timeoutSeconds': 56,
        'watch': false,
        'show-managed-fields': false,
      };
  
      // Call listBatchVolcanoShV1alpha1JobForAllNamespaces method
      const response = await apiInstance.listClusterCustomObject(
        'batch.volcano.sh',
        'v1alpha1',
        'jobs',
        opts
      );
  
      console.log('API call successful. Returned data:');
      console.log(JSON.stringify(response.body, null, 2));
  
      // Process the returned data
      if (response.body.items && response.body.items.length > 0) {
        console.log(`Found ${response.body.items.length} Volcano Jobs:`);
        response.body.items.forEach((job, index) => {
          console.log(`Job ${index + 1}:`);
          console.log(`  Name: ${job.metadata.name}`);
          console.log(`  Namespace: ${job.metadata.namespace}`);
          console.log(`  Creation Time: ${job.metadata.creationTimestamp}`);
          console.log(`  Status: ${job.status ? job.status.state.phase : 'Unknown'}`);
        });
      } else {
        console.log('No Volcano Jobs found.');
      }
    } catch (error) {
      console.error('API call error:', error);
    }
  }
  
  main().catch(console.error);