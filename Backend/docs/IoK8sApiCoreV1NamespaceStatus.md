# Kubernetes.IoK8sApiCoreV1NamespaceStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[IoK8sApiCoreV1NamespaceCondition]**](IoK8sApiCoreV1NamespaceCondition.md) | Represents the latest available observations of a namespace&#39;s current state. | [optional] 
**phase** | **String** | Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/  Possible enum values:  - &#x60;\&quot;Active\&quot;&#x60; means the namespace is available for use in the system  - &#x60;\&quot;Terminating\&quot;&#x60; means the namespace is undergoing graceful termination | [optional] 



## Enum: PhaseEnum


* `Active` (value: `"Active"`)

* `Terminating` (value: `"Terminating"`)



