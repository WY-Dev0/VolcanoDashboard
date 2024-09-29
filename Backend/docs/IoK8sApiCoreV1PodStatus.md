# Kubernetes.IoK8sApiCoreV1PodStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[IoK8sApiCoreV1PodCondition]**](IoK8sApiCoreV1PodCondition.md) | Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions | [optional] 
**containerStatuses** | [**[IoK8sApiCoreV1ContainerStatus]**](IoK8sApiCoreV1ContainerStatus.md) | The list has one entry per container in the manifest. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status | [optional] 
**ephemeralContainerStatuses** | [**[IoK8sApiCoreV1ContainerStatus]**](IoK8sApiCoreV1ContainerStatus.md) | Status for any ephemeral containers that have run in this pod. | [optional] 
**hostIP** | **String** | hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod | [optional] 
**hostIPs** | [**[IoK8sApiCoreV1HostIP]**](IoK8sApiCoreV1HostIP.md) | hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod. | [optional] 
**initContainerStatuses** | [**[IoK8sApiCoreV1ContainerStatus]**](IoK8sApiCoreV1ContainerStatus.md) | The list has one entry per init container in the manifest. The most recent successful init container will have ready &#x3D; true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status | [optional] 
**message** | **String** | A human readable message indicating details about why the pod is in this condition. | [optional] 
**nominatedNodeName** | **String** | nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled. | [optional] 
**phase** | **String** | The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod&#39;s status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase  Possible enum values:  - &#x60;\&quot;Failed\&quot;&#x60; means that all containers in the pod have terminated, and at least one container has terminated in a failure (exited with a non-zero exit code or was stopped by the system).  - &#x60;\&quot;Pending\&quot;&#x60; means the pod has been accepted by the system, but one or more of the containers has not been started. This includes time before being bound to a node, as well as time spent pulling images onto the host.  - &#x60;\&quot;Running\&quot;&#x60; means the pod has been bound to a node and all of the containers have been started. At least one container is still running or is in the process of being restarted.  - &#x60;\&quot;Succeeded\&quot;&#x60; means that all containers in the pod have voluntarily terminated with a container exit code of 0, and the system is not going to restart any of these containers.  - &#x60;\&quot;Unknown\&quot;&#x60; means that for some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod. Deprecated: It isn&#39;t being set since 2015 (74da3b14b0c0f658b3bb8d2def5094686d0e9095) | [optional] 
**podIP** | **String** | podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated. | [optional] 
**podIPs** | [**[IoK8sApiCoreV1PodIP]**](IoK8sApiCoreV1PodIP.md) | podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet. | [optional] 
**qosClass** | **String** | The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes  Possible enum values:  - &#x60;\&quot;BestEffort\&quot;&#x60; is the BestEffort qos class.  - &#x60;\&quot;Burstable\&quot;&#x60; is the Burstable qos class.  - &#x60;\&quot;Guaranteed\&quot;&#x60; is the Guaranteed qos class. | [optional] 
**reason** | **String** | A brief CamelCase message indicating details about why the pod is in this state. e.g. &#39;Evicted&#39; | [optional] 
**resize** | **String** | Status of resources resize desired for pod&#39;s containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to \&quot;Proposed\&quot; | [optional] 
**resourceClaimStatuses** | [**[IoK8sApiCoreV1PodResourceClaimStatus]**](IoK8sApiCoreV1PodResourceClaimStatus.md) | Status of resource claims. | [optional] 
**startTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 



## Enum: PhaseEnum


* `Failed` (value: `"Failed"`)

* `Pending` (value: `"Pending"`)

* `Running` (value: `"Running"`)

* `Succeeded` (value: `"Succeeded"`)

* `Unknown` (value: `"Unknown"`)





## Enum: QosClassEnum


* `BestEffort` (value: `"BestEffort"`)

* `Burstable` (value: `"Burstable"`)

* `Guaranteed` (value: `"Guaranteed"`)




