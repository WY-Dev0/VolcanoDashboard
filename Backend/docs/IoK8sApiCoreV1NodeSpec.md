# Kubernetes.IoK8sApiCoreV1NodeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configSource** | [**IoK8sApiCoreV1NodeConfigSource**](IoK8sApiCoreV1NodeConfigSource.md) |  | [optional] 
**externalID** | **String** | Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966 | [optional] 
**podCIDR** | **String** | PodCIDR represents the pod IP range assigned to the node. | [optional] 
**podCIDRs** | **[String]** | podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6. | [optional] 
**providerID** | **String** | ID of the node assigned by the cloud provider in the format: &lt;ProviderName&gt;://&lt;ProviderSpecificNodeID&gt; | [optional] 
**taints** | [**[IoK8sApiCoreV1Taint]**](IoK8sApiCoreV1Taint.md) | If specified, the node&#39;s taints. | [optional] 
**unschedulable** | **Boolean** | Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration | [optional] 


