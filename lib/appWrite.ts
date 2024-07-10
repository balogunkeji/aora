import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.tomi.aora",
  projectId: "668ec3b6000cd869d937",
  databaseId: "668ec95d0020a911b9a5",
  userCollectionId: "668ec9a5003702ca2948",
  videoCollectionId: "668ee098002a5db51c7b",
  storageId: "668ee6be002a5aabe85d",
};

const client = new Client();
client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async ({
  email,
  password,
  user,
}: any) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      user
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(user);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        user,
        avatar: avatarUrl,
      }
    );

    await signIn(email, user);
    return newUser;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
