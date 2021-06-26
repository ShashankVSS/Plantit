const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config('./.env')

function load() {

    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;    
    
    // Create the BlobServiceClient object which will be used to create a container client
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    
    // Get a reference to a container
    const containerClient = blobServiceClient.getContainerClient(process.env.BLOB_CONTAINER);        

    return containerClient;

}

module.exports = load;
