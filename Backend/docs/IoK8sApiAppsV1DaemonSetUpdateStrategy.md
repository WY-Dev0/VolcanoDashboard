# Kubernetes.IoK8sApiAppsV1DaemonSetUpdateStrategy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollingUpdate** | [**IoK8sApiAppsV1RollingUpdateDaemonSet**](IoK8sApiAppsV1RollingUpdateDaemonSet.md) |  | [optional] 
**type** | **String** | Type of daemon set update. Can be \&quot;RollingUpdate\&quot; or \&quot;OnDelete\&quot;. Default is RollingUpdate.  Possible enum values:  - &#x60;\&quot;OnDelete\&quot;&#x60; Replace the old daemons only when it&#39;s killed  - &#x60;\&quot;RollingUpdate\&quot;&#x60; Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other. | [optional] 



## Enum: TypeEnum


* `OnDelete` (value: `"OnDelete"`)

* `RollingUpdate` (value: `"RollingUpdate"`)




