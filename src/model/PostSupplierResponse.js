/**
 * Cymbio
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The PostSupplierResponse model module.
* @module model/PostSupplierResponse
* @version 3.0.0
*/
export default class PostSupplierResponse {
    /**
    * Constructs a new <code>PostSupplierResponse</code>.
    * @alias module:model/PostSupplierResponse
    * @class
    * @param id {Number} 
    * @param name {String} 
    * @param subdomain {String} 
    * @param createdAt {String} 
    * @param updatedAt {String} 
    */

    constructor(id, name, subdomain, createdAt, updatedAt) {
        

        
        

        this['id'] = id;this['name'] = name;this['subdomain'] = subdomain;this['createdAt'] = createdAt;this['updatedAt'] = updatedAt;

        
    }

    /**
    * Constructs a <code>PostSupplierResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostSupplierResponse} obj Optional instance to populate.
    * @return {module:model/PostSupplierResponse} The populated <code>PostSupplierResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSupplierResponse();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subdomain')) {
                obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} subdomain
    */
    subdomain = undefined;
    /**
    * @member {String} createdAt
    */
    createdAt = undefined;
    /**
    * @member {String} updatedAt
    */
    updatedAt = undefined;








}


