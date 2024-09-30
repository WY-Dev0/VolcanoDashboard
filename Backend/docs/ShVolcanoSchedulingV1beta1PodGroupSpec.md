# Kubernetes.ShVolcanoSchedulingV1beta1PodGroupSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minMember** | **Number** | MinMember defines the minimal number of members/tasks to run the pod group; if there&#39;s not enough resources to start all tasks, the scheduler will not start anyone. | [optional] 
**minResources** | **{String: Object}** | MinResources defines the minimal resource of members/tasks to run the pod group; if there&#39;s not enough resources to start all tasks, the scheduler will not start anyone. | [optional] 
**minTaskMember** | **{String: Number}** | MinTaskMember defines the minimal number of pods to run each task in the pod group; if there&#39;s not enough resources to start each task, the scheduler will not start anyone. | [optional] 
**priorityClassName** | **String** | If specified, indicates the PodGroup&#39;s priority. \&quot;system-node-critical\&quot; and \&quot;system-cluster-critical\&quot; are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the PodGroup priority will be default or zero if there is no default. | [optional] 
**queue** | **String** | Queue defines the queue to allocate resource for PodGroup; if queue does not exist, the PodGroup will not be scheduled. Defaults to &#x60;default&#x60; Queue with the lowest weight. | [optional] 


