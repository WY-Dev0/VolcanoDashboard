# Kubernetes.IoK8sApiCoreV1AzureDiskVolumeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cachingMode** | **String** | cachingMode is the Host Caching mode: None, Read Only, Read Write.  Possible enum values:  - &#x60;\&quot;None\&quot;&#x60;  - &#x60;\&quot;ReadOnly\&quot;&#x60;  - &#x60;\&quot;ReadWrite\&quot;&#x60; | [optional] 
**diskName** | **String** | diskName is the Name of the data disk in the blob storage | 
**diskURI** | **String** | diskURI is the URI of data disk in the blob storage | 
**fsType** | **String** | fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] 
**kind** | **String** | kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared  Possible enum values:  - &#x60;\&quot;Dedicated\&quot;&#x60;  - &#x60;\&quot;Managed\&quot;&#x60;  - &#x60;\&quot;Shared\&quot;&#x60; | [optional] 
**readOnly** | **Boolean** | readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] 



## Enum: CachingModeEnum


* `None` (value: `"None"`)

* `ReadOnly` (value: `"ReadOnly"`)

* `ReadWrite` (value: `"ReadWrite"`)





## Enum: KindEnum


* `Dedicated` (value: `"Dedicated"`)

* `Managed` (value: `"Managed"`)

* `Shared` (value: `"Shared"`)




