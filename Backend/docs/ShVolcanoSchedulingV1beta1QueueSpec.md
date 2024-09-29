# Kubernetes.ShVolcanoSchedulingV1beta1QueueSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity** | [**ShVolcanoSchedulingV1beta1QueueSpecAffinity**](ShVolcanoSchedulingV1beta1QueueSpecAffinity.md) |  | [optional] 
**capability** | **{String: Object}** | ResourceList is a set of (resource name, quantity) pairs. | [optional] 
**deserved** | **{String: Object}** | The amount of resources configured by the user. This part of resource can be shared with other queues and reclaimed back. | [optional] 
**extendClusters** | [**[ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner]**](ShVolcanoSchedulingV1beta1QueueSpecExtendClustersInner.md) | extendCluster indicate the jobs in this Queue will be dispatched to these clusters. | [optional] 
**guarantee** | [**ShVolcanoSchedulingV1beta1QueueSpecGuarantee**](ShVolcanoSchedulingV1beta1QueueSpecGuarantee.md) |  | [optional] 
**parent** | **String** | Parent define the parent of queue | [optional] 
**reclaimable** | **Boolean** | Reclaimable indicate whether the queue can be reclaimed by other queue | [optional] 
**type** | **String** | Type define the type of queue | [optional] 
**weight** | **Number** |  | [optional] 


