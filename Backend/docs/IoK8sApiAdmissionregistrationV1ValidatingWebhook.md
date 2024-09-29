# Kubernetes.IoK8sApiAdmissionregistrationV1ValidatingWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admissionReviewVersions** | **[String]** | AdmissionReviewVersions is an ordered list of preferred &#x60;AdmissionReview&#x60; versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. | 
**clientConfig** | [**IoK8sApiAdmissionregistrationV1WebhookClientConfig**](IoK8sApiAdmissionregistrationV1WebhookClientConfig.md) |  | 
**failurePolicy** | **String** | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.  Possible enum values:  - &#x60;\&quot;Fail\&quot;&#x60; means that an error calling the webhook causes the admission to fail.  - &#x60;\&quot;Ignore\&quot;&#x60; means that an error calling the webhook is ignored. | [optional] 
**matchConditions** | [**[IoK8sApiAdmissionregistrationV1MatchCondition]**](IoK8sApiAdmissionregistrationV1MatchCondition.md) | MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.   2. If ALL matchConditions evaluate to TRUE, the webhook is called.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy&#x3D;Fail, reject the request      - If failurePolicy&#x3D;Ignore, the error is ignored and the webhook is skipped | [optional] 
**matchPolicy** | **String** | matchPolicy defines how the \&quot;rules\&quot; list is used to match incoming requests. Allowed values are \&quot;Exact\&quot; or \&quot;Equivalent\&quot;.  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \&quot;rules\&quot; only included &#x60;apiGroups:[\&quot;apps\&quot;], apiVersions:[\&quot;v1\&quot;], resources: [\&quot;deployments\&quot;]&#x60;, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \&quot;rules\&quot; only included &#x60;apiGroups:[\&quot;apps\&quot;], apiVersions:[\&quot;v1\&quot;], resources: [\&quot;deployments\&quot;]&#x60;, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.  Defaults to \&quot;Equivalent\&quot;  Possible enum values:  - &#x60;\&quot;Equivalent\&quot;&#x60; means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.  - &#x60;\&quot;Exact\&quot;&#x60; means requests should only be sent to the webhook if they exactly match a given rule. | [optional] 
**name** | **String** | The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where \&quot;imagepolicy\&quot; is the name of the webhook, and kubernetes.io is the name of the organization. Required. | 
**namespaceSelector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [optional] 
**objectSelector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [optional] 
**rules** | [**[IoK8sApiAdmissionregistrationV1RuleWithOperations]**](IoK8sApiAdmissionregistrationV1RuleWithOperations.md) | Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. | [optional] 
**sideEffects** | **String** | SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects &#x3D;&#x3D; Unknown or Some.  Possible enum values:  - &#x60;\&quot;None\&quot;&#x60; means that calling the webhook will have no side effects.  - &#x60;\&quot;NoneOnDryRun\&quot;&#x60; means that calling the webhook will possibly have side effects, but if the request being reviewed has the dry-run attribute, the side effects will be suppressed.  - &#x60;\&quot;Some\&quot;&#x60; means that calling the webhook will possibly have side effects. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail.  - &#x60;\&quot;Unknown\&quot;&#x60; means that no information is known about the side effects of calling the webhook. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail. | 
**timeoutSeconds** | **Number** | TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds. | [optional] 



## Enum: FailurePolicyEnum


* `Fail` (value: `"Fail"`)

* `Ignore` (value: `"Ignore"`)





## Enum: MatchPolicyEnum


* `Equivalent` (value: `"Equivalent"`)

* `Exact` (value: `"Exact"`)





## Enum: SideEffectsEnum


* `None` (value: `"None"`)

* `NoneOnDryRun` (value: `"NoneOnDryRun"`)

* `Some` (value: `"Some"`)

* `Unknown` (value: `"Unknown"`)



