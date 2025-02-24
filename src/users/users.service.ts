import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 5,
      name: 'Evelyn Adams',
      email: 'evelyn.adams@example.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Frank Carter',
      email: 'frank.carter@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace.lee@example.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Hannah Walker',
      email: 'hannah.walker@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 9,
      name: 'Isaac Davis',
      email: 'isaac.davis@example.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Julia Martin',
      email: 'julia.martin@example.com',
      role: 'INTERN',
    },
    {
      id: 11,
      name: 'Kevin Thompson',
      email: 'kevin.thompson@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 12,
      name: 'Laura Garcia',
      email: 'laura.garcia@example.com',
      role: 'ADMIN',
    },
    {
      id: 13,
      name: 'Michael Anderson',
      email: 'michael.anderson@example.com',
      role: 'DEVELOPER',
    },
    {
      id: 14,
      name: 'Nina Rodriguez',
      email: 'nina.rodriguez@example.com',
      role: 'INTERN',
    },
    {
      id: 15,
      name: 'Oscar Hernandez',
      email: 'oscar.hernandez@example.com',
      role: 'DEVELOPER',
    },
  ];

  findAll(userRole?: 'ADMIN' | 'INTERN' | 'DEVELOPER') {
    if (userRole) {
      return this.users.filter((user) => user.role === userRole);
    }
    return this.users;
  }
  findOne(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
  create(user: {
    name: string;
    email: string;
    role: 'ADMIN' | 'INTERN' | 'DEVELOPER';
  }) {
    const userHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUserId = userHighestId[0].id + 1;
    const newUser = { id: newUserId, ...user };
    this.users.push(newUser);
    return newUser;
  }
  updateOne(
    userId: number,
    updatedUserInfo: {
      name?: string;
      email?: string;
      role?: 'ADMIN' | 'DEVELOPER' | 'INTERN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedUserInfo };
      }
      return user;
    });
    return this.findOne(userId);
  }
  delete(userDeletedId: number) {
    const removedUser = this.findOne(userDeletedId);
    this.users = this.users.filter((user) => user.id !== userDeletedId);
    return removedUser;
  }
}
