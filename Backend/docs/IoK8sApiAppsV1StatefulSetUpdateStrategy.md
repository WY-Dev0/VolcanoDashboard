# Kubernetes.IoK8sApiAppsV1StatefulSetUpdateStrategy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollingUpdate** | [**IoK8sApiAppsV1RollingUpdateStatefulSetStrategy**](IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.md) |  | [optional] 
**type** | **String** | Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.  Possible enum values:  - &#x60;\&quot;OnDelete\&quot;&#x60; triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet&#39;s currentRevision.  - &#x60;\&quot;RollingUpdate\&quot;&#x60; indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet&#39;s updateRevision. | [optional] 



## Enum: TypeEnum


* `OnDelete` (value: `"OnDelete"`)

* `RollingUpdate` (value: `"RollingUpdate"`)




