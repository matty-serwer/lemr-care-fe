import * as sdk from 'node-appwrite';

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env

const client = new sdk.Client();

client
  .setEndpoint("'https://cloud.appwrite.io/v1'")
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

console.log("Endpoint: ", ENDPOINT);
console.log("Project ID: ", PROJECT_ID);
console.log("API Key: ", API_KEY);
console.log("client: ", client);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);


