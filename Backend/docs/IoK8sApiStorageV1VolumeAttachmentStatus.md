# Kubernetes.IoK8sApiStorageV1VolumeAttachmentStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachError** | [**IoK8sApiStorageV1VolumeError**](IoK8sApiStorageV1VolumeError.md) |  | [optional] 
**attached** | **Boolean** | attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. | 
**attachmentMetadata** | **{String: String}** | attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. | [optional] 
**detachError** | [**IoK8sApiStorageV1VolumeError**](IoK8sApiStorageV1VolumeError.md) |  | [optional] 


