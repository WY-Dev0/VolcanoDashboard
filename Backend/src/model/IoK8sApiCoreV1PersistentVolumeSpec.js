/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource from './IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import IoK8sApiCoreV1AzureDiskVolumeSource from './IoK8sApiCoreV1AzureDiskVolumeSource';
import IoK8sApiCoreV1AzureFilePersistentVolumeSource from './IoK8sApiCoreV1AzureFilePersistentVolumeSource';
import IoK8sApiCoreV1CSIPersistentVolumeSource from './IoK8sApiCoreV1CSIPersistentVolumeSource';
import IoK8sApiCoreV1CephFSPersistentVolumeSource from './IoK8sApiCoreV1CephFSPersistentVolumeSource';
import IoK8sApiCoreV1CinderPersistentVolumeSource from './IoK8sApiCoreV1CinderPersistentVolumeSource';
import IoK8sApiCoreV1FCVolumeSource from './IoK8sApiCoreV1FCVolumeSource';
import IoK8sApiCoreV1FlexPersistentVolumeSource from './IoK8sApiCoreV1FlexPersistentVolumeSource';
import IoK8sApiCoreV1FlockerVolumeSource from './IoK8sApiCoreV1FlockerVolumeSource';
import IoK8sApiCoreV1GCEPersistentDiskVolumeSource from './IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import IoK8sApiCoreV1GlusterfsPersistentVolumeSource from './IoK8sApiCoreV1GlusterfsPersistentVolumeSource';
import IoK8sApiCoreV1HostPathVolumeSource from './IoK8sApiCoreV1HostPathVolumeSource';
import IoK8sApiCoreV1ISCSIPersistentVolumeSource from './IoK8sApiCoreV1ISCSIPersistentVolumeSource';
import IoK8sApiCoreV1LocalVolumeSource from './IoK8sApiCoreV1LocalVolumeSource';
import IoK8sApiCoreV1NFSVolumeSource from './IoK8sApiCoreV1NFSVolumeSource';
import IoK8sApiCoreV1ObjectReference from './IoK8sApiCoreV1ObjectReference';
import IoK8sApiCoreV1PhotonPersistentDiskVolumeSource from './IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import IoK8sApiCoreV1PortworxVolumeSource from './IoK8sApiCoreV1PortworxVolumeSource';
import IoK8sApiCoreV1QuobyteVolumeSource from './IoK8sApiCoreV1QuobyteVolumeSource';
import IoK8sApiCoreV1RBDPersistentVolumeSource from './IoK8sApiCoreV1RBDPersistentVolumeSource';
import IoK8sApiCoreV1ScaleIOPersistentVolumeSource from './IoK8sApiCoreV1ScaleIOPersistentVolumeSource';
import IoK8sApiCoreV1StorageOSPersistentVolumeSource from './IoK8sApiCoreV1StorageOSPersistentVolumeSource';
import IoK8sApiCoreV1VolumeNodeAffinity from './IoK8sApiCoreV1VolumeNodeAffinity';
import IoK8sApiCoreV1VsphereVirtualDiskVolumeSource from './IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';

/**
 * The IoK8sApiCoreV1PersistentVolumeSpec model module.
 * @module model/IoK8sApiCoreV1PersistentVolumeSpec
 * @version v1.30.0
 */
class IoK8sApiCoreV1PersistentVolumeSpec {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PersistentVolumeSpec</code>.
     * PersistentVolumeSpec is the specification of a persistent volume.
     * @alias module:model/IoK8sApiCoreV1PersistentVolumeSpec
     */
    constructor() { 
        
        IoK8sApiCoreV1PersistentVolumeSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PersistentVolumeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PersistentVolumeSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PersistentVolumeSpec} The populated <code>IoK8sApiCoreV1PersistentVolumeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PersistentVolumeSpec();

            if (data.hasOwnProperty('accessModes')) {
                obj['accessModes'] = ApiClient.convertToType(data['accessModes'], ['String']);
            }
            if (data.hasOwnProperty('awsElasticBlockStore')) {
                obj['awsElasticBlockStore'] = IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.constructFromObject(data['awsElasticBlockStore']);
            }
            if (data.hasOwnProperty('azureDisk')) {
                obj['azureDisk'] = IoK8sApiCoreV1AzureDiskVolumeSource.constructFromObject(data['azureDisk']);
            }
            if (data.hasOwnProperty('azureFile')) {
                obj['azureFile'] = IoK8sApiCoreV1AzureFilePersistentVolumeSource.constructFromObject(data['azureFile']);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], {'String': 'String'});
            }
            if (data.hasOwnProperty('cephfs')) {
                obj['cephfs'] = IoK8sApiCoreV1CephFSPersistentVolumeSource.constructFromObject(data['cephfs']);
            }
            if (data.hasOwnProperty('cinder')) {
                obj['cinder'] = IoK8sApiCoreV1CinderPersistentVolumeSource.constructFromObject(data['cinder']);
            }
            if (data.hasOwnProperty('claimRef')) {
                obj['claimRef'] = IoK8sApiCoreV1ObjectReference.constructFromObject(data['claimRef']);
            }
            if (data.hasOwnProperty('csi')) {
                obj['csi'] = IoK8sApiCoreV1CSIPersistentVolumeSource.constructFromObject(data['csi']);
            }
            if (data.hasOwnProperty('fc')) {
                obj['fc'] = IoK8sApiCoreV1FCVolumeSource.constructFromObject(data['fc']);
            }
            if (data.hasOwnProperty('flexVolume')) {
                obj['flexVolume'] = IoK8sApiCoreV1FlexPersistentVolumeSource.constructFromObject(data['flexVolume']);
            }
            if (data.hasOwnProperty('flocker')) {
                obj['flocker'] = IoK8sApiCoreV1FlockerVolumeSource.constructFromObject(data['flocker']);
            }
            if (data.hasOwnProperty('gcePersistentDisk')) {
                obj['gcePersistentDisk'] = IoK8sApiCoreV1GCEPersistentDiskVolumeSource.constructFromObject(data['gcePersistentDisk']);
            }
            if (data.hasOwnProperty('glusterfs')) {
                obj['glusterfs'] = IoK8sApiCoreV1GlusterfsPersistentVolumeSource.constructFromObject(data['glusterfs']);
            }
            if (data.hasOwnProperty('hostPath')) {
                obj['hostPath'] = IoK8sApiCoreV1HostPathVolumeSource.constructFromObject(data['hostPath']);
            }
            if (data.hasOwnProperty('iscsi')) {
                obj['iscsi'] = IoK8sApiCoreV1ISCSIPersistentVolumeSource.constructFromObject(data['iscsi']);
            }
            if (data.hasOwnProperty('local')) {
                obj['local'] = IoK8sApiCoreV1LocalVolumeSource.constructFromObject(data['local']);
            }
            if (data.hasOwnProperty('mountOptions')) {
                obj['mountOptions'] = ApiClient.convertToType(data['mountOptions'], ['String']);
            }
            if (data.hasOwnProperty('nfs')) {
                obj['nfs'] = IoK8sApiCoreV1NFSVolumeSource.constructFromObject(data['nfs']);
            }
            if (data.hasOwnProperty('nodeAffinity')) {
                obj['nodeAffinity'] = IoK8sApiCoreV1VolumeNodeAffinity.constructFromObject(data['nodeAffinity']);
            }
            if (data.hasOwnProperty('persistentVolumeReclaimPolicy')) {
                obj['persistentVolumeReclaimPolicy'] = ApiClient.convertToType(data['persistentVolumeReclaimPolicy'], 'String');
            }
            if (data.hasOwnProperty('photonPersistentDisk')) {
                obj['photonPersistentDisk'] = IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.constructFromObject(data['photonPersistentDisk']);
            }
            if (data.hasOwnProperty('portworxVolume')) {
                obj['portworxVolume'] = IoK8sApiCoreV1PortworxVolumeSource.constructFromObject(data['portworxVolume']);
            }
            if (data.hasOwnProperty('quobyte')) {
                obj['quobyte'] = IoK8sApiCoreV1QuobyteVolumeSource.constructFromObject(data['quobyte']);
            }
            if (data.hasOwnProperty('rbd')) {
                obj['rbd'] = IoK8sApiCoreV1RBDPersistentVolumeSource.constructFromObject(data['rbd']);
            }
            if (data.hasOwnProperty('scaleIO')) {
                obj['scaleIO'] = IoK8sApiCoreV1ScaleIOPersistentVolumeSource.constructFromObject(data['scaleIO']);
            }
            if (data.hasOwnProperty('storageClassName')) {
                obj['storageClassName'] = ApiClient.convertToType(data['storageClassName'], 'String');
            }
            if (data.hasOwnProperty('storageos')) {
                obj['storageos'] = IoK8sApiCoreV1StorageOSPersistentVolumeSource.constructFromObject(data['storageos']);
            }
            if (data.hasOwnProperty('volumeAttributesClassName')) {
                obj['volumeAttributesClassName'] = ApiClient.convertToType(data['volumeAttributesClassName'], 'String');
            }
            if (data.hasOwnProperty('volumeMode')) {
                obj['volumeMode'] = ApiClient.convertToType(data['volumeMode'], 'String');
            }
            if (data.hasOwnProperty('vsphereVolume')) {
                obj['vsphereVolume'] = IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.constructFromObject(data['vsphereVolume']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PersistentVolumeSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PersistentVolumeSpec</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['accessModes'])) {
            throw new Error("Expected the field `accessModes` to be an array in the JSON data but got " + data['accessModes']);
        }
        // validate the optional field `awsElasticBlockStore`
        if (data['awsElasticBlockStore']) { // data not null
          IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.validateJSON(data['awsElasticBlockStore']);
        }
        // validate the optional field `azureDisk`
        if (data['azureDisk']) { // data not null
          IoK8sApiCoreV1AzureDiskVolumeSource.validateJSON(data['azureDisk']);
        }
        // validate the optional field `azureFile`
        if (data['azureFile']) { // data not null
          IoK8sApiCoreV1AzureFilePersistentVolumeSource.validateJSON(data['azureFile']);
        }
        // validate the optional field `cephfs`
        if (data['cephfs']) { // data not null
          IoK8sApiCoreV1CephFSPersistentVolumeSource.validateJSON(data['cephfs']);
        }
        // validate the optional field `cinder`
        if (data['cinder']) { // data not null
          IoK8sApiCoreV1CinderPersistentVolumeSource.validateJSON(data['cinder']);
        }
        // validate the optional field `claimRef`
        if (data['claimRef']) { // data not null
          IoK8sApiCoreV1ObjectReference.validateJSON(data['claimRef']);
        }
        // validate the optional field `csi`
        if (data['csi']) { // data not null
          IoK8sApiCoreV1CSIPersistentVolumeSource.validateJSON(data['csi']);
        }
        // validate the optional field `fc`
        if (data['fc']) { // data not null
          IoK8sApiCoreV1FCVolumeSource.validateJSON(data['fc']);
        }
        // validate the optional field `flexVolume`
        if (data['flexVolume']) { // data not null
          IoK8sApiCoreV1FlexPersistentVolumeSource.validateJSON(data['flexVolume']);
        }
        // validate the optional field `flocker`
        if (data['flocker']) { // data not null
          IoK8sApiCoreV1FlockerVolumeSource.validateJSON(data['flocker']);
        }
        // validate the optional field `gcePersistentDisk`
        if (data['gcePersistentDisk']) { // data not null
          IoK8sApiCoreV1GCEPersistentDiskVolumeSource.validateJSON(data['gcePersistentDisk']);
        }
        // validate the optional field `glusterfs`
        if (data['glusterfs']) { // data not null
          IoK8sApiCoreV1GlusterfsPersistentVolumeSource.validateJSON(data['glusterfs']);
        }
        // validate the optional field `hostPath`
        if (data['hostPath']) { // data not null
          IoK8sApiCoreV1HostPathVolumeSource.validateJSON(data['hostPath']);
        }
        // validate the optional field `iscsi`
        if (data['iscsi']) { // data not null
          IoK8sApiCoreV1ISCSIPersistentVolumeSource.validateJSON(data['iscsi']);
        }
        // validate the optional field `local`
        if (data['local']) { // data not null
          IoK8sApiCoreV1LocalVolumeSource.validateJSON(data['local']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mountOptions'])) {
            throw new Error("Expected the field `mountOptions` to be an array in the JSON data but got " + data['mountOptions']);
        }
        // validate the optional field `nfs`
        if (data['nfs']) { // data not null
          IoK8sApiCoreV1NFSVolumeSource.validateJSON(data['nfs']);
        }
        // validate the optional field `nodeAffinity`
        if (data['nodeAffinity']) { // data not null
          IoK8sApiCoreV1VolumeNodeAffinity.validateJSON(data['nodeAffinity']);
        }
        // ensure the json data is a string
        if (data['persistentVolumeReclaimPolicy'] && !(typeof data['persistentVolumeReclaimPolicy'] === 'string' || data['persistentVolumeReclaimPolicy'] instanceof String)) {
            throw new Error("Expected the field `persistentVolumeReclaimPolicy` to be a primitive type in the JSON string but got " + data['persistentVolumeReclaimPolicy']);
        }
        // validate the optional field `photonPersistentDisk`
        if (data['photonPersistentDisk']) { // data not null
          IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.validateJSON(data['photonPersistentDisk']);
        }
        // validate the optional field `portworxVolume`
        if (data['portworxVolume']) { // data not null
          IoK8sApiCoreV1PortworxVolumeSource.validateJSON(data['portworxVolume']);
        }
        // validate the optional field `quobyte`
        if (data['quobyte']) { // data not null
          IoK8sApiCoreV1QuobyteVolumeSource.validateJSON(data['quobyte']);
        }
        // validate the optional field `rbd`
        if (data['rbd']) { // data not null
          IoK8sApiCoreV1RBDPersistentVolumeSource.validateJSON(data['rbd']);
        }
        // validate the optional field `scaleIO`
        if (data['scaleIO']) { // data not null
          IoK8sApiCoreV1ScaleIOPersistentVolumeSource.validateJSON(data['scaleIO']);
        }
        // ensure the json data is a string
        if (data['storageClassName'] && !(typeof data['storageClassName'] === 'string' || data['storageClassName'] instanceof String)) {
            throw new Error("Expected the field `storageClassName` to be a primitive type in the JSON string but got " + data['storageClassName']);
        }
        // validate the optional field `storageos`
        if (data['storageos']) { // data not null
          IoK8sApiCoreV1StorageOSPersistentVolumeSource.validateJSON(data['storageos']);
        }
        // ensure the json data is a string
        if (data['volumeAttributesClassName'] && !(typeof data['volumeAttributesClassName'] === 'string' || data['volumeAttributesClassName'] instanceof String)) {
            throw new Error("Expected the field `volumeAttributesClassName` to be a primitive type in the JSON string but got " + data['volumeAttributesClassName']);
        }
        // ensure the json data is a string
        if (data['volumeMode'] && !(typeof data['volumeMode'] === 'string' || data['volumeMode'] instanceof String)) {
            throw new Error("Expected the field `volumeMode` to be a primitive type in the JSON string but got " + data['volumeMode']);
        }
        // validate the optional field `vsphereVolume`
        if (data['vsphereVolume']) { // data not null
          IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.validateJSON(data['vsphereVolume']);
        }

        return true;
    }


}



/**
 * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
 * @member {Array.<module:model/IoK8sApiCoreV1PersistentVolumeSpec.AccessModesEnum>} accessModes
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['accessModes'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource} awsElasticBlockStore
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['awsElasticBlockStore'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1AzureDiskVolumeSource} azureDisk
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['azureDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1AzureFilePersistentVolumeSource} azureFile
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['azureFile'] = undefined;

/**
 * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
 * @member {Object.<String, String>} capacity
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['capacity'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CephFSPersistentVolumeSource} cephfs
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['cephfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CinderPersistentVolumeSource} cinder
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['cinder'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ObjectReference} claimRef
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['claimRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CSIPersistentVolumeSource} csi
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['csi'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FCVolumeSource} fc
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['fc'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FlexPersistentVolumeSource} flexVolume
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['flexVolume'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FlockerVolumeSource} flocker
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['flocker'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource} gcePersistentDisk
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['gcePersistentDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GlusterfsPersistentVolumeSource} glusterfs
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['glusterfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1HostPathVolumeSource} hostPath
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['hostPath'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ISCSIPersistentVolumeSource} iscsi
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['iscsi'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1LocalVolumeSource} local
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['local'] = undefined;

/**
 * mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
 * @member {Array.<String>} mountOptions
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['mountOptions'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1NFSVolumeSource} nfs
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['nfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1VolumeNodeAffinity} nodeAffinity
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['nodeAffinity'] = undefined;

/**
 * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming  Possible enum values:  - `\"Delete\"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.  - `\"Recycle\"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.  - `\"Retain\"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
 * @member {module:model/IoK8sApiCoreV1PersistentVolumeSpec.PersistentVolumeReclaimPolicyEnum} persistentVolumeReclaimPolicy
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['persistentVolumeReclaimPolicy'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource} photonPersistentDisk
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['photonPersistentDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PortworxVolumeSource} portworxVolume
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['portworxVolume'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1QuobyteVolumeSource} quobyte
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['quobyte'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1RBDPersistentVolumeSource} rbd
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['rbd'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ScaleIOPersistentVolumeSource} scaleIO
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['scaleIO'] = undefined;

/**
 * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
 * @member {String} storageClassName
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['storageClassName'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1StorageOSPersistentVolumeSource} storageos
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['storageos'] = undefined;

/**
 * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
 * @member {String} volumeAttributesClassName
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['volumeAttributesClassName'] = undefined;

/**
 * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.  Possible enum values:  - `\"Block\"` means the volume will not be formatted with a filesystem and will remain a raw block device.  - `\"Filesystem\"` means the volume will be or is formatted with a filesystem.
 * @member {module:model/IoK8sApiCoreV1PersistentVolumeSpec.VolumeModeEnum} volumeMode
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['volumeMode'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1VsphereVirtualDiskVolumeSource} vsphereVolume
 */
IoK8sApiCoreV1PersistentVolumeSpec.prototype['vsphereVolume'] = undefined;





/**
 * Allowed values for the <code>accessModes</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1PersistentVolumeSpec['AccessModesEnum'] = {

    /**
     * value: "ReadOnlyMany"
     * @const
     */
    "ReadOnlyMany": "ReadOnlyMany",

    /**
     * value: "ReadWriteMany"
     * @const
     */
    "ReadWriteMany": "ReadWriteMany",

    /**
     * value: "ReadWriteOnce"
     * @const
     */
    "ReadWriteOnce": "ReadWriteOnce",

    /**
     * value: "ReadWriteOncePod"
     * @const
     */
    "ReadWriteOncePod": "ReadWriteOncePod"
};


/**
 * Allowed values for the <code>persistentVolumeReclaimPolicy</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1PersistentVolumeSpec['PersistentVolumeReclaimPolicyEnum'] = {

    /**
     * value: "Delete"
     * @const
     */
    "Delete": "Delete",

    /**
     * value: "Recycle"
     * @const
     */
    "Recycle": "Recycle",

    /**
     * value: "Retain"
     * @const
     */
    "Retain": "Retain"
};


/**
 * Allowed values for the <code>volumeMode</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1PersistentVolumeSpec['VolumeModeEnum'] = {

    /**
     * value: "Block"
     * @const
     */
    "Block": "Block",

    /**
     * value: "Filesystem"
     * @const
     */
    "Filesystem": "Filesystem"
};



export default IoK8sApiCoreV1PersistentVolumeSpec;

