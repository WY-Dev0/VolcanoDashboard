# Kubernetes.IoK8sApiCoreV1NodeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[IoK8sApiCoreV1NodeAddress]**](IoK8sApiCoreV1NodeAddress.md) | List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node&#39;s address in its own status or consumers of the downward API (status.hostIP). | [optional] 
**allocatable** | **{String: String}** | Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. | [optional] 
**capacity** | **{String: String}** | Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity | [optional] 
**conditions** | [**[IoK8sApiCoreV1NodeCondition]**](IoK8sApiCoreV1NodeCondition.md) | Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition | [optional] 
**config** | [**IoK8sApiCoreV1NodeConfigStatus**](IoK8sApiCoreV1NodeConfigStatus.md) |  | [optional] 
**daemonEndpoints** | [**IoK8sApiCoreV1NodeDaemonEndpoints**](IoK8sApiCoreV1NodeDaemonEndpoints.md) |  | [optional] 
**images** | [**[IoK8sApiCoreV1ContainerImage]**](IoK8sApiCoreV1ContainerImage.md) | List of container images on this node | [optional] 
**nodeInfo** | [**IoK8sApiCoreV1NodeSystemInfo**](IoK8sApiCoreV1NodeSystemInfo.md) |  | [optional] 
**phase** | **String** | NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.  Possible enum values:  - &#x60;\&quot;Pending\&quot;&#x60; means the node has been created/added by the system, but not configured.  - &#x60;\&quot;Running\&quot;&#x60; means the node has been configured and has Kubernetes components running.  - &#x60;\&quot;Terminated\&quot;&#x60; means the node has been removed from the cluster. | [optional] 
**runtimeHandlers** | [**[IoK8sApiCoreV1NodeRuntimeHandler]**](IoK8sApiCoreV1NodeRuntimeHandler.md) | The available runtime handlers. | [optional] 
**volumesAttached** | [**[IoK8sApiCoreV1AttachedVolume]**](IoK8sApiCoreV1AttachedVolume.md) | List of volumes that are attached to the node. | [optional] 
**volumesInUse** | **[String]** | List of attachable volumes in use (mounted) by the node. | [optional] 



## Enum: PhaseEnum


* `Pending` (value: `"Pending"`)

* `Running` (value: `"Running"`)

* `Terminated` (value: `"Terminated"`)




