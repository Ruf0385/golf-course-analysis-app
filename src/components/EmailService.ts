/**
 * Service for handling email-related functionality
 */

/**
 * Sends a subscription email to the admin
 * 
 * @param name - The subscriber's name
 * @param email - The subscriber's email
 * @param message - Optional message from the subscriber
 * @returns Promise that resolves when the email is sent
 */
export const sendSubscriptionEmail = async (
  name: string,
  email: string,
  message: string = ''
): Promise<void> => {
  // In a real application, this would call an API endpoint
  // For now, we'll simulate a successful API call
  
  console.log('Subscription request:', { name, email, message });
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In production, you would send this data to your backend
  // Example:
  // const response = await fetch('/api/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ name, email, message }),
  // });
  // 
  // if (!response.ok) {
  //   throw new Error('Failed to subscribe');
  // }
  
  // For development, we'll just log that we would send to adam.d.ruf@gmail.com
  console.log(`Would send subscription notification to adam.d.ruf@gmail.com`);
  
  // Return successfully
  return Promise.resolve();
};

/**
 * Sends a contact form submission to the admin
 * 
 * @param name - The contact's name
 * @param email - The contact's email
 * @param subject - The subject of the message
 * @param message - The contact message
 * @returns Promise that resolves when the email is sent
 */
export const sendContactEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  // Similar implementation as above
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log that we would send to adam.d.ruf@gmail.com
  console.log(`Would send contact form to adam.d.ruf@gmail.com`);
  
  return Promise.resolve();
};
