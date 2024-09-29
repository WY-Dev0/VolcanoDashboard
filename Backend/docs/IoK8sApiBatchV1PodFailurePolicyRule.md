# Kubernetes.IoK8sApiBatchV1PodFailurePolicyRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:  - FailJob: indicates that the pod&#39;s job is marked as Failed and all   running pods are terminated. - FailIndex: indicates that the pod&#39;s index is marked as Failed and will   not be restarted.   This value is beta-level. It can be used when the   &#x60;JobBackoffLimitPerIndex&#x60; feature gate is enabled (enabled by default). - Ignore: indicates that the counter towards the .backoffLimit is not   incremented and a replacement pod is created. - Count: indicates that the pod is handled in the default way - the   counter towards the .backoffLimit is incremented. Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.  Possible enum values:  - &#x60;\&quot;Count\&quot;&#x60; This is an action which might be taken on a pod failure - the pod failure is handled in the default way - the counter towards .backoffLimit, represented by the job&#39;s .status.failed field, is incremented.  - &#x60;\&quot;FailIndex\&quot;&#x60; This is an action which might be taken on a pod failure - mark the Job&#39;s index as failed to avoid restarts within this index. This action can only be used when backoffLimitPerIndex is set. This value is beta-level.  - &#x60;\&quot;FailJob\&quot;&#x60; This is an action which might be taken on a pod failure - mark the pod&#39;s job as Failed and terminate all running pods.  - &#x60;\&quot;Ignore\&quot;&#x60; This is an action which might be taken on a pod failure - the counter towards .backoffLimit, represented by the job&#39;s .status.failed field, is not incremented and a replacement pod is created. | 
**onExitCodes** | [**IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement**](IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement.md) |  | [optional] 
**onPodConditions** | [**[IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern]**](IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.md) | Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed. | [optional] 



## Enum: ActionEnum


* `Count` (value: `"Count"`)

* `FailIndex` (value: `"FailIndex"`)

* `FailJob` (value: `"FailJob"`)

* `Ignore` (value: `"Ignore"`)



