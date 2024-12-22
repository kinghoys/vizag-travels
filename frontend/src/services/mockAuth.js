// Simulated delay to mimic API call
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Initialize users from localStorage or empty array
const getStoredUsers = () => {
  const storedUsers = localStorage.getItem('mockUsers');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

// Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem('mockUsers', JSON.stringify(users));
};

// Password validation
const isPasswordValid = (password) => {
  return (
    password.length >= 8 && // at least 8 characters
    /[A-Z]/.test(password) && // at least one uppercase
    /[a-z]/.test(password) && // at least one lowercase
    /[0-9]/.test(password) && // at least one number
    /[^A-Za-z0-9]/.test(password) // at least one special character
  );
};

// Email validation
const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Phone validation
const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
};

export const mockAuthService = {
  login: async (email, password) => {
    await delay(500); // Simulate network delay

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (!isEmailValid(email)) {
      throw new Error('Invalid email format');
    }

    const users = getStoredUsers();
    const user = users.find(u => u.email === email);
    
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Math.random(),
    };
  },

  signup: async (userData) => {
    await delay(500); // Simulate network delay

    // Validate required fields
    if (!userData.email || !userData.password || !userData.firstName || !userData.lastName || !userData.phone) {
      throw new Error('All fields are required');
    }

    // Validate email format
    if (!isEmailValid(userData.email)) {
      throw new Error('Invalid email format');
    }

    // Validate password strength
    if (!isPasswordValid(userData.password)) {
      throw new Error(
        'Password must be at least 8 characters long and contain: ' +
        'uppercase letter, lowercase letter, number, and special character'
      );
    }

    // Validate phone number
    if (!isPhoneValid(userData.phone)) {
      throw new Error('Phone number must be 10 digits');
    }

    const users = getStoredUsers();

    // Check if user already exists
    if (users.some(u => u.email === userData.email)) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: 'user-' + Date.now(),
      ...userData,
      role: 'user',
      createdAt: new Date().toISOString(),
      preferences: {
        theme: 'light',
        notifications: true,
        newsletter: true
      }
    };

    // Save to localStorage
    users.push(newUser);
    saveUsers(users);

    const { password: _, ...userWithoutPassword } = newUser;
    return {
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Math.random(),
    };
  },

  updateProfile: async (userId, updatedData) => {
    await delay(500); // Simulate network delay

    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Validate email if it's being updated
    if (updatedData.email && !isEmailValid(updatedData.email)) {
      throw new Error('Invalid email format');
    }

    // Validate phone if it's being updated
    if (updatedData.phone && !isPhoneValid(updatedData.phone)) {
      throw new Error('Phone number must be 10 digits');
    }

    // Update user data
    users[userIndex] = {
      ...users[userIndex],
      ...updatedData,
      updatedAt: new Date().toISOString(),
    };

    // Save to localStorage
    saveUsers(users);

    const { password: _, ...userWithoutPassword } = users[userIndex];
    return {
      user: userWithoutPassword,
    };
  },

  // Add remember me functionality
  setRememberedEmail: (email) => {
    if (email) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  },

  getRememberedEmail: () => {
    return localStorage.getItem('rememberedEmail');
  },
};
