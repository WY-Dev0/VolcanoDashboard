# Kubernetes.ShVolcanoBusV1alpha1Command

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Action defines the action that will be took to the target object. | [optional] 
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] 
**message** | **String** | Human-readable message indicating details of this command. | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] 
**reason** | **String** | Unique, one-word, CamelCase reason for this command. | [optional] 
**target** | [**ShVolcanoBusV1alpha1CommandTarget**](ShVolcanoBusV1alpha1CommandTarget.md) |  | [optional] 


