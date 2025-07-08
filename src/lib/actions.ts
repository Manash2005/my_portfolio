"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      success: false,
    };
  }

  // Simulate sending the form data to an email service or database
  try {
    console.log("Form data:", validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real application, you would add your form submission logic here.
    // e.g., send an email, save to a database.
  } catch (error) {
    return {
        message: 'Something went wrong. Please try again later.',
        success: false,
    }
  }
  
  return {
    message: 'Your message has been sent successfully!',
    success: true,
  };
}
