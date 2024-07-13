import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
 useCdn:false,
  token: "skQ94hknz0epaIyjur5CZNqxndxA5GR5rB0BUQY3X4Bro5JXtap0ZWG3OpdQdJGIsO8QCBwrp59i8Nis6r25hmN89R7vyyannKiFomicVQQiLldt32pSOBxhvAHYdwGrKzafXvInYPkP9wN835aaox1wJpgZS1hwS9aoYY4qGi6fsB4YaPMA" // Replace with your actual API token
});
