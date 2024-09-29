# Kubernetes.IoK8sApiCoreV1ModifyVolumeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | status is the status of the ControllerModifyVolume operation. It can be in any of following states:  - Pending    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as    the specified VolumeAttributesClass not existing.  - InProgress    InProgress indicates that the volume is being modified.  - Infeasible   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To    resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.  Possible enum values:  - &#x60;\&quot;InProgress\&quot;&#x60; InProgress indicates that the volume is being modified  - &#x60;\&quot;Infeasible\&quot;&#x60; Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified  - &#x60;\&quot;Pending\&quot;&#x60; Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing | 
**targetVolumeAttributesClassName** | **String** | targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled | [optional] 



## Enum: StatusEnum


* `InProgress` (value: `"InProgress"`)

* `Infeasible` (value: `"Infeasible"`)

* `Pending` (value: `"Pending"`)




