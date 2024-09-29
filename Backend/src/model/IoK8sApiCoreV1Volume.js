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
import IoK8sApiCoreV1AzureFileVolumeSource from './IoK8sApiCoreV1AzureFileVolumeSource';
import IoK8sApiCoreV1CSIVolumeSource from './IoK8sApiCoreV1CSIVolumeSource';
import IoK8sApiCoreV1CephFSVolumeSource from './IoK8sApiCoreV1CephFSVolumeSource';
import IoK8sApiCoreV1CinderVolumeSource from './IoK8sApiCoreV1CinderVolumeSource';
import IoK8sApiCoreV1ConfigMapVolumeSource from './IoK8sApiCoreV1ConfigMapVolumeSource';
import IoK8sApiCoreV1DownwardAPIVolumeSource from './IoK8sApiCoreV1DownwardAPIVolumeSource';
import IoK8sApiCoreV1EmptyDirVolumeSource from './IoK8sApiCoreV1EmptyDirVolumeSource';
import IoK8sApiCoreV1EphemeralVolumeSource from './IoK8sApiCoreV1EphemeralVolumeSource';
import IoK8sApiCoreV1FCVolumeSource from './IoK8sApiCoreV1FCVolumeSource';
import IoK8sApiCoreV1FlexVolumeSource from './IoK8sApiCoreV1FlexVolumeSource';
import IoK8sApiCoreV1FlockerVolumeSource from './IoK8sApiCoreV1FlockerVolumeSource';
import IoK8sApiCoreV1GCEPersistentDiskVolumeSource from './IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import IoK8sApiCoreV1GitRepoVolumeSource from './IoK8sApiCoreV1GitRepoVolumeSource';
import IoK8sApiCoreV1GlusterfsVolumeSource from './IoK8sApiCoreV1GlusterfsVolumeSource';
import IoK8sApiCoreV1HostPathVolumeSource from './IoK8sApiCoreV1HostPathVolumeSource';
import IoK8sApiCoreV1ISCSIVolumeSource from './IoK8sApiCoreV1ISCSIVolumeSource';
import IoK8sApiCoreV1NFSVolumeSource from './IoK8sApiCoreV1NFSVolumeSource';
import IoK8sApiCoreV1PersistentVolumeClaimVolumeSource from './IoK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import IoK8sApiCoreV1PhotonPersistentDiskVolumeSource from './IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import IoK8sApiCoreV1PortworxVolumeSource from './IoK8sApiCoreV1PortworxVolumeSource';
import IoK8sApiCoreV1ProjectedVolumeSource from './IoK8sApiCoreV1ProjectedVolumeSource';
import IoK8sApiCoreV1QuobyteVolumeSource from './IoK8sApiCoreV1QuobyteVolumeSource';
import IoK8sApiCoreV1RBDVolumeSource from './IoK8sApiCoreV1RBDVolumeSource';
import IoK8sApiCoreV1ScaleIOVolumeSource from './IoK8sApiCoreV1ScaleIOVolumeSource';
import IoK8sApiCoreV1SecretVolumeSource from './IoK8sApiCoreV1SecretVolumeSource';
import IoK8sApiCoreV1StorageOSVolumeSource from './IoK8sApiCoreV1StorageOSVolumeSource';
import IoK8sApiCoreV1VsphereVirtualDiskVolumeSource from './IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';

/**
 * The IoK8sApiCoreV1Volume model module.
 * @module model/IoK8sApiCoreV1Volume
 * @version v1.30.0
 */
class IoK8sApiCoreV1Volume {
    /**
     * Constructs a new <code>IoK8sApiCoreV1Volume</code>.
     * Volume represents a named volume in a pod that may be accessed by any container in the pod.
     * @alias module:model/IoK8sApiCoreV1Volume
     * @param name {String} name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    constructor(name) { 
        
        IoK8sApiCoreV1Volume.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1Volume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1Volume} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1Volume} The populated <code>IoK8sApiCoreV1Volume</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1Volume();

            if (data.hasOwnProperty('awsElasticBlockStore')) {
                obj['awsElasticBlockStore'] = IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.constructFromObject(data['awsElasticBlockStore']);
            }
            if (data.hasOwnProperty('azureDisk')) {
                obj['azureDisk'] = IoK8sApiCoreV1AzureDiskVolumeSource.constructFromObject(data['azureDisk']);
            }
            if (data.hasOwnProperty('azureFile')) {
                obj['azureFile'] = IoK8sApiCoreV1AzureFileVolumeSource.constructFromObject(data['azureFile']);
            }
            if (data.hasOwnProperty('cephfs')) {
                obj['cephfs'] = IoK8sApiCoreV1CephFSVolumeSource.constructFromObject(data['cephfs']);
            }
            if (data.hasOwnProperty('cinder')) {
                obj['cinder'] = IoK8sApiCoreV1CinderVolumeSource.constructFromObject(data['cinder']);
            }
            if (data.hasOwnProperty('configMap')) {
                obj['configMap'] = IoK8sApiCoreV1ConfigMapVolumeSource.constructFromObject(data['configMap']);
            }
            if (data.hasOwnProperty('csi')) {
                obj['csi'] = IoK8sApiCoreV1CSIVolumeSource.constructFromObject(data['csi']);
            }
            if (data.hasOwnProperty('downwardAPI')) {
                obj['downwardAPI'] = IoK8sApiCoreV1DownwardAPIVolumeSource.constructFromObject(data['downwardAPI']);
            }
            if (data.hasOwnProperty('emptyDir')) {
                obj['emptyDir'] = IoK8sApiCoreV1EmptyDirVolumeSource.constructFromObject(data['emptyDir']);
            }
            if (data.hasOwnProperty('ephemeral')) {
                obj['ephemeral'] = IoK8sApiCoreV1EphemeralVolumeSource.constructFromObject(data['ephemeral']);
            }
            if (data.hasOwnProperty('fc')) {
                obj['fc'] = IoK8sApiCoreV1FCVolumeSource.constructFromObject(data['fc']);
            }
            if (data.hasOwnProperty('flexVolume')) {
                obj['flexVolume'] = IoK8sApiCoreV1FlexVolumeSource.constructFromObject(data['flexVolume']);
            }
            if (data.hasOwnProperty('flocker')) {
                obj['flocker'] = IoK8sApiCoreV1FlockerVolumeSource.constructFromObject(data['flocker']);
            }
            if (data.hasOwnProperty('gcePersistentDisk')) {
                obj['gcePersistentDisk'] = IoK8sApiCoreV1GCEPersistentDiskVolumeSource.constructFromObject(data['gcePersistentDisk']);
            }
            if (data.hasOwnProperty('gitRepo')) {
                obj['gitRepo'] = IoK8sApiCoreV1GitRepoVolumeSource.constructFromObject(data['gitRepo']);
            }
            if (data.hasOwnProperty('glusterfs')) {
                obj['glusterfs'] = IoK8sApiCoreV1GlusterfsVolumeSource.constructFromObject(data['glusterfs']);
            }
            if (data.hasOwnProperty('hostPath')) {
                obj['hostPath'] = IoK8sApiCoreV1HostPathVolumeSource.constructFromObject(data['hostPath']);
            }
            if (data.hasOwnProperty('iscsi')) {
                obj['iscsi'] = IoK8sApiCoreV1ISCSIVolumeSource.constructFromObject(data['iscsi']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nfs')) {
                obj['nfs'] = IoK8sApiCoreV1NFSVolumeSource.constructFromObject(data['nfs']);
            }
            if (data.hasOwnProperty('persistentVolumeClaim')) {
                obj['persistentVolumeClaim'] = IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.constructFromObject(data['persistentVolumeClaim']);
            }
            if (data.hasOwnProperty('photonPersistentDisk')) {
                obj['photonPersistentDisk'] = IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.constructFromObject(data['photonPersistentDisk']);
            }
            if (data.hasOwnProperty('portworxVolume')) {
                obj['portworxVolume'] = IoK8sApiCoreV1PortworxVolumeSource.constructFromObject(data['portworxVolume']);
            }
            if (data.hasOwnProperty('projected')) {
                obj['projected'] = IoK8sApiCoreV1ProjectedVolumeSource.constructFromObject(data['projected']);
            }
            if (data.hasOwnProperty('quobyte')) {
                obj['quobyte'] = IoK8sApiCoreV1QuobyteVolumeSource.constructFromObject(data['quobyte']);
            }
            if (data.hasOwnProperty('rbd')) {
                obj['rbd'] = IoK8sApiCoreV1RBDVolumeSource.constructFromObject(data['rbd']);
            }
            if (data.hasOwnProperty('scaleIO')) {
                obj['scaleIO'] = IoK8sApiCoreV1ScaleIOVolumeSource.constructFromObject(data['scaleIO']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = IoK8sApiCoreV1SecretVolumeSource.constructFromObject(data['secret']);
            }
            if (data.hasOwnProperty('storageos')) {
                obj['storageos'] = IoK8sApiCoreV1StorageOSVolumeSource.constructFromObject(data['storageos']);
            }
            if (data.hasOwnProperty('vsphereVolume')) {
                obj['vsphereVolume'] = IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.constructFromObject(data['vsphereVolume']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1Volume</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1Volume</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1Volume.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
          IoK8sApiCoreV1AzureFileVolumeSource.validateJSON(data['azureFile']);
        }
        // validate the optional field `cephfs`
        if (data['cephfs']) { // data not null
          IoK8sApiCoreV1CephFSVolumeSource.validateJSON(data['cephfs']);
        }
        // validate the optional field `cinder`
        if (data['cinder']) { // data not null
          IoK8sApiCoreV1CinderVolumeSource.validateJSON(data['cinder']);
        }
        // validate the optional field `configMap`
        if (data['configMap']) { // data not null
          IoK8sApiCoreV1ConfigMapVolumeSource.validateJSON(data['configMap']);
        }
        // validate the optional field `csi`
        if (data['csi']) { // data not null
          IoK8sApiCoreV1CSIVolumeSource.validateJSON(data['csi']);
        }
        // validate the optional field `downwardAPI`
        if (data['downwardAPI']) { // data not null
          IoK8sApiCoreV1DownwardAPIVolumeSource.validateJSON(data['downwardAPI']);
        }
        // validate the optional field `emptyDir`
        if (data['emptyDir']) { // data not null
          IoK8sApiCoreV1EmptyDirVolumeSource.validateJSON(data['emptyDir']);
        }
        // validate the optional field `ephemeral`
        if (data['ephemeral']) { // data not null
          IoK8sApiCoreV1EphemeralVolumeSource.validateJSON(data['ephemeral']);
        }
        // validate the optional field `fc`
        if (data['fc']) { // data not null
          IoK8sApiCoreV1FCVolumeSource.validateJSON(data['fc']);
        }
        // validate the optional field `flexVolume`
        if (data['flexVolume']) { // data not null
          IoK8sApiCoreV1FlexVolumeSource.validateJSON(data['flexVolume']);
        }
        // validate the optional field `flocker`
        if (data['flocker']) { // data not null
          IoK8sApiCoreV1FlockerVolumeSource.validateJSON(data['flocker']);
        }
        // validate the optional field `gcePersistentDisk`
        if (data['gcePersistentDisk']) { // data not null
          IoK8sApiCoreV1GCEPersistentDiskVolumeSource.validateJSON(data['gcePersistentDisk']);
        }
        // validate the optional field `gitRepo`
        if (data['gitRepo']) { // data not null
          IoK8sApiCoreV1GitRepoVolumeSource.validateJSON(data['gitRepo']);
        }
        // validate the optional field `glusterfs`
        if (data['glusterfs']) { // data not null
          IoK8sApiCoreV1GlusterfsVolumeSource.validateJSON(data['glusterfs']);
        }
        // validate the optional field `hostPath`
        if (data['hostPath']) { // data not null
          IoK8sApiCoreV1HostPathVolumeSource.validateJSON(data['hostPath']);
        }
        // validate the optional field `iscsi`
        if (data['iscsi']) { // data not null
          IoK8sApiCoreV1ISCSIVolumeSource.validateJSON(data['iscsi']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `nfs`
        if (data['nfs']) { // data not null
          IoK8sApiCoreV1NFSVolumeSource.validateJSON(data['nfs']);
        }
        // validate the optional field `persistentVolumeClaim`
        if (data['persistentVolumeClaim']) { // data not null
          IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.validateJSON(data['persistentVolumeClaim']);
        }
        // validate the optional field `photonPersistentDisk`
        if (data['photonPersistentDisk']) { // data not null
          IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.validateJSON(data['photonPersistentDisk']);
        }
        // validate the optional field `portworxVolume`
        if (data['portworxVolume']) { // data not null
          IoK8sApiCoreV1PortworxVolumeSource.validateJSON(data['portworxVolume']);
        }
        // validate the optional field `projected`
        if (data['projected']) { // data not null
          IoK8sApiCoreV1ProjectedVolumeSource.validateJSON(data['projected']);
        }
        // validate the optional field `quobyte`
        if (data['quobyte']) { // data not null
          IoK8sApiCoreV1QuobyteVolumeSource.validateJSON(data['quobyte']);
        }
        // validate the optional field `rbd`
        if (data['rbd']) { // data not null
          IoK8sApiCoreV1RBDVolumeSource.validateJSON(data['rbd']);
        }
        // validate the optional field `scaleIO`
        if (data['scaleIO']) { // data not null
          IoK8sApiCoreV1ScaleIOVolumeSource.validateJSON(data['scaleIO']);
        }
        // validate the optional field `secret`
        if (data['secret']) { // data not null
          IoK8sApiCoreV1SecretVolumeSource.validateJSON(data['secret']);
        }
        // validate the optional field `storageos`
        if (data['storageos']) { // data not null
          IoK8sApiCoreV1StorageOSVolumeSource.validateJSON(data['storageos']);
        }
        // validate the optional field `vsphereVolume`
        if (data['vsphereVolume']) { // data not null
          IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.validateJSON(data['vsphereVolume']);
        }

        return true;
    }


}

IoK8sApiCoreV1Volume.RequiredProperties = ["name"];

/**
 * @member {module:model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource} awsElasticBlockStore
 */
IoK8sApiCoreV1Volume.prototype['awsElasticBlockStore'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1AzureDiskVolumeSource} azureDisk
 */
IoK8sApiCoreV1Volume.prototype['azureDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1AzureFileVolumeSource} azureFile
 */
IoK8sApiCoreV1Volume.prototype['azureFile'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CephFSVolumeSource} cephfs
 */
IoK8sApiCoreV1Volume.prototype['cephfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CinderVolumeSource} cinder
 */
IoK8sApiCoreV1Volume.prototype['cinder'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ConfigMapVolumeSource} configMap
 */
IoK8sApiCoreV1Volume.prototype['configMap'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1CSIVolumeSource} csi
 */
IoK8sApiCoreV1Volume.prototype['csi'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1DownwardAPIVolumeSource} downwardAPI
 */
IoK8sApiCoreV1Volume.prototype['downwardAPI'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1EmptyDirVolumeSource} emptyDir
 */
IoK8sApiCoreV1Volume.prototype['emptyDir'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1EphemeralVolumeSource} ephemeral
 */
IoK8sApiCoreV1Volume.prototype['ephemeral'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FCVolumeSource} fc
 */
IoK8sApiCoreV1Volume.prototype['fc'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FlexVolumeSource} flexVolume
 */
IoK8sApiCoreV1Volume.prototype['flexVolume'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1FlockerVolumeSource} flocker
 */
IoK8sApiCoreV1Volume.prototype['flocker'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource} gcePersistentDisk
 */
IoK8sApiCoreV1Volume.prototype['gcePersistentDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GitRepoVolumeSource} gitRepo
 */
IoK8sApiCoreV1Volume.prototype['gitRepo'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GlusterfsVolumeSource} glusterfs
 */
IoK8sApiCoreV1Volume.prototype['glusterfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1HostPathVolumeSource} hostPath
 */
IoK8sApiCoreV1Volume.prototype['hostPath'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ISCSIVolumeSource} iscsi
 */
IoK8sApiCoreV1Volume.prototype['iscsi'] = undefined;

/**
 * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 * @member {String} name
 */
IoK8sApiCoreV1Volume.prototype['name'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1NFSVolumeSource} nfs
 */
IoK8sApiCoreV1Volume.prototype['nfs'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PersistentVolumeClaimVolumeSource} persistentVolumeClaim
 */
IoK8sApiCoreV1Volume.prototype['persistentVolumeClaim'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource} photonPersistentDisk
 */
IoK8sApiCoreV1Volume.prototype['photonPersistentDisk'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PortworxVolumeSource} portworxVolume
 */
IoK8sApiCoreV1Volume.prototype['portworxVolume'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ProjectedVolumeSource} projected
 */
IoK8sApiCoreV1Volume.prototype['projected'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1QuobyteVolumeSource} quobyte
 */
IoK8sApiCoreV1Volume.prototype['quobyte'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1RBDVolumeSource} rbd
 */
IoK8sApiCoreV1Volume.prototype['rbd'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ScaleIOVolumeSource} scaleIO
 */
IoK8sApiCoreV1Volume.prototype['scaleIO'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretVolumeSource} secret
 */
IoK8sApiCoreV1Volume.prototype['secret'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1StorageOSVolumeSource} storageos
 */
IoK8sApiCoreV1Volume.prototype['storageos'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1VsphereVirtualDiskVolumeSource} vsphereVolume
 */
IoK8sApiCoreV1Volume.prototype['vsphereVolume'] = undefined;






export default IoK8sApiCoreV1Volume;

