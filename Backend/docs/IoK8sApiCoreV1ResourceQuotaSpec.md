# Kubernetes.IoK8sApiCoreV1ResourceQuotaSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | **{String: String}** | hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ | [optional] 
**scopeSelector** | [**IoK8sApiCoreV1ScopeSelector**](IoK8sApiCoreV1ScopeSelector.md) |  | [optional] 
**scopes** | **[String]** | A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. | [optional] 



## Enum: [ScopesEnum]


* `BestEffort` (value: `"BestEffort"`)

* `CrossNamespacePodAffinity` (value: `"CrossNamespacePodAffinity"`)

* `NotBestEffort` (value: `"NotBestEffort"`)

* `NotTerminating` (value: `"NotTerminating"`)

* `PriorityClass` (value: `"PriorityClass"`)

* `Terminating` (value: `"Terminating"`)




