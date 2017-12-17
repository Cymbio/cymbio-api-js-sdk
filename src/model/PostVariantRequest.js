/**
 * Cymbio 3 API
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
import PostVariantOption from './PostVariantOption';
import PostVariantProperty from './PostVariantProperty';





/**
* The PostVariantRequest model module.
* @module model/PostVariantRequest
* @version 3.0.0
*/
export default class PostVariantRequest {
    /**
    * Constructs a new <code>PostVariantRequest</code>.
    * @alias module:model/PostVariantRequest
    * @class
    * @param sku {String} 
    * @param model {String} 
    * @param retailPrice {Number} 
    * @param title {String} 
    * @param images {Array.<String>} 
    */

    constructor(sku, model, retailPrice, title, images) {
        

        
        

        this['sku'] = sku;this['model'] = model;this['retail_price'] = retailPrice;this['title'] = title;this['images'] = images;

        
    }

    /**
    * Constructs a <code>PostVariantRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostVariantRequest} obj Optional instance to populate.
    * @return {module:model/PostVariantRequest} The populated <code>PostVariantRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostVariantRequest();

            
            
            

            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('retail_price')) {
                obj['retail_price'] = ApiClient.convertToType(data['retail_price'], 'Number');
            }
            if (data.hasOwnProperty('wholesale_price')) {
                obj['wholesale_price'] = ApiClient.convertToType(data['wholesale_price'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('description_extra')) {
                obj['description_extra'] = ApiClient.convertToType(data['description_extra'], 'String');
            }
            if (data.hasOwnProperty('gtin')) {
                obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [PostVariantProperty]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [PostVariantOption]);
            }
        }
        return obj;
    }

    /**
    * @member {String} sku
    */
    sku = undefined;
    /**
    * @member {String} model
    */
    model = undefined;
    /**
    * @member {Number} retail_price
    */
    retail_price = undefined;
    /**
    * @member {Number} wholesale_price
    */
    wholesale_price = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} description_extra
    */
    description_extra = undefined;
    /**
    * @member {String} gtin
    */
    gtin = undefined;
    /**
    * @member {String} upc
    */
    upc = undefined;
    /**
    * @member {Number} weight
    */
    weight = undefined;
    /**
    * @member {Array.<String>} images
    */
    images = undefined;
    /**
    * @member {Array.<module:model/PostVariantProperty>} properties
    */
    properties = undefined;
    /**
    * @member {Array.<module:model/PostVariantOption>} options
    */
    options = undefined;








}


