// import { Client, Account } from "appwrite";

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1") // apna endpoint
//   .setProject("PROJECT_ID"); // apna project ID

// export const account = new Account(client);



import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // .env se endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT); // .env se project ID

export const account = new Account(client);

export default client;
