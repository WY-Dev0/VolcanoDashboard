# Kubernetes.IoK8sApiAutoscalingV2MetricStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerResource** | [**IoK8sApiAutoscalingV2ContainerResourceMetricStatus**](IoK8sApiAutoscalingV2ContainerResourceMetricStatus.md) |  | [optional] 
**external** | [**IoK8sApiAutoscalingV2ExternalMetricStatus**](IoK8sApiAutoscalingV2ExternalMetricStatus.md) |  | [optional] 
**object** | [**IoK8sApiAutoscalingV2ObjectMetricStatus**](IoK8sApiAutoscalingV2ObjectMetricStatus.md) |  | [optional] 
**pods** | [**IoK8sApiAutoscalingV2PodsMetricStatus**](IoK8sApiAutoscalingV2PodsMetricStatus.md) |  | [optional] 
**resource** | [**IoK8sApiAutoscalingV2ResourceMetricStatus**](IoK8sApiAutoscalingV2ResourceMetricStatus.md) |  | [optional] 
**type** | **String** | type is the type of metric source.  It will be one of \&quot;ContainerResource\&quot;, \&quot;External\&quot;, \&quot;Object\&quot;, \&quot;Pods\&quot; or \&quot;Resource\&quot;, each corresponds to a matching field in the object. Note: \&quot;ContainerResource\&quot; type is available on when the feature-gate HPAContainerMetrics is enabled | 


