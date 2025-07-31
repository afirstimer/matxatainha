import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'user' | 'shop';

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    rewardPoints: number;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string, role: UserRole) => Promise<boolean>;
    signup: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
    logout: () => void;
    addRewardPoints: (points: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Dummy users data
const dummyUsers: User[] = [
    {
        id: '1',
        email: 'user@example.com',
        name: 'Nguyễn Văn An',
        role: 'user',
        rewardPoints: 250
    },
    {
        id: '2',
        email: 'shop@example.com',
        name: 'Spa Mai Moon',
        role: 'shop',
        rewardPoints: 0
    }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const foundUser = dummyUsers.find(u => u.email === email && u.role === role);
        if (foundUser) {
            setUser(foundUser);
            return true;
        }
        return false;
    };

    const signup = async (email: string, password: string, name: string, role: UserRole): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newUser: User = {
            id: Date.now().toString(),
            email,
            name,
            role,
            rewardPoints: role === 'user' ? 100 : 0 // Welcome bonus for users
        };

        dummyUsers.push(newUser);
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    const addRewardPoints = (points: number) => {
        if (user) {
            setUser({ ...user, rewardPoints: user.rewardPoints + points });
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, addRewardPoints }}>
            {children}
        </AuthContext.Provider>
    );
};