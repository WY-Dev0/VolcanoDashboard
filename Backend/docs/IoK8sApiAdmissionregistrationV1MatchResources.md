# Kubernetes.IoK8sApiAdmissionregistrationV1MatchResources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeResourceRules** | [**[IoK8sApiAdmissionregistrationV1NamedRuleWithOperations]**](IoK8sApiAdmissionregistrationV1NamedRuleWithOperations.md) | ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded) | [optional] 
**matchPolicy** | **String** | matchPolicy defines how the \&quot;MatchResources\&quot; list is used to match incoming requests. Allowed values are \&quot;Exact\&quot; or \&quot;Equivalent\&quot;.  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \&quot;rules\&quot; only included &#x60;apiGroups:[\&quot;apps\&quot;], apiVersions:[\&quot;v1\&quot;], resources: [\&quot;deployments\&quot;]&#x60;, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \&quot;rules\&quot; only included &#x60;apiGroups:[\&quot;apps\&quot;], apiVersions:[\&quot;v1\&quot;], resources: [\&quot;deployments\&quot;]&#x60;, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.  Defaults to \&quot;Equivalent\&quot;  Possible enum values:  - &#x60;\&quot;Equivalent\&quot;&#x60; means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.  - &#x60;\&quot;Exact\&quot;&#x60; means requests should only be sent to the webhook if they exactly match a given rule. | [optional] 
**namespaceSelector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [optional] 
**objectSelector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [optional] 
**resourceRules** | [**[IoK8sApiAdmissionregistrationV1NamedRuleWithOperations]**](IoK8sApiAdmissionregistrationV1NamedRuleWithOperations.md) | ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule. | [optional] 



## Enum: MatchPolicyEnum


* `Equivalent` (value: `"Equivalent"`)

* `Exact` (value: `"Exact"`)




