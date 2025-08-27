// // Import Appwrite SDK
// import { Client, Account } from "appwrite";

// // Initialize client
// const client = new Client();
// client
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // replace with your endpoint
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT);               // replace with your project ID

// // Create Account instance
// const account = new Account(client);

// // Export account so other files can use it
// export { account };





import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

const account = new Account(client);

export { account };
