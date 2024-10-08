# Kubernetes.IoK8sApiCoreV1ScaleIOPersistentVolumeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **String** | fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Default is \&quot;xfs\&quot; | [optional] 
**gateway** | **String** | gateway is the host address of the ScaleIO API Gateway. | 
**protectionDomain** | **String** | protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. | [optional] 
**readOnly** | **Boolean** | readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] 
**secretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | 
**sslEnabled** | **Boolean** | sslEnabled is the flag to enable/disable SSL communication with Gateway, default false | [optional] 
**storageMode** | **String** | storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. | [optional] 
**storagePool** | **String** | storagePool is the ScaleIO Storage Pool associated with the protection domain. | [optional] 
**system** | **String** | system is the name of the storage system as configured in ScaleIO. | 
**volumeName** | **String** | volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source. | [optional] 


