# Kubernetes.IoK8sApiCoreV1AppArmorProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localhostProfile** | **String** | localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is \&quot;Localhost\&quot;. | [optional] 
**type** | **String** | type indicates which kind of AppArmor profile will be applied. Valid options are:   Localhost - a profile pre-loaded on the node.   RuntimeDefault - the container runtime&#39;s default profile.   Unconfined - no AppArmor enforcement.  Possible enum values:  - &#x60;\&quot;Localhost\&quot;&#x60; indicates that a profile pre-loaded on the node should be used.  - &#x60;\&quot;RuntimeDefault\&quot;&#x60; indicates that the container runtime&#39;s default AppArmor profile should be used.  - &#x60;\&quot;Unconfined\&quot;&#x60; indicates that no AppArmor profile should be enforced. | 



## Enum: TypeEnum


* `Localhost` (value: `"Localhost"`)

* `RuntimeDefault` (value: `"RuntimeDefault"`)

* `Unconfined` (value: `"Unconfined"`)




