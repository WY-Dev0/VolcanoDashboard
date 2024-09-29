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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kubernetes);
  }
}(this, function(expect, Kubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner', function() {
    it('should create an instance of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner', function() {
      // uncomment below and update the code to test ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be.a(Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner);
    });

    it('should have the property awsElasticBlockStore (base name: "awsElasticBlockStore")', function() {
      // uncomment below and update the code to test the property awsElasticBlockStore
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property azureDisk (base name: "azureDisk")', function() {
      // uncomment below and update the code to test the property azureDisk
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property azureFile (base name: "azureFile")', function() {
      // uncomment below and update the code to test the property azureFile
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property cephfs (base name: "cephfs")', function() {
      // uncomment below and update the code to test the property cephfs
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property cinder (base name: "cinder")', function() {
      // uncomment below and update the code to test the property cinder
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property configMap (base name: "configMap")', function() {
      // uncomment below and update the code to test the property configMap
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property csi (base name: "csi")', function() {
      // uncomment below and update the code to test the property csi
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property downwardAPI (base name: "downwardAPI")', function() {
      // uncomment below and update the code to test the property downwardAPI
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property emptyDir (base name: "emptyDir")', function() {
      // uncomment below and update the code to test the property emptyDir
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property ephemeral (base name: "ephemeral")', function() {
      // uncomment below and update the code to test the property ephemeral
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property fc (base name: "fc")', function() {
      // uncomment below and update the code to test the property fc
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property flexVolume (base name: "flexVolume")', function() {
      // uncomment below and update the code to test the property flexVolume
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property flocker (base name: "flocker")', function() {
      // uncomment below and update the code to test the property flocker
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property gcePersistentDisk (base name: "gcePersistentDisk")', function() {
      // uncomment below and update the code to test the property gcePersistentDisk
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property gitRepo (base name: "gitRepo")', function() {
      // uncomment below and update the code to test the property gitRepo
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property glusterfs (base name: "glusterfs")', function() {
      // uncomment below and update the code to test the property glusterfs
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property hostPath (base name: "hostPath")', function() {
      // uncomment below and update the code to test the property hostPath
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property iscsi (base name: "iscsi")', function() {
      // uncomment below and update the code to test the property iscsi
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property nfs (base name: "nfs")', function() {
      // uncomment below and update the code to test the property nfs
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property persistentVolumeClaim (base name: "persistentVolumeClaim")', function() {
      // uncomment below and update the code to test the property persistentVolumeClaim
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property photonPersistentDisk (base name: "photonPersistentDisk")', function() {
      // uncomment below and update the code to test the property photonPersistentDisk
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property portworxVolume (base name: "portworxVolume")', function() {
      // uncomment below and update the code to test the property portworxVolume
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property projected (base name: "projected")', function() {
      // uncomment below and update the code to test the property projected
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property quobyte (base name: "quobyte")', function() {
      // uncomment below and update the code to test the property quobyte
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property rbd (base name: "rbd")', function() {
      // uncomment below and update the code to test the property rbd
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property scaleIO (base name: "scaleIO")', function() {
      // uncomment below and update the code to test the property scaleIO
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property storageos (base name: "storageos")', function() {
      // uncomment below and update the code to test the property storageos
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

    it('should have the property vsphereVolume (base name: "vsphereVolume")', function() {
      // uncomment below and update the code to test the property vsphereVolume
      //var instance = new Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner();
      //expect(instance).to.be();
    });

  });

}));
