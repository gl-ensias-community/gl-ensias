"use server";

import db from "../db/index";
import {contact} from "../db/schemas/contact";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const sendMessage = async (contactData: { name: string; email: string; message: string }) => {
  try {
    const { name, email, message } = contactData;

    await db.insert(contact).values({ name, email, message });

    revalidatePath("/");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "Something went wrong" };
  }
  /*try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await db.insert(contact).values({ name,email,message });

    revalidatePath("/");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "something went wrong" };
  }*/
};


export const getMessages = async () => {
  try {
  

    const messages=await db.select().from(contact);

    revalidatePath("/");

    return messages;
  } catch (error) {
    return "an error has occured"+error;
  }
};


