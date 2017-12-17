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





/**
* The ImportProductsSchemaField model module.
* @module model/ImportProductsSchemaField
* @version 3.0.0
*/
export default class ImportProductsSchemaField {
    /**
    * Constructs a new <code>ImportProductsSchemaField</code>.
    * @alias module:model/ImportProductsSchemaField
    * @class
    * @param sourceField {String} 
    * @param destinationField {module:model/ImportProductsSchemaField.DestinationFieldEnum} 
    */

    constructor(sourceField, destinationField) {
        

        
        

        this['source_field'] = sourceField;this['destination_field'] = destinationField;

        
    }

    /**
    * Constructs a <code>ImportProductsSchemaField</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ImportProductsSchemaField} obj Optional instance to populate.
    * @return {module:model/ImportProductsSchemaField} The populated <code>ImportProductsSchemaField</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportProductsSchemaField();

            
            
            

            if (data.hasOwnProperty('source_field')) {
                obj['source_field'] = ApiClient.convertToType(data['source_field'], 'String');
            }
            if (data.hasOwnProperty('destination_field')) {
                obj['destination_field'] = ApiClient.convertToType(data['destination_field'], 'String');
            }
            if (data.hasOwnProperty('string_transformer')) {
                obj['string_transformer'] = ApiClient.convertToType(data['string_transformer'], 'String');
            }
            if (data.hasOwnProperty('math_transformer')) {
                obj['math_transformer'] = ApiClient.convertToType(data['math_transformer'], 'String');
            }
            if (data.hasOwnProperty('split_by_character')) {
                obj['split_by_character'] = ApiClient.convertToType(data['split_by_character'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} source_field
    */
    source_field = undefined;
    /**
    * @member {module:model/ImportProductsSchemaField.DestinationFieldEnum} destination_field
    */
    destination_field = undefined;
    /**
    * @member {module:model/ImportProductsSchemaField.StringTransformerEnum} string_transformer
    */
    string_transformer = undefined;
    /**
    * @member {String} math_transformer
    */
    math_transformer = undefined;
    /**
    * @member {String} split_by_character
    */
    split_by_character = undefined;






    /**
    * Allowed values for the <code>destination_field</code> property.
    * @enum {String}
    * @readonly
    */
    static DestinationFieldEnum = {
    
        /**
         * value: "model"
         * @const
         */
        "model": "model",
    
        /**
         * value: "sku"
         * @const
         */
        "sku": "sku",
    
        /**
         * value: "title"
         * @const
         */
        "title": "title",
    
        /**
         * value: "description"
         * @const
         */
        "description": "description",
    
        /**
         * value: "description_extra"
         * @const
         */
        "description_extra": "description_extra",
    
        /**
         * value: "images"
         * @const
         */
        "images": "images",
    
        /**
         * value: "upc"
         * @const
         */
        "upc": "upc",
    
        /**
         * value: "gtin"
         * @const
         */
        "gtin": "gtin",
    
        /**
         * value: "weight"
         * @const
         */
        "weight": "weight",
    
        /**
         * value: "price"
         * @const
         */
        "price": "price",
    
        /**
         * value: "wholesale_price"
         * @const
         */
        "wholesale_price": "wholesale_price",
    
        /**
         * value: "option"
         * @const
         */
        "option": "option",
    
        /**
         * value: "property"
         * @const
         */
        "property": "property"    
    };

    /**
    * Allowed values for the <code>string_transformer</code> property.
    * @enum {String}
    * @readonly
    */
    static StringTransformerEnum = {
    
        /**
         * value: "uppercase"
         * @const
         */
        "uppercase": "uppercase",
    
        /**
         * value: "capitalize"
         * @const
         */
        "capitalize": "capitalize",
    
        /**
         * value: "capitalize-first"
         * @const
         */
        "capitalize-first": "capitalize-first",
    
        /**
         * value: "lowercase"
         * @const
         */
        "lowercase": "lowercase"    
    };



}


