import bcrypt from 'bcrypt';

// Function to hash a password
const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // You can adjust the salt rounds as needed
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

// Function to compare a plain text password with a hashed password
const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing password');
  }
};

// Example usage
const runExample = async () => {
  const password = 'myPlainPassword';
  const hashedPassword = await hashPassword(password);
  console.log(`Hashed Password: ${hashedPassword}`);

  const isMatch = await comparePassword(password, hashedPassword);
  console.log(`Password Match: ${isMatch}`);
};

runExample();
