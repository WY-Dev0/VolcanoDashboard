# Kubernetes.IoK8sApiCoreV1PersistentVolumeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessModes** | **[String]** | accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes | [optional] 
**awsElasticBlockStore** | [**IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource**](IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.md) |  | [optional] 
**azureDisk** | [**IoK8sApiCoreV1AzureDiskVolumeSource**](IoK8sApiCoreV1AzureDiskVolumeSource.md) |  | [optional] 
**azureFile** | [**IoK8sApiCoreV1AzureFilePersistentVolumeSource**](IoK8sApiCoreV1AzureFilePersistentVolumeSource.md) |  | [optional] 
**capacity** | **{String: String}** | capacity is the description of the persistent volume&#39;s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity | [optional] 
**cephfs** | [**IoK8sApiCoreV1CephFSPersistentVolumeSource**](IoK8sApiCoreV1CephFSPersistentVolumeSource.md) |  | [optional] 
**cinder** | [**IoK8sApiCoreV1CinderPersistentVolumeSource**](IoK8sApiCoreV1CinderPersistentVolumeSource.md) |  | [optional] 
**claimRef** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] 
**csi** | [**IoK8sApiCoreV1CSIPersistentVolumeSource**](IoK8sApiCoreV1CSIPersistentVolumeSource.md) |  | [optional] 
**fc** | [**IoK8sApiCoreV1FCVolumeSource**](IoK8sApiCoreV1FCVolumeSource.md) |  | [optional] 
**flexVolume** | [**IoK8sApiCoreV1FlexPersistentVolumeSource**](IoK8sApiCoreV1FlexPersistentVolumeSource.md) |  | [optional] 
**flocker** | [**IoK8sApiCoreV1FlockerVolumeSource**](IoK8sApiCoreV1FlockerVolumeSource.md) |  | [optional] 
**gcePersistentDisk** | [**IoK8sApiCoreV1GCEPersistentDiskVolumeSource**](IoK8sApiCoreV1GCEPersistentDiskVolumeSource.md) |  | [optional] 
**glusterfs** | [**IoK8sApiCoreV1GlusterfsPersistentVolumeSource**](IoK8sApiCoreV1GlusterfsPersistentVolumeSource.md) |  | [optional] 
**hostPath** | [**IoK8sApiCoreV1HostPathVolumeSource**](IoK8sApiCoreV1HostPathVolumeSource.md) |  | [optional] 
**iscsi** | [**IoK8sApiCoreV1ISCSIPersistentVolumeSource**](IoK8sApiCoreV1ISCSIPersistentVolumeSource.md) |  | [optional] 
**local** | [**IoK8sApiCoreV1LocalVolumeSource**](IoK8sApiCoreV1LocalVolumeSource.md) |  | [optional] 
**mountOptions** | **[String]** | mountOptions is the list of mount options, e.g. [\&quot;ro\&quot;, \&quot;soft\&quot;]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options | [optional] 
**nfs** | [**IoK8sApiCoreV1NFSVolumeSource**](IoK8sApiCoreV1NFSVolumeSource.md) |  | [optional] 
**nodeAffinity** | [**IoK8sApiCoreV1VolumeNodeAffinity**](IoK8sApiCoreV1VolumeNodeAffinity.md) |  | [optional] 
**persistentVolumeReclaimPolicy** | **String** | persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming  Possible enum values:  - &#x60;\&quot;Delete\&quot;&#x60; means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.  - &#x60;\&quot;Recycle\&quot;&#x60; means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.  - &#x60;\&quot;Retain\&quot;&#x60; means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain. | [optional] 
**photonPersistentDisk** | [**IoK8sApiCoreV1PhotonPersistentDiskVolumeSource**](IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.md) |  | [optional] 
**portworxVolume** | [**IoK8sApiCoreV1PortworxVolumeSource**](IoK8sApiCoreV1PortworxVolumeSource.md) |  | [optional] 
**quobyte** | [**IoK8sApiCoreV1QuobyteVolumeSource**](IoK8sApiCoreV1QuobyteVolumeSource.md) |  | [optional] 
**rbd** | [**IoK8sApiCoreV1RBDPersistentVolumeSource**](IoK8sApiCoreV1RBDPersistentVolumeSource.md) |  | [optional] 
**scaleIO** | [**IoK8sApiCoreV1ScaleIOPersistentVolumeSource**](IoK8sApiCoreV1ScaleIOPersistentVolumeSource.md) |  | [optional] 
**storageClassName** | **String** | storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass. | [optional] 
**storageos** | [**IoK8sApiCoreV1StorageOSPersistentVolumeSource**](IoK8sApiCoreV1StorageOSPersistentVolumeSource.md) |  | [optional] 
**volumeAttributesClassName** | **String** | Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature. | [optional] 
**volumeMode** | **String** | volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.  Possible enum values:  - &#x60;\&quot;Block\&quot;&#x60; means the volume will not be formatted with a filesystem and will remain a raw block device.  - &#x60;\&quot;Filesystem\&quot;&#x60; means the volume will be or is formatted with a filesystem. | [optional] 
**vsphereVolume** | [**IoK8sApiCoreV1VsphereVirtualDiskVolumeSource**](IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.md) |  | [optional] 



## Enum: [AccessModesEnum]


* `ReadOnlyMany` (value: `"ReadOnlyMany"`)

* `ReadWriteMany` (value: `"ReadWriteMany"`)

* `ReadWriteOnce` (value: `"ReadWriteOnce"`)

* `ReadWriteOncePod` (value: `"ReadWriteOncePod"`)





## Enum: PersistentVolumeReclaimPolicyEnum


* `Delete` (value: `"Delete"`)

* `Recycle` (value: `"Recycle"`)

* `Retain` (value: `"Retain"`)





## Enum: VolumeModeEnum


* `Block` (value: `"Block"`)

* `Filesystem` (value: `"Filesystem"`)




