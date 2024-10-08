# Kubernetes.IoK8sApiCoreV1ScopedResourceSelectorRequirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **String** | Represents a scope&#39;s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.  Possible enum values:  - &#x60;\&quot;DoesNotExist\&quot;&#x60;  - &#x60;\&quot;Exists\&quot;&#x60;  - &#x60;\&quot;In\&quot;&#x60;  - &#x60;\&quot;NotIn\&quot;&#x60; | 
**scopeName** | **String** | The name of the scope that the selector applies to.  Possible enum values:  - &#x60;\&quot;BestEffort\&quot;&#x60; Match all pod objects that have best effort quality of service  - &#x60;\&quot;CrossNamespacePodAffinity\&quot;&#x60; Match all pod objects that have cross-namespace pod (anti)affinity mentioned.  - &#x60;\&quot;NotBestEffort\&quot;&#x60; Match all pod objects that do not have best effort quality of service  - &#x60;\&quot;NotTerminating\&quot;&#x60; Match all pod objects where spec.activeDeadlineSeconds is nil  - &#x60;\&quot;PriorityClass\&quot;&#x60; Match all pod objects that have priority class mentioned  - &#x60;\&quot;Terminating\&quot;&#x60; Match all pod objects where spec.activeDeadlineSeconds &gt;&#x3D;0 | 
**values** | **[String]** | An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. | [optional] 



## Enum: OperatorEnum


* `DoesNotExist` (value: `"DoesNotExist"`)

* `Exists` (value: `"Exists"`)

* `In` (value: `"In"`)

* `NotIn` (value: `"NotIn"`)





## Enum: ScopeNameEnum


* `BestEffort` (value: `"BestEffort"`)

* `CrossNamespacePodAffinity` (value: `"CrossNamespacePodAffinity"`)

* `NotBestEffort` (value: `"NotBestEffort"`)

* `NotTerminating` (value: `"NotTerminating"`)

* `PriorityClass` (value: `"PriorityClass"`)

* `Terminating` (value: `"Terminating"`)




