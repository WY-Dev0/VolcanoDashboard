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
    instance = new Kubernetes.SchedulingVolcanoShV1beta1Api();
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

  describe('SchedulingVolcanoShV1beta1Api', function() {
    describe('createSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call createSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test createSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.createSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSchedulingVolcanoShV1beta1Queue', function() {
      it('should call createSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test createSchedulingVolcanoShV1beta1Queue
        //instance.createSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSchedulingVolcanoShV1beta1CollectionNamespacedPodGroup', function() {
      it('should call deleteSchedulingVolcanoShV1beta1CollectionNamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test deleteSchedulingVolcanoShV1beta1CollectionNamespacedPodGroup
        //instance.deleteSchedulingVolcanoShV1beta1CollectionNamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSchedulingVolcanoShV1beta1CollectionQueue', function() {
      it('should call deleteSchedulingVolcanoShV1beta1CollectionQueue successfully', function(done) {
        //uncomment below and update the code to test deleteSchedulingVolcanoShV1beta1CollectionQueue
        //instance.deleteSchedulingVolcanoShV1beta1CollectionQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call deleteSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test deleteSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.deleteSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSchedulingVolcanoShV1beta1Queue', function() {
      it('should call deleteSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test deleteSchedulingVolcanoShV1beta1Queue
        //instance.deleteSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call listSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test listSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.listSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSchedulingVolcanoShV1beta1PodGroupForAllNamespaces', function() {
      it('should call listSchedulingVolcanoShV1beta1PodGroupForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listSchedulingVolcanoShV1beta1PodGroupForAllNamespaces
        //instance.listSchedulingVolcanoShV1beta1PodGroupForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSchedulingVolcanoShV1beta1Queue', function() {
      it('should call listSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test listSchedulingVolcanoShV1beta1Queue
        //instance.listSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call patchSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test patchSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.patchSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchSchedulingVolcanoShV1beta1Queue', function() {
      it('should call patchSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test patchSchedulingVolcanoShV1beta1Queue
        //instance.patchSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchSchedulingVolcanoShV1beta1QueueStatus', function() {
      it('should call patchSchedulingVolcanoShV1beta1QueueStatus successfully', function(done) {
        //uncomment below and update the code to test patchSchedulingVolcanoShV1beta1QueueStatus
        //instance.patchSchedulingVolcanoShV1beta1QueueStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call readSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test readSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.readSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSchedulingVolcanoShV1beta1Queue', function() {
      it('should call readSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test readSchedulingVolcanoShV1beta1Queue
        //instance.readSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSchedulingVolcanoShV1beta1QueueStatus', function() {
      it('should call readSchedulingVolcanoShV1beta1QueueStatus successfully', function(done) {
        //uncomment below and update the code to test readSchedulingVolcanoShV1beta1QueueStatus
        //instance.readSchedulingVolcanoShV1beta1QueueStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceSchedulingVolcanoShV1beta1NamespacedPodGroup', function() {
      it('should call replaceSchedulingVolcanoShV1beta1NamespacedPodGroup successfully', function(done) {
        //uncomment below and update the code to test replaceSchedulingVolcanoShV1beta1NamespacedPodGroup
        //instance.replaceSchedulingVolcanoShV1beta1NamespacedPodGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceSchedulingVolcanoShV1beta1Queue', function() {
      it('should call replaceSchedulingVolcanoShV1beta1Queue successfully', function(done) {
        //uncomment below and update the code to test replaceSchedulingVolcanoShV1beta1Queue
        //instance.replaceSchedulingVolcanoShV1beta1Queue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceSchedulingVolcanoShV1beta1QueueStatus', function() {
      it('should call replaceSchedulingVolcanoShV1beta1QueueStatus successfully', function(done) {
        //uncomment below and update the code to test replaceSchedulingVolcanoShV1beta1QueueStatus
        //instance.replaceSchedulingVolcanoShV1beta1QueueStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
